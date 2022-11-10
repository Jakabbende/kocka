let szam = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.pause(400)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    basic.pause(1000)
    szam = randint(1, 6)
    basic.pause(2000)
    szam = 0
    basic.clearScreen()
})
basic.forever(function () {
    if (szam == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (szam == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    }
    if (szam == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    }
    if (szam == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (szam == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (szam == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
