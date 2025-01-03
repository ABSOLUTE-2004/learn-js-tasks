"use strict";
// Задача 1: Привет, object

// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Задача 2: Проверка на пустоту

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Задача 3: Сумма свойств объекта

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
function sumSalaries() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  let sum = 0;
  for (key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
alert(sumSalaries());

// Задача 4: Умножаем все числовые свойства на 2

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// Задача на взаимодействие:
//Вытащить значение свойства city из объекта user, назвать переменную как usercity
// и дополнительно задать ей значение по умолчанию
const user = {
  city: "Москва",
};

const { city: userCity = "не указано" } = user;
console.log(userCity);
