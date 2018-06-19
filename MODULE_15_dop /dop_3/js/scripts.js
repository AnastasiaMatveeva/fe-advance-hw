/*
  Создать статический метод convertTime для класса Clock.
  Он получает кол-во миллисекунд и возвращает дату с помощью Date.

  То есть будет возможность вызвать Clock.convertTime(111111)
  и получить обратно дату.
*/

const Clock = class {
  static convertTime(ms){
    return new Date(ms);
  }
}
console.log(Clock.convertTime(111111)) ;
