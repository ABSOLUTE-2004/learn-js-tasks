// Задача 1:Алгоритм поиска

// Задача состоит из двух частей.
// У нас есть объекты:
// let head = {
//   glasses: 1
// };
// let table = {
//   pen: 3
// };
// let bed = {
//   sheet: 1,
//   pillow: 2
// };
// let pockets = {
//   money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему
// пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table),
// а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// При необходимости составьте цепочки поиска и сравните их.
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
// быстрее получить значение glasses через head.glasses при первом выызове, далее для современных движков неважно,
// откуда берётся свойство – из объекта или из прототипа. Они запоминают, где было найдено свойство, и повторно используют
// его в следующем запросе. Например, при обращении к pockets.glasses они запомнят, что нашли glasses в head, и в следующий раз
// будут искать там же. Они достаточно умны, чтобы при изменениях обновлять внутренний кеш, поэтому такая оптимизация безопасна.

// Задача 2: Почему наедаются оба хомяка?

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
// let hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach.push(food);
//   }
// };
// let speedy = {
//   __proto__: hamster
// };
// let lazy = {
//   __proto__: hamster
// };
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple
// Причина в том что свойство stomach находится в прототипе hamster, а не в speedy и lazy.
let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};
let speedy = {
  stomach: [],
  __proto__: hamster,
};
let lazy = {
  stomach: [],
  __proto__: hamster,
};
// теперь this сработает как нужно
