//1.Переберите массив и запишите каждый элемент в консоль.

// метод forEach

// const array = [1, 2, 3, 4, 5];

// array.forEach((Element) => {
//  console.log(Element);
// });

//2.Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.

// метод map

// const array = [1, 2, 3, 4, 5];
// const multiplier = 2;

// const multipliedArray = array.map((Element) => Element * multiplier);

// console.log(multipliedArray);

//3.Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям.

// метод filter

// const array = [1, 2, 3, 4, 5];

// Фильтруем массив, оставляем только четные числа
// const filteredArray = array.filter((Element) => Element % 2 === 0);

// console.log(filteredArray);

//4. Перебрать массив и обновить каждый элемент до нового значения.

// метод map

// const array = [1, 2, 3, 4, 5];

// Обновляем каждый элемент, например, увеличиваем на 10
// const updatedArray = array.map((Element) => Element + 10);

// console.log(updatedArray);

//5. Найдите максимальное или минимальное значение в массиве с помощью функции обратного вызова.

// метод reduce

// const array = [10, 5, 8, 20, 3];

// Найти максимальное значение
// const max = array.reduce((currentMax, element) => {
//  return Math.max(currentMax, element);
// }, -Infinity);

// Найти минимальное значение
// const min = array.reduce((currentMin, element) => {
//  return Math.min(currentMin, element);
// }, -Infinity);

// console.log(`Максимальное значение: ${max}`);
// console.log(`Минимальное значение: ${min}`);

//6. Создайте новый массив, применив функцию к каждому элементу существующего массива.

// метод map

// const array = [1, 2, 3, 4, 5];

// Создаем новый массив, применяя функцию (например, возвести в квадрат) к каждому элементу

// const squaredArray = array.map((Element) => Element ** 2);

// console.log(squaredArray);

//7. Выполните итерацию по массиву и обновите промежуточную сумму его значений.

// метод reduce

// const array = [1, 2, 3, 4, 5];

// Выполнить итерацию по массиву и обновить промежуточную сумму его значений
// const sum = array.reduce((accumulator, currentValue) => {
//    return accumulator + currentValue;
// }, 0);

// console.log(`Сумма элементов: ${sum}`);

//8.Создайте новый массив, выбрав определенные свойства объектов в существующем массиве.

// метод map

var existingArray = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

var newArray = existingArray.map(function (obj) {
  return { name: obj.name, age: obj.age };
});

[
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
