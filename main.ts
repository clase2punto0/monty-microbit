basic.forever(function () {
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showString("T. alta")
    }
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showString("T. baja")
        basic.showNumber(input.temperature())
    }
    basic.showString("T. normal")
})
