"use strict";
// Задача 1: Найдите координаты точек относительно окна браузера

// В ифрейме ниже располагается документ с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// Ваш код должен при помощи DOM получить четыре пары координат:
// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.
let coords = field.getBoundingClientRect();
let firstX = coords.x;
let firstY = coords.y;
let secondX = coords.right;
let secondY = coords.bottom;
let threeX = coords.x + field.clientLeft;
let threeY = coords.y + field.clientTop;
let fourX = coords.x + field.clientLeft + field.clientWidth;
let fourY = coords.y + field.clientTop + field.clientHeight;

// Задача 2: Покажите заметку рядом с элементом

// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения
// свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном
// коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.
let elem = document.getElementById("coords-show-elem");
let anchor = document.getElementById("coords-show-anchor");
function positionAt(anchor, position, elem) {
  let coords = anchor.getBoundingClientRect();
  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.offsetHeight + "px";
      break;
    case "right":
      elem.style.left = coords.right + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.bottom + "px";
      break;
  }
}

// Задача 2: Покажите заметку около элемента (абсолютное позиционирование)

// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
// Это предотвратит расхождение элементов при прокрутке страницы.
// Используйте решение предыдущего задания для начала.
// Чтобы проверить решение в условиях с прокруткой,добавьте стиль элементу <body style="height: 2000px">.
// получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    right: box.right + window.scrollX,
    bottom: box.bottom + window.scrollY,
    left: box.left + window.scrollX,
  };
}
function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);
  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.offsetHeight + "px";
      break;
    case "right":
      elem.style.left = coords.right + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.bottom + "px";
      break;
  }
}

// Задача 3: Расположите заметку внутри элемента (абсолютное позиционирование)

// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование):
// научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.
// Новые значения для аргумента position:
// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
// Например:
// // показывает заметку поверх цитаты
// positionAt(blockquote, "top-out", note);
// // показывает заметку внутри цитаты вблизи верхнего края элемента
// positionAt(blockquote, "top-in", note);
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    right: box.right + window.scrollX,
    bottom: box.bottom + window.scrollY,
    left: box.left + window.scrollX,
  };
}
function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);
  switch (position) {
    case "top-out":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.offsetHeight + "px";
      break;
    case "right-out":
      elem.style.left = coords.right + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom-out":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.bottom + "px";
      break;
    case "top-in":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + "px";
      break;
    case "right-in":
      elem.style.left = coords.right - elem.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom-in":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.bottom - elem.offsetHeight + "px";
      break;
  }
}
