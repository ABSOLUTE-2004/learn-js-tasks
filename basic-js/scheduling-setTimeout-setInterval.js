"use strict";
// Задача 1: Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.
function printNumbers(from, to){
  let i = from;
  let timer= setInterval(()=>{
    console.log(i);
    if (i==to){
      clearInterval(timer);
    }
    i++
  },1000);
}
printNumbers(2,16)
function printNumbers(from, to){
  let i = from;
  setTimeout(write = ()=>{
    console.log(i);
    if (i<to){
      setTimeout(write,1000);
    }
    i++
  },1000);
}
printNumbers(2,16)