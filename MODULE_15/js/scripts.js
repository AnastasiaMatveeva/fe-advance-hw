// Создать две кнопки в HTML: start и stop.
// Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
// Для класса Timer создать методы start и stop, getTime.
// Создать экземпляр класса Timer, пусть он называется stopwatch.
// При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
// Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.

'use strict'
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
startBtn.addEventListener('click', startNow);
stopBtn.addEventListener('click', stopNow);


const Timer = class {
  constructor (startTime, stopTime, interval) {
  this.startTime = '',
  this.stopTime  = '',
  this.interval  = ''
  }
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
