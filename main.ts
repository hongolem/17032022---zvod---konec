radio.setGroup(250)
RunComp.SetLightLevel()
let start = 0
let result = 0
let key0 = 0
let key1 = 1
let key2 = 2
RunComp.OnLightDrop(function on_light_drop() {
    
    radio.sendNumber(key2)
    let finish = control.millis()
    result = start - finish
    music.playTone(Note.C, music.beat(100))
    console.log(result)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(key0)
    control.reset()
})
radio.onReceivedNumber(function on_received_number1(key1: number) {
    
    start = control.millis()
})
radio.onReceivedNumber(function on_received_number2(key0: number) {
    control.reset()
    let start = control.millis()
})
