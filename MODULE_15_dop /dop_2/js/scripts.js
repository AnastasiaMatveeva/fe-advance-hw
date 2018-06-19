/*
  Создайте класс Clock со свойством time и
  методом showTime(), которой выводит time в консоли.


  Добавьте классу Clock статический метод convertTime(ms).
  Он получает кол-во миллисекунд и возвращает дату с помощью Date.
  return new Date(ms)

  То есть будет возможность вызвать Clock.convertTime(111111)
  и получить обратно дату.

  Создайте класс Timer, наследующий от Clock.
  Класс Timer должен иметь сообственное свойство
  interval и метод countTime().
*/
'use strict'
const Clock = class{
  constructor(time) {
    this.time = time;
  }
  showTime(){
    console.log(this.time);
  }
  static convertTime(ms) {
    return new Date(ms);
  }

}

class Timer extends Clock {
  constructor(time, interval) {
    super(time);
    this.interval = interval;
  }
  countTime() {
    console.log(interval);
  }
}

let timeNow = new Clock (new Date());
let timer = new Timer(10,200);

timer.showTime();
console.log(Clock.convertTime(111111));
console.log(timeNow);
console.log(timer);
