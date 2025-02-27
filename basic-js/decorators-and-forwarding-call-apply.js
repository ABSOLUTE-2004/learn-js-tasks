// Задача 1: Декоратор-шпион

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
// Например:
// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }
// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.
function work(a, b) {
  alert(a + b); // произвольная функция или метод
}
function spy(func) {
  wrapper.calls = [];
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  return wrapper;
}
work = spy(work);

// Задача 2: Задерживающий декоратор

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
// function f(x) {
//   alert(x);
// }
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, args), ms);
  };
}

// Декоратор debounce

// Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f,
// пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»),
// а затем вызывает f один раз с последними аргументами.
// Другими словами, debounce – это так называемый секретарь, который принимает «телефонные звонки»,
// и ждёт, пока не пройдет ms миллисекунд тишины. И только после этого передает «начальнику» информацию
// о последнем звонке (вызывает непосредственно f).
// Например, у нас была функция f и мы заменили её на f = debounce(f, 1000).
// Затем, если обёрнутая функция вызывается в 0, 200 и 500 мс, а потом вызовов нет,
// то фактическая f будет вызвана только один раз, в 1500 мс. То есть: по истечению 1000 мс от последнего вызова.
// …И она получит аргументы самого последнего вызова, остальные вызовы игнорируются.
function debounce(f, ms) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => f.apply(this, args), ms);
  };
}

// Задача 3: Тормозящий (throttling) декоратор

// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
// При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.
// По сравнению с декоратором debounce поведение совершенно другое:
// debounce запускает функцию один раз после периода «бездействия». Подходит для обработки конечного результата.
// throttle запускает функцию не чаще, чем указанное время ms.
// Подходит для регулярных обновлений, которые не должны быть слишком частыми.
// Другими словами, throttle похож на секретаря, который принимает телефонные звонки,
// но при этом беспокоит начальника (вызывает непосредственно f) не чаще, чем один раз в ms миллисекунд.
// Пример кода:
// function f(a) {
//   console.log(a)
// }
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
function throttle(f, ms) {
  let timer;
  let isTrottled = false;
  let savedArgs, savedThis;
  function wrapper() {
    if (isTrottled) {
      savedArgs = arg;
      savedThis = this;
      return;
    }
    f.apply(this, arg);
    isTrottled = true;
    setTimeout(function () {
      isTrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, ms);
  }
  return wrapper;
}
