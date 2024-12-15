"use strict";
// Задача 1: Очистите элемент

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>
// <script>
//   function clear(elem) { /* ваш код */ }
//   clear(elem); // очищает список
// </script>
function clear(elem) {
  elem.innerHTML("");
}
clear(elem); // очищает список

// Задача 2: Создайте список

// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
let ul = document.createElement("ul");
document.body.append(ul);
while (true) {
  let info = prompt("Введите содержимое пункта", "");
  if (!info) {
    break;
  }
  let li = document.createElement("li");
  li.textContent = info;
  ul.append(li);
}

// Задача 3: Создайте дерево из объекта

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:
// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:
// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
// Выберите один из двух способов решения этой задачи:
// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.
let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
let container = document.getElementById("container");
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}
function createTreeText(obj) {
  // отдельная рекурсивная функция
  let li = "";
  let ul;
  for (let key in obj) {
    li += "<li>" + key + createTreeText(obj[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}
createTree(container, data); // создаёт дерево в контейнере
