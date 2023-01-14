
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


let currentLevelNo = 0 
let currentLevel:level.Level = null

function reloadCurrentLevel() {
    currentLevel.cleanupLevel()
    currentLevel.loadLevel()
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, reloadCurrentLevel)

game.onUpdateInterval(10, () => {
    
    if (currentLevel == null) {
        currentLevel = level.LEVELS[currentLevelNo]
        currentLevel.loadLevel()
    }else if(currentLevel.isFinished()) {
        if (currentLevelNo == level.LEVELS.length - 1) {
            control.runInParallel(()=>{
                pause(1000)
                game.over(true)
            })
        } else {
            currentLevelNo++
            currentLevel.cleanupLevel()
            currentLevel = level.LEVELS[currentLevelNo]
            currentLevel.loadLevel()
        }
        
    }
})