"use strict";
// Задача 1: Поиск элементов

// Вот документ с таблицей и формой.
// Как найти?…
// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
let ageTable = document.getElementById("age-table");
let labels = ageTable.getElementsByClassName("label");
let firstTd = ageTable.querySelector("td");
let formName = document.getElementsByName("search")[0];
let firstInput = form.getElementsByClassName("input")[0];

let inputs = form.querySelectorAll("input");
let lastInput = inputs[inputs.length - 1];
