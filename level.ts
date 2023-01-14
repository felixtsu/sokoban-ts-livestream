// 在此处添加您的代码
namespace level{

    export let LEVELS = [
        simpleTilemapLevel(assets.tilemap`level0`),
        simpleTilemapLevel(assets.tilemap`level1`),
        simpleTilemapLevel(assets.tilemap`level8`),
        simpleTilemapLevel(assets.tilemap`level3`),
        prepareLevel4(),
        prepareLevel5(),
        prepareLevel7()
    ]

    export class Level {
        private boxes:box.SubBox[];

        private levelLoader: (level: Level) =>void
        private levelCleaner: (boxes: box.SubBox[]) => void

        static DEFAULT_LEVEL_CLEANER = (boxes:box.SubBox[]) => {
            for (let box of boxes) {
                box.destroy()
            }
        }
        public constructor() {
            this.boxes = []
        }

        public registerBox(box:box.SubBox) {
            if (this.boxes.indexOf(box) == -1) {
                this.boxes.push(box)
            }
        }

        public loadLevel() {
            this.levelLoader(this)
        }

        public cleanupLevel() {
            if (this.levelCleaner) {
                this.levelCleaner(this.boxes)
            } else {
                Level.DEFAULT_LEVEL_CLEANER(this.boxes)
                return;
            }
        }

        public isFinished() {
            for (let box of this.boxes) {
                if(!box.isFinished()) {
                    return false;
                }
            }
            return true
        }

        addLevelLoader(cb :(level:Level)=>void) :Level{
            this.levelLoader = cb
            return this;
        }

        addLevelCleaner (cb:()=>void) : Level {
            this.levelCleaner = cb
            return this
        }
    }


    function simpleTilemapLevel (tilemap : tiles.TileMapData) {
        let level = new Level()
        level.addLevelLoader((level:Level) =>{
            let mainlevelBox = new box.SubBox(null, 0, 0, tilemap)
            level.registerBox(mainlevelBox)
            mainlevelBox.init()
        })
        return level
    }

    function prepareLevel7() {
        let level = new Level()
        level.addLevelLoader((level: Level)=>{
            let mainlevelBox = new box.SubBox(null, 4, 5, assets.tilemap`level7`)
            let subLevelBox = new box.SubBox(mainlevelBox, 6, 4, assets.tilemap`SubBoxInLevel7`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox)

            subLevelBox.init()
            mainlevelBox.addBox(subLevelBox)
            subLevelBox.addBox(mainlevelBox)
            mainlevelBox.place(mainlevelBox.column(), mainlevelBox.row())
            subLevelBox.place(subLevelBox.column(), subLevelBox.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })  
        return level
    }
    function prepareLevel4() {
        let level = new Level()
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 0, 0, assets.tilemap`level10`)
            let subLevelBox = new box.SubBox(mainlevelBox, 4, 3, assets.tilemap`subBoxLevel10`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox)
            subLevelBox.init()
            mainlevelBox.addBox(subLevelBox)
            subLevelBox.place(subLevelBox.column(), subLevelBox.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })
        return level
    }
    function prepareLevel5() {
        let level = new Level()
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 0, 0, assets.tilemap`level4`)
            let subLevelBox = new box.SubBox(mainlevelBox, 4, 4, assets.tilemap`SubBoxInLevel4`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox)
            subLevelBox.init()
            mainlevelBox.addBox(subLevelBox)
            subLevelBox.place(subLevelBox.column(), subLevelBox.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })
        return level
    }


}