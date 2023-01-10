function onDirectionButtonDown (direction: number) {

	
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    onDirectionButtonDown(0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    onDirectionButtonDown(2)
})
tiles.onMapLoaded(function (tilemap2) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    onDirectionButtonDown(1)
})
function startLevel (levelNo: number) {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    onDirectionButtonDown(3)
})
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
let playerSprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)


let level1Box = new box.SubBox(null, 0,0,assets.tilemap`level0`) 
level1Box.load();
let currentBox = level1Box;


function _getCurrentBox():box.Box {
    return currentBox;
}