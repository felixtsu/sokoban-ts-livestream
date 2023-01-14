// 在此处添加您的代码
namespace level{

    export let LEVELS = [
        simpleTilemapLevel(assets.tilemap`level0`),
        simpleTilemapLevel(assets.tilemap`level1`),
        simpleTilemapLevel(assets.tilemap`level8`),
        simpleTilemapLevel(assets.tilemap`level3`),
        prepareLevel4(),
        prepareLevel5(),
        prepareLevel6(),
        prepareLevel7()
    ]

    export class Level {
        private boxes:box.SubBox[];

        private levelLoader: (level: Level) =>void
        private levelCleaner: (boxes: box.SubBox[]) => void

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
                for (let box of this.boxes) {
                    box.destroy()
                }
                this.boxes = []
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

    function prepareLevel6() {
        let level = new Level()
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 0, 0, assets.tilemap`level12`)
            let subLevelBox_1 = new box.SubBox(mainlevelBox, 6, 4, assets.tilemap`subBoxLevel12_1`)
            let subLevelBox_2 = new box.SubBox(mainlevelBox, 5, 4, assets.tilemap`subBoxLevel12_2`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox_1)
            level.registerBox(subLevelBox_2)
            mainlevelBox.addBox(subLevelBox_1)
            mainlevelBox.addBox(subLevelBox_2)
            subLevelBox_1.init()
            subLevelBox_2.init()
            subLevelBox_1.place(subLevelBox_1.column(), subLevelBox_1.row())
            subLevelBox_2.place(subLevelBox_2.column(), subLevelBox_2.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })
        return level
    }

}