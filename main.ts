input.onButtonPressed(Button.A, function () {
    basic.pause(2000)
    hummingbird.setPositionServo(FourPort.One, 0)
})
input.onButtonPressed(Button.B, function () {
    hummingbird.setPositionServo(FourPort.One, 90)
})
hummingbird.startHummingbird()
basic.forever(function () {
	
})
