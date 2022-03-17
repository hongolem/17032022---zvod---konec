radio.set_group(250)
RunComp.set_light_level()

beginning = 0
result = 0
reset = 0
start = 1
stop = 2

def on_light_drop():
    global result
    finish = control.millis()
    result = start - finish
    music.play_tone(Note.C, music.beat(100))
    print(result)
RunComp.on_light_drop(on_light_drop)

def on_received_number1(start):
    global start
    start = control.millis()
radio.on_received_number(on_received_number1)

def on_received_number2(reset):
    control.reset()
    start = control.millis()
radio.on_received_number(on_received_number2)