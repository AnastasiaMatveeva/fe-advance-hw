/*
  Создать компонент счетчика времени.

  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.

  На входе есть строка символов для упражнения.

  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.

  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.

  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const rightInput = Array.from(string);
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const keyboardOutput = document.querySelector(".keyboard");
const exerciseOutput = document.querySelector(".exercise");
let exerciseInput = [];
let bestResult = localStorage.getItem("best result:");
exerciseOutput.textContent = string;
keyboardOutput.textContent = `Your best result is ${bestResult} seconds`;

let counter = 0;
let time = setInterval(() => {
    counter++;
    timerOutput.innerHTML = counter;
}, 1000);


const countKPS = () => {
let pressedKeys = event.key;
console.log(pressedKeys);
if (pressedKeys === rightInput[0] && exerciseInput.length === 0){
  exerciseInput.push(pressedKeys);
}
if (pressedKeys === rightInput[1] && exerciseInput.length === 1) {
  exerciseInput.push(pressedKeys);
}
if (pressedKeys === rightInput[2] && exerciseInput.length === 2) {
  exerciseInput.push(pressedKeys);
}
if (pressedKeys === rightInput[3] && exerciseInput.length === 3) {
  exerciseInput.push(pressedKeys);
}
if (pressedKeys === rightInput[4] && exerciseInput.length === 4) {
  exerciseInput.push(pressedKeys);
}
if (exerciseInput.length === 5) {
  clearInterval(time);
  if(parseInt(bestResult) > timerOutput.innerHTML) {
  localStorage.setItem('best result:', timerOutput.innerHTML);
}
alert (`Your time is ${timerOutput.innerHTML} seconds`)
}
};

window.addEventListener('keydown', countKPS);
