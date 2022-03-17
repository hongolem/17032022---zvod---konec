radio.setGroup(250)
RunComp.SetLightLevel()
let beginning = 0
let result = 0
let reset = 0
let start = 1
let stop = 2
RunComp.OnLightDrop(function on_light_drop() {
    
    let finish = control.millis()
    result = start - finish
    music.playTone(Note.C, music.beat(100))
    console.log(result)
})
radio.onReceivedNumber(function on_received_number1(start: number) {
    
    start = control.millis()
})
radio.onReceivedNumber(function on_received_number2(reset: number) {
    control.reset()
    let start = control.millis()
})
