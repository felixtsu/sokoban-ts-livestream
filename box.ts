namespace box {

    export interface Box {
        column(): number;
        row(): number;

        destroy():void;
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

        public destroy() :void {
            if (this.sprite) {
                this.sprite.destroy()
            }
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

        onDirectionButtonDown(direction: number) {
            if (this.bePushedAgainst(null, direction) == box.PushedResult.NOT_MOVED) {
                scene.cameraShake(4, 500)
            }
        }

        public constructor(protected containingBox:SubBox, column: number, row: number) {
            super(column, row)
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
                this.containingBox.enter(this)
            }
            return result
        }

    }


    export class BasicBox extends AbstractBox {
        public constructor(protected containingBox: SubBox, column: number, row: number) {
            super(column, row)
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
            }
            return result;
        }
    }

    export class SubBox extends AbstractBox {
        private internalTilemap : tiles.WorldMap = null // internal
        private boxes:Box[]
        private targetTiles : tiles.Location[]
        
        public constructor(protected containingBox: SubBox, column: number, row: number, tilemap : tiles.TileMapData) {
            super(column , row)
            this.boxes = []
            this.targetTiles = []
            this.internalTilemap = tiles.createMap(tilemap)
        }

        public destroy() : void {
            super.destroy()
            for (let box of this.boxes) {
                box.destroy()
            }

        }

        public enter(playerBox : PlayerBox) {
            tiles.setCurrentTilemap(this.internalTilemap.tilemap);
        }

        public load() {
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