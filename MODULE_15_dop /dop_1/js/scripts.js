/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/

'use strict'
const Account = class {
  constructor(login, email, friendsCount){
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount
  }

  getAccountInfo() {
    console.log(`login:${this.login}, email: ${this.email},friendsCount: ${this.friendsCount} `);
  }
}

let acc1 = new Account('account1', 'email1@email.ua', '10');
let acc2 = new Account('account2', 'email2@email.ua', '20');
let acc3 = new Account('account3', 'email3@email.ua', '30');

acc1.getAccountInfo();
acc2.getAccountInfo();
acc3.getAccountInfo();
