
let UP = [0, -1]
let RIGHT = [1, 0]
let DOWN = [0, 1]
let LEFT = [-1, 0]
let DIRECTION_VECTORS = [
UP,
RIGHT,
DOWN,
LEFT
]
info.setScore(0)

let LEVELS:tiles.TileMapData[] = []

LEVELS.push(assets.tilemap`level0`)
LEVELS.push(assets.tilemap`level1`)
LEVELS.push(assets.tilemap`level2`)
LEVELS.push(assets.tilemap`level3`)

let currentLevel = 0 
let levelBox = new box.SubBox(null, 0,0, assets.tilemap`level0`) 
levelBox.load();

function _getCurrentBox():box.SubBox {
    return levelBox;
}

game.onUpdateInterval(10, () => {
    if (_getCurrentBox().isFinished()) {
        if (currentLevel == LEVELS.length - 1) {
            control.runInParallel(() => {
                pause(500)
                game.over(true)
            })
        } else {
            _getCurrentBox().destroy()
            currentLevel++
            levelBox = new box.SubBox(null, 0, 0, LEVELS[currentLevel])
            levelBox.load()
        }
        
    }
})