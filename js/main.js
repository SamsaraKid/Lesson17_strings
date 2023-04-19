// let str = 'Hello World'
// console.log(str.length)
// console.log(str[4])
//
// console.log(str.substring(1,7))
// console.log(str.substr(1,7))

//ввод в инпуты текста и количество символов для вырезания и вывод результата
$('#but0').click(f1)

function f1(){
    let text = $('#text').val()
    let num = $('#number').val()
    let result = text.substr(0,num)
    $('#out0').text(result)
}

//поиск по строке. Ищем и выводим названия фирм
//фирма ООО "Три богатыря" ищет коня, фирма ООО "Кентавр" ищет друзей ООО "Кеша"
$('#but1').click(f2)

function f2(){
    let a = 0
    let b = 0
    let text = $('#in1').val()
    while (a>=0) {
        a = text.indexOf('ООО',b)
        if (a==-1) {break}
        b = text.indexOf('"', a + 5)
        let result = text.substring(a, b + 1)
        $('#out1').append(result)
        if (text.indexOf('ООО',b)>=0) {
            $('#out1').append(', ')
        }
    }
}

//замена строк
let str0 = 'hello world hello world'
console.log(str0)
let str1 = str0.replaceAll('world','university')
console.log(str1)

$('#but2').click(f3)

function f3(){
    let str = $('#in2').val()
    let str1 = str.replaceAll('Кошки','Мышки').replaceAll('кошки','мышки')
    $('#out2').text(str1)
}

let arr = 'hello world'
let q = arr.split('')
console.log(q)

//поле чудес
const words = ['кошка','мышка','собачка']
const question = ['Кто мяукает?','Кто пищит?','Кто гавкает?']
let word = []
let secret = []


$(document).ready(start)

function start() {
    let x = Math.floor(Math.random()*words.length)
    word = words[x].split('')
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        secret.push('*')
    }
    $('#question').text(question[x])
    $('#word').text(secret.join(' '))
}

$('#but3').click(guess)

function guess() {
    let letter = $('#letter').val()
    for (w in word) {
        if (letter == word[w]){
            secret[w] = letter
        }
    }
    $('#word').text(secret.join(' '))
    check()
}

function check() {
    if (secret.indexOf('*') == -1) {
        console.log('Win')
    }
}