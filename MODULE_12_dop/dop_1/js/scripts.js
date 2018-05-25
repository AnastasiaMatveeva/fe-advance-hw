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

const firstNameRule = /
w - латинский алфавит
//[а-яґєії`´ʼ’ʼ’] украинский язык///
// [ёъэы] русский язык
function validate(evt) {

  const objValidate = {
    'first name': firstname.checkValidity(),
    'last name': lastname.checkValidity()
  };

}
