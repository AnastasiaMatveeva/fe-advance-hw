/*/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.

  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("")
};
const rowsLang = {
  rowTop: lang.en.slice(0, 12),
  rowMiddle: lang.en.slice(12, 23),
  rowBottom: lang.en.slice(23, lang.en.length-1)
}

console.log(rowsLang);
const html = document.querySelector("#keyboard-script").textContent.trim();
const parent = document.querySelector(".keyboard");

renderKeyboard(html, rowsLang, parent);

function renderKeyboard(html, rowsLang, parent) {
    const compiled = _.template(html);
    let htmlString = compiled({rowsLang});
    parent.innerHTML = htmlString;
}

const buttons = Array.from(document.querySelectorAll("button"));
const keyboard = document.querySelector(".keyboard");

const activeBtn = {
  node: null
};

const keyDown = (event) => {
  let pressedKey = event.key;
   console.log(pressedKey);
  if (activeBtn.node !== null) {
    activeBtn.node.classList.remove('keyboard__btn--active');
    activeBtn.node = null;
  }
  if (pressedKey === " ") {
    const space = document.querySelector(".keyboard__btn--space")
    activeBtn.node = space;
  }
  if (lang.en.includes(pressedKey)) {

    let index = lang.en.indexOf(pressedKey);
    console.log(index);
    activeBtn.node = buttons[index];
  }

activeBtn.node.classList.add('keyboard__btn--active');
}

window.addEventListener("keydown", keyDown);
