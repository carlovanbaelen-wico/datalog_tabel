input.onButtonPressed(Button.A, function () {
    Index = 0
    led.plot(1, 2)
    basic.pause(500)
    for (let index = 0; index < 50; index++) {
        basic.pause(100)
        Xas.push(input.acceleration(Dimension.X))
        Yas.push(input.acceleration(Dimension.Y))
        Zas.push(input.acceleration(Dimension.Z))
        Index += 1
    }
    led.plot(2, 2)
})
input.onButtonPressed(Button.B, function () {
    led.plot(1, 0)
    Index = 0
    for (let index = 0; index < 50; index++) {
        serial.writeNumber(Xas[Index])
        serial.writeString(",")
        serial.writeNumber(Yas[Index])
        serial.writeString(",")
        serial.writeNumber(Zas[Index])
        serial.writeString(",")
        serial.writeLine("")
        Index += 1
    }
    led.plot(2, 0)
})
let Index = 0
let Zas: number[] = []
let Yas: number[] = []
let Xas: number[] = []
Xas = []
Yas = []
Zas = []
led.plot(0, 2)
