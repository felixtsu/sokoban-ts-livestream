namespace timemap_util {


    export class Location {
        constructor(public column : number, public row:number) {
        }
    };


    export function locationsOf(tilemap:tiles.TileMapData, image:Image) : Location[] {
        let targetIndex = getTileIndexes(tilemap, [image])[0]
        if (targetIndex == -1) {
            return []
        }
        let result = []
        for (let row = 0 ; row < tilemap.height; row++ ) {
            for (let column = 0; column < tilemap.width; column++ ) {
                if (tilemap.getTile(column, row) == targetIndex) {
                    result.push(new Location(column, row))
                }
            }
        }
        return result;
    }



    export function getTileIndexes(tilemap:tiles.TileMapData, images:Image[]) :number[]{
        let tilesImages = tilemap.getTileset()
        let result = []
        for (let i = 0; i < images.length; i++) {
            let found = false;
            for (let tileImage of tilesImages) {
                if (images[i] == tileImage) {
                    result.push(i)
                    found = true
                    break;
                }
            }
            if (!found) {
                result.push(-1)
            }
        }
        return result;
    }

}

namespace box {

    export interface Box {
        column(): number;
        row(): number;

        destroy():void;
        bePushedAgainst(box: Box, direction: number): PushedResult;
        place(column:number, row:number) : void;
        changeParent(newParent : Box):void;

    }

    export enum PushedResult {
        NOT_MOVED, 
        MOVED,
        PARENT_CHANGED
    }
   

    export class BaseBox implements Box {
       
        protected _column: number;
        protected _row: number;

        sprite:Sprite

        public place(column:number, row:number):void {
            this._column = column
            this._row = row
            tiles.placeOnTile(this.sprite, tiles.getTileLocation(column, row))
        }

        hide() {
            this.sprite.setFlag(SpriteFlag.Invisible, true)
        }

        show() {
            this.sprite.setFlag(SpriteFlag.Invisible, false)
        }

        public destroy() :void {
            if (this.sprite) {
                this.sprite.destroy()
            }
        }

        public bePushedAgainst(box: Box, direction: number): PushedResult {
            return PushedResult.NOT_MOVED
        }

        changeParent(newParent: SubBox) {
            this.containingBox.removeBox(this)
            newParent.addBox(this)
            
            this.containingBox = newParent
        }
        protected constructor(protected containingBox:SubBox, column : number, row: number) {
            this._column = column
            this._row = row
        }

        public column() {
            return this._column
        }
        public row() {
            return this._row
        }

    }

    export class PlayerBox extends BaseBox {
        changeParent(newParent: SubBox) {
            this.containingBox.removeBox(this)
            newParent.addBox(this)

            this.containingBox.hideAllNonePlayerBoxes()

            this.containingBox = newParent
            newParent.showAll()
        }

        onDirectionButtonDown(direction: number) {
            if (this.bePushedAgainst(null, direction) == box.PushedResult.NOT_MOVED) {
                scene.cameraShake(4, 500)
            }
        }

        public constructor(protected containingBox:SubBox, column: number, row: number) {
            super(containingBox, column, row)
            this.sprite = sprites.create(assets.image`playerBoxNormal`)
            scene.cameraFollowSprite(this.sprite)
            
            controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
                this.onDirectionButtonDown(0)
            })
            controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
                this.onDirectionButtonDown(2)
            })
            controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
                this.onDirectionButtonDown(1)
            })
            controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
                this.onDirectionButtonDown(3)
            })
        }

        public bePushedAgainst(box: Box, direction: number): PushedResult {
            let result = this.containingBox.boxBeingPushed(this, direction) 
            if (result == PushedResult.MOVED) {
                let directionVector = DIRECTION_VECTORS[direction]
                this._column += directionVector[0]
                this._row += directionVector[1]
                this.sprite.x += directionVector[0] * 16
                this.sprite.y += directionVector[1] * 16
                info.changeScoreBy(1)
            } else if (result == PushedResult.PARENT_CHANGED) {
                this.containingBox.load()
            }
            return result
        }

    }


    export class BasicBox extends BaseBox {
        public constructor(protected containingBox: SubBox, column: number, row: number) {
            super(containingBox, column, row)
            this.sprite = sprites.create(assets.image`basicBoxNormalImage`)
            tiles.placeOnTile(this.sprite, tiles.getTileLocation(column, row))
        }
        bePushedAgainst(box: Box, direction: number): PushedResult {
            let result = this.containingBox.boxBeingPushed(this, direction)
            if (result == PushedResult.MOVED) {
                let directionVector = DIRECTION_VECTORS[direction]
                this._column += directionVector[0]
                this._row += directionVector[1]
                this.sprite.x += directionVector[0] * 16
                this.sprite.y += directionVector[1] * 16
                
            } else if (result == PushedResult.PARENT_CHANGED) {
                this.sprite.setFlag(SpriteFlag.Invisible, true)
                return PushedResult.MOVED
            }
            return result;
        }
    }

    export class SubBox extends BaseBox {
        private internalTilemap : tiles.WorldMap = null // internal
        private boxes:BaseBox[]
        private targetTiles : tiles.Location[]

        private edgeTiles : number[][]


        removeBox(box:BaseBox) {
            this.boxes.removeElement(box)
        }

        hideAllNonePlayerBoxes() {
            for (let box of this.boxes) {                
                box.hide()
            }
        }
        showAll() {
            for (let box of this.boxes) {
                box.show()
            }
        }

        addBox(box:BaseBox) {
            this.boxes.push(box)
        }
        
        public constructor(protected containingBox: SubBox, column: number, row: number, tilemap : tiles.TileMapData) {
            super(containingBox, column , row)
            this.boxes = []
            this.targetTiles = []
            this.internalTilemap = tiles.createMap(tilemap)
            if (containingBox != null) {
                this.sprite = sprites.create(assets.image`subBoxNormalImage`)
            }

            this.edgeTiles = [null, null, null, null]
            let edgeTileImageIndex = this.getTileIndex(assets.tile`edgeTile`)
            let tileMap = this.internalTilemap.tilemap
            let width = tileMap.width
            let height = tileMap.height
            for (let i = 0 ; i < width; i++) {
                if (this.internalTilemap.tilemap.getTile(i, 0) == edgeTileImageIndex) {
                     this.edgeTiles[0] = [i, 0]
                }
                if (this.internalTilemap.tilemap.getTile(i, height - 1) == edgeTileImageIndex) {
                    this.edgeTiles[2] = [i, height - 1]
                }
            }

            for (let i = 0; i < height; i++) {
                if (this.internalTilemap.tilemap.getTile(0, i) == edgeTileImageIndex) {
                    this.edgeTiles[3] = [0, i]
                }
                if (this.internalTilemap.tilemap.getTile(width - 1, i) == edgeTileImageIndex) {
                    this.edgeTiles[1] = [width - 1, i]
                }
            }
            
            
        }

        public destroy() : void {
            super.destroy()
            for (let box of this.boxes) {
                box.destroy()
            }

        }

        private getTileIndex(image:Image) :number {
            let tiles = this.internalTilemap.tilemap.getTileset()
            for (let i = 0; i < tiles.length; i++) {
                let tile = tiles[i]
                if (tile.equals(image)) {
                    return i
                }
            }
            tiles.push(image)
            return tiles.length - 1
        }

        public tryToLeave(box: Box, destination : Box, direction: number): PushedResult{
            let originalColumn = box.column()
            let originalRow = box.row()
            box.changeParent(destination)

            let directionVector = DIRECTION_VECTORS[direction]
            let targetColumn = this.column() 
            let targetRow = this.row() 
            box.place(targetColumn, targetRow)
            let result = box.bePushedAgainst(null, direction)
            if (result == PushedResult.MOVED) {
                return PushedResult.PARENT_CHANGED
            } else {
                box.changeParent(this)
                box.place(originalColumn, originalRow)
                return result
            }
        }

        public tryToEnter(box : Box, direction : number) :PushedResult{
            box.changeParent(this)
            // todo 
            // 1. different entrance according enter direction 
            // 2. decide can enter or not
            let edgeTileOfDirection = this.edgeTiles[(direction+2) % 4] // enter in the opposite edge
            box.place(edgeTileOfDirection[0], edgeTileOfDirection[1])
            box.bePushedAgainst(null, direction)
            return PushedResult.PARENT_CHANGED
        }


        public load() {
            tiles.setCurrentTilemap(this.internalTilemap.tilemap);

            for (let box of this.boxes) {
                box.show()
                box.place(box.column(), box.row())
            }
        }
        

        public init() {
            tiles.setCurrentTilemap(this.internalTilemap.tilemap);
    
            let startTiles = tiles.getTilesByType(assets.tile`startTile`)
            if (startTiles.length > 0) {
                let startTile = startTiles[0];
                let playerBox = new PlayerBox(this, startTile.column, startTile.row)
                playerBox.place(startTile.col, startTile.row)
                this.boxes.push(playerBox)
                tiles.setTileAt(startTile, sprites.dungeon.floorDark2)
            }
            let boxesTiles = tiles.getTilesByType(assets.tile`basicBoxNormal`)
            for (let boxTile of boxesTiles) {
                let basicBox = new BasicBox(this, boxTile.col, boxTile.row)
                tiles.setTileAt(boxTile, sprites.dungeon.floorDark2)
                this.boxes.push(basicBox)
            }
            this.targetTiles = tiles.getTilesByType(assets.tile`targetTile`)

            let subBoxesTiles = tiles.getTilesByType(assets.tile`subBoxTile`)
            for (let subBoxTile of subBoxesTiles) {
                // TODO 
                // 1. load level config by meta-data
                let subBox = new box.SubBox(this, subBoxTile.column, subBoxTile.row, assets.tilemap`SubBoxInLevel5`)
                subBox.place(subBoxTile.column, subBoxTile.row)
                this.boxes.push(subBox)
                tiles.setTileAt(subBoxTile, sprites.dungeon.floorDark2)
                
            }
        }

        public bePushedAgainst(pushingBox: Box, direction: number): PushedResult {
            let result = this.containingBox.boxBeingPushed(this, direction);
            if (result == PushedResult.NOT_MOVED) {
                if (this.tryToEnter(pushingBox, direction) == PushedResult.PARENT_CHANGED) {
                    return PushedResult.PARENT_CHANGED
                } else {
                    return PushedResult.NOT_MOVED
                }
            } else if (result == PushedResult.MOVED) {
                let directionVector = DIRECTION_VECTORS[direction]
                this._column += directionVector[0]
                this._row += directionVector[1]
                this.sprite.x += directionVector[0] * 16
                this.sprite.y += directionVector[1] * 16
                return result;
            }  else {
                return result;
            }
        }
        
        private boxAt(column : number, row:number) :Box {
            for (let box of this.boxes) {
                if (column == box.column() && row == box.row()) {
                    return box
                }
            }
            return null
        }

        public isFinished() {

            // check all internal boxes finished.
            for (let box of this.boxes) {
                if (box instanceof SubBox) {
                    if (!(box as SubBox).isFinished()) {
                        return false;
                    }
                }
            }
            
            // check this box finished
            for (let targetTile of this.targetTiles) {
                let boxAtTargetTile = this.boxAt(targetTile.col, targetTile.row)
                if (boxAtTargetTile == null || boxAtTargetTile instanceof PlayerBox) {
                    return false
                }
            }
            
            return true
        }

        public boxBeingPushed(pushedBox: Box, direction: number): PushedResult {
            let directionVector = DIRECTION_VECTORS[direction]
            let targetColumn = pushedBox.column() + directionVector[0]
            let targetRow = pushedBox.row() + directionVector[1]
            let boxAtTarget = this.boxAt(targetColumn, targetRow)
            if (boxAtTarget != null) {
                let result =  boxAtTarget.bePushedAgainst(pushedBox, direction)
                if (result == PushedResult.PARENT_CHANGED) {
                    return PushedResult.PARENT_CHANGED
                }
                return result
            } else if (this.internalTilemap.tilemap.isWall(targetColumn, targetRow)) {
                return PushedResult.NOT_MOVED
            } else if (this.internalTilemap.tilemap.getTile(targetColumn, targetRow) == this.getTileIndex(assets.tile`edgeTile`)) {
                if (this.tryToLeave(pushedBox, this.containingBox, direction) == PushedResult.PARENT_CHANGED) {
                    return PushedResult.PARENT_CHANGED
                }
                return PushedResult.NOT_MOVED
            } else {
                return PushedResult.MOVED
            }          
        }
    }


}