const keyboard = {
  layouts: {
    en: {
      topRow: ["q", "w", "e", "r", "t", "y", "u", "o", "p", "[", "]"],
      middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
      bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    },
    ru: {
      topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
      middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
      bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/"]
    },
    ua: {
      topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
      middleRow: ["ф", "и", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
      bottomRow: ["я", "ч", "с", "м", "і", "т", "ь", "б", "ю", "/"]
    }
  },
  langs: ['en', 'ru', 'ua'],

};

function getCurrentLang() {
  let currentLang;
  currentLang = prompt('Чтобы выбоать язык введите число от 0 до 2.Где 0-en, 1-ru, 2-ua');
  switch (currentLang) {
    case "0":
      keyboard.currentLang = keyboard.langs[0];
      break;
    case "1":
      keyboard.currentLang = keyboard.langs[1];
      break;
    case "2":
      keyboard.currentLang = keyboard.langs[2];
      break;
    case null:
      break;
    default:
      alert('вы ввели неверное число!');
      getCurrentLang();
      return currentLang;
  }
};
getCurrentLang();

function getRandCharInAlph() {
  let currentLang = keyboard.currentLang;
  let ranLetter = [];
  for (let i in keyboard.layouts[currentLang]) {
    ranLetter = ranLetter.concat(keyboard.layouts[currentLang][i]);
  }
  // console.log(ranLetter);
  let ranLatterReduced = ranLetter.reduce((i, current) => {
    return i + current;
  }, "");
  let i = Math.floor(Math.random() * (ranLatterReduced.length));
  // console.log(ranLatterReduced.length);
  console.log(ranLatterReduced[i]);
  return ranLatterReduced[i];
}
getRandCharInAlph();
