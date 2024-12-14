"use strict";
// Задача 1: Дочерние элементы в DOM

// Для страницы:
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?
const div = document.body.firstElementChild;
const ul = document.body.lastElementChild;
const secondLi = ul.lastElementChild;

// Задача 2: Выделите ячейки по диагонали

// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
let table = document.body.firstElementChild;
for (let i = 0; i < table.ariaRowSpan.length; i += 1) {
  let td = table.rows[i].cells[i];
  td.style.backgroundColor = "red";
}
