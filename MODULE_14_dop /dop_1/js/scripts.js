/*
  Создать функцию-конструктор Account
  с полями login, email и friendsCount.

  Для функции-конструктора Account, создать
  метод getAccountInfo(), который выводит
  в консоль значения всех полей. Записать
  метод в prototype.

  Обратите внимание, метод будет всего один,
  в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/

'use strict'
function Account (login, email ,friendsCount){
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
}
Account.prototype.getAccountInfo = function(){
  for(let key in this){
    console.log(`${key}:${this[key]}`);
  }
}
Object.defineProperty(Account.prototype,'getAccountInfo',{
  enumerable: false
} );

let account1 = new Account('login1', 'email@email.io', '100');
let account2 = new Account('login2', 'email@email.io', '200');
let account3 = new Account('login3', 'email@email.io', '300');

account1.getAccountInfo();
account2.getAccountInfo();
account3.getAccountInfo();
