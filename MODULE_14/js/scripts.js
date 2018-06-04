// Создать две кнопки в HTML: start и stop.
// Реализовать функционал таймера отсчета старта печати
// через функцию-конструктор со свойсвами startTime, stopTime
// и interval. Добавить в prototype методы start и stop.
// При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
// При нажатии на stop, значение interval выводится в консоль.

'use strict'
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
startBtn.addEventListener('click', startNow);
stopBtn.addEventListener('click', stopNow);


function Timer() {
  this.startTime = '',
  this.stopTime  = '',
  this.interval  = ''
}
Timer.prototype.start = function() {
  this.startTime = Date.now();
}

Timer.prototype.stop = function() {
  this.stopTime = Date.now();
  this.interval = this.stopTime - this.startTime;
  console.log(this.interval);
};
Object.defineProperties(Timer.prototype, {
  'start': {
    enumerable: false
  },
  'stop': {
    enumerable: false
  }
});
const timer = new Timer();

function startNow() {
  timer.start();
};

function stopNow() {
  timer.stop();
  // console.log(timer);
};
