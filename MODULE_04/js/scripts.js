const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
  let keyboard = [];
  firstRow = alphabet.slice(0, 12).split('');
  secondRow = alphabet.slice(12, 23).split('');
  thirdRow = alphabet.slice(23).split('');
  keyboard.push(firstRow);
  keyboard.push(secondRow);
  keyboard.push(thirdRow);
  console.log(keyboard);
  return keyboard;
}
const ranRowSymbol = addKeyboardLayout(alphabet);

function getRandCharInRow(row) {
  row = parseInt(prompt("Введите число от 1-го до 3-х"));
  if (row > 3 || row < 0) {
    alert("неверное число!");
  } else {
    return ranRowSymbol[row - 1][Math.floor(Math.random() * ranRowSymbol[row - 1].length)];
  }
}

function getRandCharInAlph() {
  var ranGlobalSymbol = "";
  for (var i = 0; i < 1; i++)
    ranGlobalSymbol += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  return ranGlobalSymbol;
}
console.log(`Случайная буква из введенной строки  - ${getRandCharInRow()}`);

console.log(`Случайный буква из алфавита - ${getRandCharInAlph()}`);
