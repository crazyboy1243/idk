scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f 3 . . . . . . 
        . . . f 2 f e 3 3 f 3 f . . . . 
        . . f 2 2 2 f f 3 3 3 3 3 . . . 
        . . f e e e e 3 3 3 3 f 3 . . . 
        . f e 2 2 2 2 3 f f 3 3 3 . . . 
        . f 2 e f f f f 2 2 3 f f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 7 7 f b 7 7 7 e f f . . 
        . . f e 7 7 f 7 7 7 7 e e f . . 
        . . . f 7 7 7 e e e e e f . . . 
        . . . f e 4 e 7 7 4 f . . . . . 
        . . . f 2 2 e 7 7 e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(fort, 9)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(6, 2, 4)
    statusbar.max = 100
    statusbar.attachToSprite(myEnemy)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fort, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass2)
    speed_and_strong = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f 3 . . . . . . 
        . . . f 2 f e 3 3 f 3 f . . . . 
        . . f 2 2 2 f f 3 3 3 3 3 . . . 
        . . f e e e e 3 3 3 3 f 3 . . . 
        . f e 2 2 2 2 3 f f 3 3 3 . . . 
        . f 2 e f f f f 2 2 3 f f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 7 7 f b 7 7 7 e f f . . 
        . . f e 7 7 f 7 7 7 7 e e f . . 
        . . . f 7 7 7 e e e e e f . . . 
        . . . f e 4 e 7 7 4 f . . . . . 
        . . . f 2 2 e 7 7 e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `, SpriteKind.Enemy)
    speed_and_strong.follow(fort, 100)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(6, 2, 4)
    statusbar.max = 100
    statusbar.attachToSprite(speed_and_strong)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    fort.setImage(img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef.ccccc.....
        ..feee4dddee.cccccc.....
        ...f2222eedddcccccc.....
        ...f444e44dddcccdc......
        ...fffffeeee.cc.........
        ..ffffffff...cc.........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite, location) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f 3 . . . . . . 
        . . . f 2 f e 3 3 f 3 f . . . . 
        . . f 2 2 2 f f 3 3 3 3 3 . . . 
        . . f e e e e 3 3 3 3 f 3 . . . 
        . f e 2 2 2 2 3 f f 3 3 3 . . . 
        . f 2 e f f f f 2 2 3 f f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 7 7 f b 7 7 7 e f f . . 
        . . f e 7 7 f 7 7 7 7 e e f . . 
        . . . f 7 7 7 e e e e e f . . . 
        . . . f e 4 e 7 7 4 f . . . . . 
        . . . f 2 2 e 7 7 e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(fort, 9)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(6, 2, 4)
    statusbar.attachToSprite(myEnemy)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(fort, sprites.castle.tileGrass2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(2)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
})
let speed_and_strong: Sprite = null
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let myEnemy: Sprite = null
let fort: Sprite = null
fort = sprites.create(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef...........
    ..feee4dddee.ccccc......
    ...f2222eedddccccc......
    ...f444e44dddccc1.......
    ...fffffeeee.cc.........
    ..ffffffff...cc.........
    ..fff..ff...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnRandomTile(fort, assets.tile`myTile4`)
tiles.placeOnRandomTile(myEnemy, sprites.castle.tileGrass2)
controller.moveSprite(fort)
scene.cameraFollowSprite(fort)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
info.changeScoreBy(0)
info.setLife(3)
