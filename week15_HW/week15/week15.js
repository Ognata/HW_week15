//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

let number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

for (let i = 1; i <= 10; i++) {
    let result = 5 * i;
    console.log(`5 * ${i} = ${result}`);
}

//Другой вариант
let num = 1;
while (num <= 10) {
    let result = num * 5;
    console.log(`${num} * 5 = ${result}`);
    num ++;
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Сумма чисел от 1 до 100:", sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i <= array.length; i++) {
    console.log (array[i])
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];

let summ = 0;

for (let i = 0; i < numbers.length; i++) {
    summ += numbers[i];
}

console.log("Сумма элементов массива:", summ);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let item of str) {
    console.log(item)
}


//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

for (let number of array) {
    console.log (number)
}


//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
    // Разделяем предложение на слова с помощью метода split
    // const words = sentences[i].split(' ');

    // или без знаков препинания
    const words = sentences[i].split(/\W+/);

    // Выводим каждое слово в консоль
    for (let j = 0; j < words.length; j++) {
        console.log(words[j]);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// const numbers = [1, 2, 3, 4, 5];

let sum3 = 0;

for (const number of numbers) {
    sum3 += number;
}
console.log("Сумма элементов массива:", sum3);


//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

for (const word of list) {
    console.log(`Длина слова "${word}": ${word.length}`);
}


//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];

//1 вариант
const upperCaseWords = words.map(word => word.toUpperCase());

console.log(upperCaseWords);

// 2 вариант
const upperCaseWords2 = [];

for (let i = 0; i < words.length; i++) {
    upperCaseWords2.push(words[i].toUpperCase());
}

console.log(upperCaseWords2);


//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (const letter of greeting.toLowerCase()) {
    if (vowels.includes(letter)) {
        vowelCount++;
    }
}

console.log("Количество гласных букв:", vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];

const combinedString = words.join(' ');

console.log(combinedString);


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let numnum = 1;
while (numnum <= 10){
    console.log (numnum);
    numnum +=1
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

let numbernum = 10;

while (numbernum >= 1) {
    console.log(numbernum);
    numbernum--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let index = 0;

while (index < allNumbers.length) {
    if (allNumbers[index] <= 0) {
        allPositive = false;
        break;
    }
    index++;
}

console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

// let elem = 0
// while (random[elem] >= 0){
//     console.log(random[elem])
//     elem +=1
// }

let elem = 0
do {
    console.log(random[elem]);
     elem ++;
} while (random[elem] >= 0);


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let element = 1
do {
    if (element % 3 !== 0) {
    console.log(element);
    }
    element ++;
} while (element <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

// let sumNum = 0;

// while (sumNum <= 100) {
//     let userInput = prompt('Введите число:');
    
//     // Проверяем, ввел ли пользователь число
//     if (userInput === null || userInput === '') {
//         alert('Введите корректное число.');
//         continue;
//     }

//     let number = parseFloat(userInput);

//     // Проверяем, является ли введенное значение числом
//     if (isNaN(number)) {
//         alert('Введите корректное число.');
//         continue;
//     }

//     sumNum += number;
// }

console.log('Сумма введенных чисел превысила 100.');

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

function h4BackgroundColor() {
    // Находим все элементы h4 на странице
    const h4Elements = document.querySelectorAll('h4');

    // Изменяем фоновый цвет каждого элемента h4
    h4Elements.forEach(h4 => {
        h4.style.backgroundColor = 'blue';
    });
}
// Вызываем функцию для изменения фонового цвета всех элементов h4
h4BackgroundColor();
 
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

function generateRandomString(length) {
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randomIndex];
    }
    return randomString;
}

// Генерируем случайную строку длиной до 6 символов
let result = generateRandomString(6);

console.log(result); // Выводим результат в консоль