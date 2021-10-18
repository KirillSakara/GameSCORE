input.onButtonPressed(Button.A, function () {
    play = 0
})
input.onButtonPressed(Button.B, function () {
    for (let індекс = 0; індекс <= 4; індекс++) {
        basic.showNumber(array[індекс])
        play = 1
        timer = 0
        while (play == 1) {
            basic.pause(100)
            timer += 100
        }
        list.insertAt(індекс, timer)
    }
    basic.showString("" + (timer / 1000))
})
let timer = 0
let play = 0
let array: number[] = []
let list: number[] = []
let min = 3
let max = 8
list = []
array = []
for (let індекс = 0; індекс <= 4; індекс++) {
    let i = 0
    array[i] = randint(min, max)
}
