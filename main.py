radio.set_group(250)
RunComp.set_light_level()

start = 0
result = 0
key0 = 0
key1 = 1
key2 = 2

def on_light_drop():
    global result
    radio.send_number(key2)
    finish = control.millis()
    result = start - finish
    music.play_tone(Note.C, music.beat(100))
    print(result)
RunComp.on_light_drop(on_light_drop)

def on_button_pressed_a():
    radio.send_number(key0)
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_number1(key1):
    global start
    start = control.millis()
radio.on_received_number(on_received_number1)

def on_received_number2(key0):
    control.reset()
    start = control.millis()
radio.on_received_number(on_received_number2)