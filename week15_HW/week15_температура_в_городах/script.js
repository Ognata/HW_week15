// const cities = ['Москва', 'Санкт-Петербург', 'Хабаровск', 'Казань']
// const temp = newArray(4)

// Шаг 2: Создаем массив городов
const cities = ['Санкт-Петербург', 'Нью-Йорк', 'Пекин', 'Лондон'];

// Шаг 3: Создаем массив для температур
const temperatures = [];

// Шаг 4: Получаем температуру для каждого города от пользователя
for (let i = 0; i < cities.length; i++) {
    let temperatureInput = prompt(`Введите температуру в городе ${cities[i]}:`);
    
    // Шаг 5: Добавляем температуру в массив
    temperatures.push(Number(temperatureInput));
}

// Шаг 6: Находим максимальную и минимальную температуру
let maxTemperature = -Infinity;
let minTemperature = Infinity;

for (let i = 0; i < temperatures.length; i++) {
    // Обновляем максимальную и минимальную температуры
    maxTemperature = Math.max(maxTemperature, temperatures[i]);
    minTemperature = Math.min(minTemperature, temperatures[i]);
}

// Шаг 7: Выводим информацию на страницу
const divElem = document.querySelector('div')
const weatherList = document.createElement('ul');
divElem.appendChild(weatherList);

for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    weatherList.appendChild(listItem);
}

const maxMinInfo = document.createElement('p');
maxMinInfo.textContent = `Максимальная температура: ${maxTemperature}°C, Минимальная температура: ${minTemperature}°C`;
divElem.appendChild(maxMinInfo);

