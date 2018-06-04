/*
  Создайте функцию-конструктор Clock со свойством
  time и методом showTime(), которой выводит
  time в консоли.

  Создайте функцию-конструктор Timer, наследующую
  от Clock. Функция-конструктор Timer должна
  иметь сообственное свойство interval и метод countTime().
*/

function Clock (time) {
  this.time = time;
  this.showTime = function() {
    console.log(this.time);
  }
}


function Timer (interval) {
  this.interval = interval;
  this.countTime = function () {

  }
}
const clock  = new Clock ();
const timer = new Timer (100);


console.log(timer);
console.log(clock);
