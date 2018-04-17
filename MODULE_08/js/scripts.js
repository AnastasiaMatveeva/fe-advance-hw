/*
 Напишите скрипт который реализует следующее поведение:

 - При нажатии на клавишу (не виртуальной клавиатуры) должно
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)

 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).

 - Звук нажатия на клавишу должен соответсвовать ноте, описанной
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.

 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши.
*/

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const checkBox = document.querySelector("#slideThree");
const keyboard = document.querySelector(".keyboard");

const activeBtn = {
  node: null
};

const keyDown = (event) => {
  let pressedKey = event.key;

  if (keys.includes(pressedKey)) {

    if (activeBtn.node !== null) {
      activeBtn.node.classList.remove('keyboard__btn--active');
      activeBtn.node = null;
    }
    let index = keys.indexOf(pressedKey);
    activeBtn.node = buttons[index];
  }

  if (checkBox.checked) {
    playSound(activeBtn.node.dataset.note);
  }
  activeBtn.node.classList.add('keyboard__btn--active');
}

window.addEventListener("keydown", keyDown);
