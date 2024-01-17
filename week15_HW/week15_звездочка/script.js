//Создайте пустой массив с именем numbers
const numbers = [];

//Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);

//Используя циклы, выполните следующие операции над массивом numbers:

//Удалите все отрицательные числа из массива

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;  // Уменьшаем счетчик, чтобы не пропустить следующий элемент после удаления
    }
}
//другой вариант
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] < 0) {
//         numbers.splice(i, 1);
//     } else {
//         i++;
//     }
// }

console.log(numbers);

//Возведите каждое число в квадрат
let i = 0;
while (i < numbers.length) {
    numbers[i] = numbers[i] ** 2;
    i++;
}

console.log(numbers)

//Отсортируйте числа в порядке убывания

//Сортировка вставками (Insertion Sort)
for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] < current) {
        numbers[j + 1] = numbers[j];
        j--;
    }

    numbers[j + 1] = current;
}

//Выведите полученный массив numbers в консоль

console.log(numbers)

// Сортировка пузырьком (Bubble Sort):
// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - i - 1; j++) {
//         if (numbers[j] < numbers[j + 1]) {
//             // Обмен значениями
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//         }
//     }
// }
// console.log(numbers)

//Сортировка выбором (Selection Sort):

// for (let i = 0; i < numbers.length - 1; i++) {
//     let maxIndex = i;

//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[j] > numbers[maxIndex]) {
//             maxIndex = j;
//         }
//     }

//     // Обмен значениями
//     let temp = numbers[i];
//     numbers[i] = numbers[maxIndex];
//     numbers[maxIndex] = temp;
// }
// console.log(numbers)



// Без циклов
// // Удаляем все отрицательные числа из массива
// numbers = numbers.filter(number => number >= 0);

// // Возводим каждое число в квадрат
// numbers = numbers.map(number => number ** 2);

// // Сортируем числа в порядке убывания
// numbers.sort((a, b) => b - a);
