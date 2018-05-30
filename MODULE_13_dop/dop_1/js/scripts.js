/*
  Напишите функцию validate которая проверяет поля формы
  firstname и lastname и возвращает результат в виде
  обьекта со свойствами 'first name' и 'last name'.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first tname': true или false,
    'last name': true или false,
  }

  Критерии валидации:
  1)Имя. Допускается не более 3-х слов, а слова должны состоять
  только из букв латинского и кириллического алфавита.

  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами,
  дефисом или пробелами и дефисом. Слова должны состоять только из
  букв латинского и кириллического алфавита.

  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);

function validate(evt) {
evt.preventDefault();
const userName = {
  first_name: '',
  last_name:''
}
const regFirstName = /^[A-Za-zА-Яа-я]+(\s[A-Za-zА-Яа-я]+){0,2}$/;
const regLastName = /^([А-яёЁ]+|[a-z+])+(\s?)(-?)(\s?)([А-яёЁ]+|[a-z]+)$/;
userName.first_name = regFirstName.test(firstname.value);
userName.last_name = regLastName.test(lastname.value);
console.log(userName);
}
