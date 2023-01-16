namespace level{

    export let LEVELS = [
        simpleTilemapLevel(assets.tilemap`level0`, "Just push..."),
        simpleTilemapLevel(assets.tilemap`level1`, "to cover all the dots..."),
        simpleTilemapLevel(assets.tilemap`level8`, "Believe that you have the strength..."),
        simpleTilemapLevel(assets.tilemap`level3`, "and the wisdom..."),
        prepareLevel4(),
        prepareLevel5(),
        prepareLevel6(),
        prepareLevel7(),
        prepareLevel8(),
        prepareLevel9()
    ]

    export class Level {
        private boxes:box.SubBox[];

        private levelLoader: (level: Level) =>void
        private levelCleaner: (boxes: box.SubBox[]) => void

        private scoreBeforeGameStart : number
        private firstLoad = true

        private levelTitle:string

        public constructor(levelTitle?:string) {
            this.levelTitle = levelTitle
            this.boxes = []
        }

        public registerBox(box:box.SubBox) {
            if (this.boxes.indexOf(box) == -1) {
                this.boxes.push(box)
            }
        }

        public loadLevel() {
            this.levelLoader(this)

            if (this.firstLoad && this.levelTitle) {
                this.scoreBeforeGameStart = info.score()
                game.showLongText(this.levelTitle, DialogLayout.Bottom)
                this.firstLoad = false
            } else {
                info.setScore(this.scoreBeforeGameStart)
            }
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


    function simpleTilemapLevel (tilemap : tiles.TileMapData, levelTitle? :string) {
        
        let level = new Level(levelTitle)
        level.addLevelLoader((level:Level) =>{
            let mainlevelBox = new box.SubBox(null, 0, 0, utils.duplicate(tilemap))
            level.registerBox(mainlevelBox)
            mainlevelBox.init()
        })
        return level
    }

    
    function prepareLevel4() {
        let level = new Level("Ah, there's something new...")
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
        let level = new Level("nothing new...")
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
        let level = new Level("menu resets boxes...")
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

    function prepareLevel7() {
        let level = new Level("now you've got the basics...")
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 6, 5, assets.tilemap`level7`)
            let subLevelBox = new box.SubBox(mainlevelBox, 6, 4, assets.tilemap`SubBoxInLevel7`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox)

            subLevelBox.init()
            mainlevelBox.addBox(subLevelBox)
            mainlevelBox.addBox(mainlevelBox)
            mainlevelBox.place(mainlevelBox.column(), mainlevelBox.row())
            subLevelBox.place(subLevelBox.column(), subLevelBox.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })
        return level
    }

    function prepareLevel8() {
        let level = new Level("this is hard, but nothing new...")
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 3, 3, assets.tilemap`level14`)
            let subLevelBox_1 = new box.SubBox(mainlevelBox, 3, 2, assets.tilemap`subBoxLevel12_1`)
            let subLevelBox_2 = new box.SubBox(mainlevelBox, 3, 4, assets.tilemap`subBoxLevel12_2`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox_1)
            level.registerBox(subLevelBox_2)
            mainlevelBox.addBox(subLevelBox_1)
            mainlevelBox.addBox(subLevelBox_2)
            subLevelBox_1.addBox(mainlevelBox)
            subLevelBox_1.init()
            subLevelBox_2.init()
            subLevelBox_1.place(subLevelBox_1.column(), subLevelBox_1.row())
            subLevelBox_2.place(subLevelBox_2.column(), subLevelBox_2.row())
            mainlevelBox.init()
            mainlevelBox.showAll()
        })
        return level
    }

    function prepareLevel9() {
        let level = new Level("same (hard) as the last one...")
        level.addLevelLoader((level: Level) => {
            let mainlevelBox = new box.SubBox(null, 5, 4, assets.tilemap`level16`)
            let subLevelBox_1 = new box.SubBox(mainlevelBox, 4, 4, assets.tilemap`SubBoxLShape`)
            let subLevelBox_2 = new box.SubBox(mainlevelBox, 3, 4, assets.tilemap`SubBoxLShapeLD`)
            let subLevelBox_3 = new box.SubBox(mainlevelBox, 2, 2, assets.tilemap`level14`)
            level.registerBox(mainlevelBox)
            level.registerBox(subLevelBox_1)
            level.registerBox(subLevelBox_2)
            level.registerBox(subLevelBox_3)

            mainlevelBox.addBox(subLevelBox_1)
            mainlevelBox.addBox(subLevelBox_2)
            mainlevelBox.addBox(subLevelBox_3)
            mainlevelBox.addBox(mainlevelBox)

            mainlevelBox.init()
            mainlevelBox.hideAllNonePlayerBoxes()
            subLevelBox_1.init()
            subLevelBox_1.hideAllNonePlayerBoxes()
            subLevelBox_2.init()
            subLevelBox_2.hideAllNonePlayerBoxes()
            
            subLevelBox_1.place(subLevelBox_1.column(), subLevelBox_1.row())
            subLevelBox_2.place(subLevelBox_2.column(), subLevelBox_2.row())
            subLevelBox_3.place(subLevelBox_3.column(), subLevelBox_3.row())

            subLevelBox_3.init()
            subLevelBox_3.showAll()
        })
        return level
    }

}