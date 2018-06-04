/*
  Используя Object.assign написать код,
  который позволяет пользователю
  установить цвет фона страницы по своему вкусу
  выбрав цвет с помощью input и подтвердив выбор
  кнопкой 'ok'
*/

const button = document.querySelector('button');
const input = document.querySelector('input[type="color"]');
const body = document.querySelector('body');

button.addEventListener('click', bgColor);
const defaultSettings = {
  body: {
    color: '#fff',
    bg: '#000'
  }
};
const userSettings = {
  body: {
    bg: ''
  }
};
function bgColor  () {
  Object.assign(userSettings, defaultSettings);
  userSettings.body.bg = input.value;
  document.body.style.background = userSettings.body.bg;
  console.log(userSettings);
}
