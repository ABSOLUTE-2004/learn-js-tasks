"use strict";
// Задача 1: Работа с переменными

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin;
let name = "Джон";
admin = name;
alert(admin);

// Задача 2: Придумайте правильные имена

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
let planetName;
let currentUserName;

// Задача 3: Какие буквы (заглавные или строчные) использовать для имён констант?
// Обычно мы используем буквы в верхнем регистре для констант, которые «жёстко закодированы».
// Или, другими словами, когда значение известно до выполнения скрипта и записывается непосредственно в код.
// В нашем примере, birthday именно такая переменная. Поэтому мы можем использовать заглавные буквы.
// В отличие от birthday, переменная age вычисляется во время выполнения скрипта.
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);

