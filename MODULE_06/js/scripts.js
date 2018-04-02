const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  task: [],
  charCount: null,
  userErrors: null,
  userInput: null,

  setCharCount() {
    let number = +prompt("Emter number of symbol");

    function checkPositiveInteger() {
      while (number < 0 || number !== parseInt(number)) {
        if (number < 0) {
          number = +prompt("Enter positive number, please.");
        } else if (number !== parseInt(number)) {
          number = +prompt("Enter integer number, please.");
        }
      }

    }
    checkPositiveInteger();
    this.charCount = number;

  },

  createTask() {
    for (var i = 0; i < keyTrainer.charCount; i++) {
      let ranTask = Math.floor(Math.random() * keyTrainer.chars.length);
      this.task.push(this.chars[ranTask]);
    }
  },
  startTask() {
    const taskString = this.task.join("");
    this.userInput = prompt(`Enter,please, exactly  - ${taskString}`);
    if (this.userInput === taskString) {
      alert('You win!')
    } else {
      for (let i = 0; i < taskString.length; i++) {
        if (taskString[i] !== this.userInput[i]) {
          this.userErrors++;
        }
      }
      alert(`You've made ${this.userErrors} mistakes`)
    }
  },

  run() {
    this.setCharCount();
    this.createTask();
    this.startTask();
  }
};
keyTrainer.run();
