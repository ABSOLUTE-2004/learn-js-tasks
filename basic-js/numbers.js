"use strict";
// Задача 1: Сумма пользовательских чисел

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.
let a = +prompt("Введите первое число", 0);
let b = +prompt("Введите второе число", 0);
if (isFinite(a) && isFinite(b)) {
  alert(`cумма чисел:${a + b}`);
} else {
  alert("Вы ввели не числовое значение");
}

// Задача 2: Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Вы ввели число: ${readNumber()}`);

// Задача 2: Случайное целое число от min до max

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 3));
