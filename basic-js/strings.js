"use strict";
// Задача 1: Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str.at(0).toUpperCase() + str.slice(1);
}
ucFirst("вася");

// Задача 2: Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
function checkSpam(str) {
  const newStr = str.toLowerCase();
  return newStr.includes("viagra") || newStr.includes("xxx");
}
checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");

// Задача 3: Усечение строки

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"
function truncate(str, maxlength) {
  return str.length > maxlength ? `${str.slice(0, maxlength - 1)}…` : str;
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

// Задача 1: Выделить число

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
  return +str.slice(1);
}
extractCurrencyValue("$120");
