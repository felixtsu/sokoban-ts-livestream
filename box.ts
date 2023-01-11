namespace box {

    export interface Box {
        column(): number;
        row(): number;

        bePushedAgainst(box: Box, direction: number): PushedResult;
        place(column:number, row:number) : void;
    }


    export enum PushedResult {

        NOT_MOVED, 
        MOVED,
        PARENT_CHANGED
    }

   

    export class AbstractBox implements Box {
       
        protected _column: number;
        protected _row: number;

        sprite:Sprite

        public place(column:number, row:number):void {
            this._column = column
            this._row = row
            tiles.placeOnTile(this.sprite, tiles.getTileLocation(column, row))
        }

        public bePushedAgainst(box: Box, direction: number): PushedResult {
            return PushedResult.NOT_MOVED
        }
        protected constructor(column : number, row: number) {
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

    export class PlayerBox extends AbstractBox {

        public constructor(protected containingBox:SubBox, column: number, row: number) {
            super(column, row)
            this.sprite = sprites.create(assets.image`playerBoxNormal`)
            scene.cameraFollowSprite(this.sprite)
        }

        public bePushedAgainst(box: Box, direction: number): PushedResult {
            let result = this.containingBox.boxBeingPushed(this, direction) 
            if (result == PushedResult.MOVED) {
                let directionVector = DIRECTION_VECTORS[direction]
                this._column += directionVector[0]
                this._row += directionVector[1]
                this.sprite.x += directionVector[0] * 16
                this.sprite.y += directionVector[1] * 16
            } else if (result == PushedResult.PARENT_CHANGED) {
                this.containingBox.load()
            }
            return result
        }

    }


    export class BasicBox extends AbstractBox {
        public constructor(protected containingBox: SubBox, column: number, row: number) {
            super(column, row)
            this.sprite = sprites.create(assets.image`BasicBoxNormal`)
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
            }
            return result;
        }
    }

    export class SubBox extends AbstractBox {
        private internalTilemap : tiles.WorldMap = null // internal
        private boxes:Box[]
        
        public constructor(protected containingBox: SubBox, column: number, row: number, tilemap : tiles.TileMapData) {
            super(column , row)
            this.boxes = []
            this.internalTilemap = tiles.createMap(tilemap)
        }

        public load() {
            tiles.setCurrentTilemap(this.internalTilemap.tilemap);
            let startTile = tiles.getTilesByType(assets.tile`startTile`)[0];
            playerBox.place(startTile.col, startTile.row)
            tiles.setTileAt(startTile, sprites.dungeon.floorDark0)
        }

        public bePushedAgainst(pushingBox: Box, direction: number): PushedResult {
            return PushedResult.NOT_MOVED
        }
        
        private boxAt(column : number, row:number) :Box {
            for (let box of this.boxes) {
                if (column == box.column() && row == box.row()) {
                    return box
                }
            }
            return null
        }

        public boxBeingPushed(pushedBox: Box, direction: number): PushedResult {
            let directionVector = DIRECTION_VECTORS[direction]
            let targetColumn = pushedBox.column() + directionVector[0]
            let targetRow = pushedBox.row() + directionVector[1]
            let boxAtTarget = this.boxAt(targetColumn, targetRow)
            if (boxAtTarget != null) {
                let result =  boxAtTarget.bePushedAgainst(pushedBox, direction)
                if (result == PushedResult.PARENT_CHANGED) {
                    this.boxes.removeElement(boxAtTarget)
                }
                return result
            } else if (this.internalTilemap.tilemap.isWall(targetColumn, targetRow)) {
                return PushedResult.NOT_MOVED
            } else {
                return PushedResult.MOVED  
            }            
        }
    }


}