/*
  Соединить задание 1 и 2

  Напишите функцию validate которая проверяет все поля формы
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.

  При клике на кнопку submit должна происходить проверка.

  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.

    showResults добавляет в список с классом .results
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation

    Для li с положительным результатом дать класс success,
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const userData = {
  first_name: '3',
  last_name: '',
  tel: ''
}
submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();

  const regFirstName = /^[A-Za-zА-Яа-я]+(\s[A-Za-zА-Яа-я]+){0,2}$/ig;
  const regLastName = /^([A-Za-zА-Яа-я])+(\s?)(-?)(\s?)([A-Za-zА-Яа-я]+)$/ig;
  const rightTel = /\+(\d{3})(-|\s)(\d{2})(-|\s)(\d{2})(-|\s)(\d{2})(-|\s)(\d{3})/ig;
  userData.tel = rightTel.test(tel.value);
  userData.first_name = regFirstName.test(firstname.value);
  userData.last_name = regLastName.test(lastname.value);
  console.log(userData);
  return userData;
}


function showResults(results) {
  resultsList.innerHTML = '';
  for (key in userData) {
    const res = userData[key] === true ?
      `SUCCESS: ${key} passed validation` :
      `ERROR: ${key} failed validation`
    const listItems = document.createElement('li');
    listItems.textContent = res;
    resultsList.append(listItems);
    userData[key] === true ?
      listItems.classList.add('success') :
      listItems.classList.add('error');
  }
}

submitBtn.addEventListener("click", showResults);
