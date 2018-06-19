/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.

  Использование будет выглядеть следующим образом:

  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);

  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

const Car = class {
  constructor(maxSpeed, running, distance){
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
  }
  getSpecs(){
    console.log(`maxSpeed:${this.maxSpeed}, running:${this.running}, distance:${this.distance}`);
  }
}
