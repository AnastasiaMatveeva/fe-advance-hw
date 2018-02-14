
let num = prompt('Введите число от 1 до 3-x, которое соответсвует выбранному курорту:Hurgada-1, Taba-2,Sharm-3.', 1);
let res;
switch (num) {
  case '1': res = "Hurgada"       ; break;
  case '2': res = "Taba"          ; break;
  case '3': res = "Sharm"         ; break;
  default : res = "неверное число";
}

console.log(`Вы выбрали ${res}!`);
