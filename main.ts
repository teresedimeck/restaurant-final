enum ActionKind {
    Walking,
    Idle,
    Jumping,
    waiting
}
namespace SpriteKind {
    export const time = SpriteKind.create()
    export const sign = SpriteKind.create()
    export const signOut = SpriteKind.create()
}
function haveOrder () {
    monkey.say("Time to prep the pizza!", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, false)
    inSignDough.setFlag(SpriteFlag.Invisible, false)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isPizzaDone) {
        isPizzaDone = false
        isOrderTaken = true
        haveOrder()
    }
})
function clock (timeWaiting: number) {
    timer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.time)
    timer.setPosition(monkey.x + 10, monkey.y + -15)
    monkey.setVelocity(0, 0)
    anim = animation.createAnimation(ActionKind.waiting, 1000)
    animation.attachAnimation(timer, anim)
    animation.runImageAnimation(
    timer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 1 1 1 f f . . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 f 1 f . 
        . f 1 1 1 1 1 1 f 7 7 f 1 1 1 f 
        . f 1 1 1 1 1 1 f 7 f 1 1 1 1 f 
        . f 1 1 1 1 1 1 f f 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 e 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e f f f f f f f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 f 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 f 7 7 7 7 f 
        . f 1 1 1 1 1 1 1 1 1 f 7 7 7 f 
        . . f 1 1 1 1 1 1 1 1 1 f 7 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . . f f 1 1 1 1 1 1 1 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 e 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 f 7 7 7 7 7 7 7 f 
        . f 1 1 1 1 f 7 7 7 7 7 7 7 7 f 
        . f 1 1 1 f 7 7 7 7 7 7 7 7 7 f 
        . . f 1 f 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f 1 1 1 1 1 f 7 7 7 7 f f . 
        . . f 1 1 1 1 1 f 7 7 7 7 7 f . 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f 1 1 1 1 1 1 f 7 7 7 7 7 7 f 
        . f f f f f f f e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 1 1 1 f 7 7 7 f f . . 
        . . f f 1 1 1 1 f 7 7 7 7 f f . 
        . . f 7 f 1 1 1 f 7 7 7 7 7 f . 
        . f 7 7 7 f 1 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 f 1 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 f f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 7 7 7 f 7 7 7 f f . . 
        . . f f 7 7 7 7 f 7 7 7 7 f f . 
        . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 e 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 7 7 7 7 7 7 7 7 f f . 
        . . . f f 7 7 7 7 7 7 7 f f . . 
        . . . . . f f f f f f f . . . . 
        `],
    timeWaiting / 8,
    false
    )
    console.logValue("time waiting", timeWaiting)
    info.setScore(timeWaiting)
    for (let index = 0; index < timeWaiting / 100; index++) {
        pause(100)
        info.changeScoreBy(-100)
    }
    timer.destroy()
}
function placeOven (zone: number) {
    if (zone <= 4) {
        inSignOven = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f f f f f 2 2 2 f f f f f . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 1) {
        oven.zone1_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        oven.zone2_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        oven.zone3_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
        oven.zone4_oven()
        tiles.placeOnTile(inSignOven, tiles.getTileLocation(22, 2))
    }
    inSignOven.setFlag(SpriteFlag.Ghost, true)
    inSignOven.setFlag(SpriteFlag.Invisible, true)
}
function placeFridge (zone: number) {
    if (zone == 6) {
        inSignFridge = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 6) {
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(20, 7))
    } else if (true) {
        fridge.zone2_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        fridge.zone3_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
        fridge.zone4_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(18, 5))
    } else if (zone == 5) {
        fridge.zone5_fridge()
        tiles.placeOnTile(inSignFridge, tiles.getTileLocation(18, 8))
    }
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isOrderTaken = true
    haveOrder()
})
function ingredientsOut () {
    monkey.say("Need to refill the toppings...", 1000)
    inSignOven.setFlag(SpriteFlag.Ghost, true)
    inSignOven.setFlag(SpriteFlag.Invisible, true)
    inSignFridge.setFlag(SpriteFlag.Ghost, false)
    inSignFridge.setFlag(SpriteFlag.Invisible, false)
}
function readyForCustomer () {
    monkey.say("Alright, let's deliver this pizza!", 1000)
    inSignKitchen.setFlag(SpriteFlag.Ghost, true)
    inSignKitchen.setFlag(SpriteFlag.Invisible, true)
}
function background () {
    scene.setTile(4, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        1 d d d d d d d d d d d d d d b 
        b b b b b b b b b b b b b b b b 
        `, false)
    scene.setTile(2, img`
        . . c c c c c c c c c c c c c c 
        . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
        c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        `, true)
    scene.setTile(3, img`
        c c c c c c c c c c c c c c . . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 b . 
        1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        `, true)
    scene.setTile(5, img`
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        `, true)
    scene.setTile(9, img`
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 
        c 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 
        c b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b 3 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b b 3 3 3 3 3 3 3 3 3 3 3 3 
        c b b b b b b b b b b b b b b b 
        c 3 b b b b b b b b b b b b b b 
        c 3 b b 3 3 b b b b 3 3 b b b b 
        . c c b c c b 3 3 b c c b 3 3 3 
        . . c c c c c c c c c c c c c c 
        . . c b b b b b c . . . . . . . 
        . . c 3 3 3 3 3 c . . . . . . . 
        . . . c c c c c . . . . . . . . 
        `, true)
    scene.setTile(7, img`
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        `, true)
    scene.setTile(11, img`
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 c 
        3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 c 
        1 1 1 1 1 1 1 1 1 1 1 3 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 b c 
        3 3 3 3 3 3 3 3 3 3 3 3 3 b b c 
        b b b b b b b b b b b b b b b c 
        b b b b b b b b b b b b b b 3 c 
        b b b b 3 3 b b b b 3 3 b b 3 c 
        3 3 3 b c c b 3 3 b c c b c c . 
        c c c c c c c c c c c c c c . . 
        . . . . . . . . c b b b b c . . 
        . . . . . . . . c 3 3 3 3 c . . 
        . . . . . . . . . c c c c . . . 
        `, true)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(8, img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, false)
}
function placeDough (zone: number) {
    if (zone <= 3) {
        inSignDough = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f f f f f 2 2 2 f f f f f . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    } else {
        inSignDough = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 1) {
        dough.zone1_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        dough.zone2_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        dough.zone3_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
        dough.zone4_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(18, 5))
    } else if (zone == 5) {
        dough.zone5_dough()
        tiles.placeOnTile(inSignDough, tiles.getTileLocation(18, 8))
    }
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
}
function placeKitchen (zone: number) {
    if (zone <= 3) {
        inSignKitchen = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f f f f f 2 2 2 f f f f f . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    } else {
        inSignKitchen = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 1) {
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(13, 2))
    } else if (zone == 2) {
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(16, 2))
    } else if (zone == 3) {
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(19, 2))
    } else if (zone == 4) {
        kitchen.zone4_kitchen()
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(18, 5))
    } else if (zone == 5) {
        kitchen.zone5_kitchen()
        tiles.placeOnTile(inSignKitchen, tiles.getTileLocation(18, 8))
    }
    inSignKitchen.setFlag(SpriteFlag.Ghost, true)
    inSignKitchen.setFlag(SpriteFlag.Invisible, true)
}
function workAtStation (timeWorking: number) {
    getCoords()
    monkey.destroy()
    monkey = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............fffff...............
        ...........feeeeef..............
        ..........fddddeeef.............
        .........cdfddfdeeff............
        .........cdfddfdeeddf...........
        ........cdeeddddeebdc...........
        ........cddddcddeebdc...........
        ........cccccddeeefc............
        .........fddddeeeff.............
        ..........fffffeeeef............
        ............ffeeeeeef.ff........
        ...........feefeefeef.ef........
        ..........feefeefeeef.ef........
        .........fbdfdbfbbfeffef........
        .........fddfddfddbeffff........
        ..........fffffffffffff.........
        `, SpriteKind.Player)
    monkey.setVelocity(0, 0)
    monkey.setPosition(freezeX, freezeY)
    clock(timeWorking)
    controller.moveSprite(monkey, 100, 100)
    scene.cameraFollowSprite(monkey)
}
function doughDone () {
    monkey.say("Let's get this in the oven.", 1000)
    inSignDough.setFlag(SpriteFlag.Ghost, true)
    inSignDough.setFlag(SpriteFlag.Invisible, true)
    inSignOven.setFlag(SpriteFlag.Ghost, false)
    inSignOven.setFlag(SpriteFlag.Invisible, false)
}
function placeVeggies (zone: number) {
    if (zone == 5) {
        inSignVeggies = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 2 2 2 2 2 2 f . . . 
            . f f f f f f 2 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.sign)
    }
    if (zone == 5) {
        tiles.placeOnTile(inSignVeggies, tiles.getTileLocation(21, 4))
    }
    inSignVeggies.setFlag(SpriteFlag.Ghost, true)
    inSignVeggies.setFlag(SpriteFlag.Invisible, true)
}
function ZonesAndTimers () {
    Dough_Zone = 8
    Oven1_Zone = 1
    Oven2_Zone = 2
    Oven3_Zone = 3
    Oven4_Zone = 4
    Fridge_Zone = 6
    Veggies_Zone = 5
    Kitchen_Zone = 7
    Dough_Timer = 5000
    Oven1_Timer = 5000
    Oven2_Timer = 5000
    Oven3_Timer = 5000
    Oven4_Timer = 5000
    Fridge_Timer = 5000
    Veggie_Timer = 5000
    Kitchen_Timer = 5000
}
function veggiesReady () {
    monkey.say("Time for the finishing touches", 1000)
    inSignFridge.setFlag(SpriteFlag.Ghost, true)
    inSignFridge.setFlag(SpriteFlag.Invisible, true)
    inSignVeggies.setFlag(SpriteFlag.Ghost, false)
    inSignVeggies.setFlag(SpriteFlag.Invisible, false)
}
function getCoords () {
    freezeX = monkey.x
    freezeY = monkey.y
}
function kitchenReady () {
    inSignVeggies.setFlag(SpriteFlag.Ghost, true)
    inSignVeggies.setFlag(SpriteFlag.Invisible, true)
    inSignKitchen.setFlag(SpriteFlag.Ghost, false)
    inSignKitchen.setFlag(SpriteFlag.Invisible, false)
}
let isKitchenReady = false
let areVeggiesReady = false
let isIngredientOut = false
let isDoughDone = false
let Kitchen_Timer = 0
let Veggie_Timer = 0
let Fridge_Timer = 0
let Oven4_Timer = 0
let Oven3_Timer = 0
let Oven2_Timer = 0
let Oven1_Timer = 0
let Dough_Timer = 0
let inSignVeggies: Sprite = null
let freezeY = 0
let freezeX = 0
let inSignKitchen: Sprite = null
let inSignFridge: Sprite = null
let inSignOven: Sprite = null
let anim: animation.Animation = null
let timer: Sprite = null
let isPizzaDone = false
let inSignDough: Sprite = null
let Kitchen_Zone = 0
let Veggies_Zone = 0
let Fridge_Zone = 0
let Oven4_Zone = 0
let Oven3_Zone = 0
let Oven2_Zone = 0
let Oven1_Zone = 0
let Dough_Zone = 0
let isOrderTaken = false
let monkey: Sprite = null
ZonesAndTimers()
monkey = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffff...............
    ...........feeeeef..............
    ..........fddddeeef.............
    .........cdfddfdeeff............
    .........cdfddfdeeddf...........
    ........cdeeddddeebdc...........
    ........cddddcddeebdc...........
    ........cccccddeeefc............
    .........fddddeeeff.............
    ..........fffffeeeef............
    ............ffeeeeeef.ff........
    ...........feefeefeef.ef........
    ..........feefeefeeef.ef........
    .........fbdfdbfbbfeffef........
    .........fddfddfddbeffff........
    ..........fffffffffffff.........
    `, SpriteKind.Player)
scene.cameraFollowSprite(monkey)
scene.setTileMap(img`
    4 4 4 4 4 4 4 4 4 4 2 3 e 1 1 e 1 1 e 1 1 
    4 4 4 4 4 4 4 4 4 4 5 7 e 1 1 e 1 1 e 1 1 
    4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e e e 
    4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 2 3 e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 5 7 e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 9 b e e e e e e e 1 1 
    4 4 4 4 4 4 4 4 4 4 f f e e e e e e e 1 1 
    `)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(12, 2))
isOrderTaken = true
background()
placeDough(Dough_Zone)
placeOven(Oven1_Zone)
placeOven(Oven2_Zone)
placeOven(Oven3_Zone)
placeOven(Oven4_Zone)
placeFridge(Fridge_Zone)
placeVeggies(Veggies_Zone)
placeKitchen(Kitchen_Zone)
haveOrder()
game.onUpdate(function () {
    monkey.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............fffff...............
        ...........feeeeef..............
        ..........fddddeeef.............
        .........cdfddfdeeff............
        .........cdfddfdeeddf...........
        ........cdeeddddeebdc...........
        ........cddddcddeebdc...........
        ........cccccddeeefc............
        .........fddddeeeff.............
        ..........fffffeeeef............
        ............ffeeeeeef.ff........
        ...........feefeefeef.ef........
        ..........feefeefeeef.ef........
        .........fbdfdbfbbfeffef........
        .........fddfddfddbeffff........
        ..........fffffffffffff.........
        `)
    if (monkey.vx < 0) {
        animation.runImageAnimation(
        monkey,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        1000,
        false
        )
    } else {
        monkey.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............fffff...............
            ...........feeeeef..............
            ..........fddddeeef.............
            .........cdfddfdeeff............
            .........cdfddfdeeddf...........
            ........cdeeddddeebdc...........
            ........cddddcddeebdc...........
            ........cccccddeeefc............
            .........fddddeeeff.............
            ..........fffffeeeef............
            ............ffeeeeeef.ff........
            ...........feefeefeef.ef........
            ..........feefeefeeef.ef........
            .........fbdfdbfbbfeffef........
            .........fddfddfddbeffff........
            ..........fffffffffffff.........
            `)
    }
})
forever(function () {
    if (monkey.overlapsWith(inSignDough) && isOrderTaken) {
        isOrderTaken = false
        isDoughDone = true
        workAtStation(Dough_Timer)
        doughDone()
    }
    if (monkey.overlapsWith(inSignOven) && isDoughDone) {
        isDoughDone = false
        isIngredientOut = true
        workAtStation(Oven1_Timer)
        ingredientsOut()
    }
    if (monkey.overlapsWith(inSignFridge) && isIngredientOut) {
        isIngredientOut = false
        areVeggiesReady = true
        workAtStation(Fridge_Timer)
        veggiesReady()
    }
    if (monkey.overlapsWith(inSignVeggies) && areVeggiesReady) {
        areVeggiesReady = false
        isKitchenReady = true
        workAtStation(Veggie_Timer)
        kitchenReady()
    }
    if (monkey.overlapsWith(inSignKitchen) && isKitchenReady) {
        isKitchenReady = false
        isPizzaDone = true
        workAtStation(Kitchen_Timer)
        readyForCustomer()
    }
})
