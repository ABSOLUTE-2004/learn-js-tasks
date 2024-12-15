"use strict";
// Задача 1: Создать уведомление

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">
// с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
// Пример объекта options:
// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });
function showNotification(options) {
  let div = document.createElement("div");
  div.classList.add("notification");
  div.style.top = options.top + "px";
  div.style.right = options.right + "px";
  div.innerHTML = options.html;
  if (options.className) {
    div.classList.add(options.className);
  }

  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome", // дополнительный класс для div (необязательно)
});
