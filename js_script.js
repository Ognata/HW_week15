// Напишите цикл for, который будет обходить массив userNames и для каждого имени преобразовывать его к нижнему регистру с помощью метода toLowerCase(). Затем замените значение элемента в массиве на изменённую версию имени.

const userNames = ['John', 'Jane', 'Alex', 'Mike'];

for (let i = 0; i < userNames.lenght; i ++) {
  //Преобразуйте имена к нижнему регистру
//   const userName = userNames[i]
//   const normalizedUserName = userName.toLowerCase();
  
//   //Замените значения элемента в массиве
//   userNames[i] = normalizedUserName;
  
  userNames[i] = userNames[i].toLowerCase();
}

console.log(userNames);
