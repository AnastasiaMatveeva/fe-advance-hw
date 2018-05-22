/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  console.log(apiUrl + input.value);
  fetch(apiUrl + input.value)
    .then(response =>{
      if(response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(contries => {
      contries.forEach(country =>{
      result.innerHTML =
        `<ul>
          <li>Country name: ${country.name}</li>
          <li>Capital: ${country.capital}</li>
          <li>Main currency: ${country.currencies[0].name}</li>
          <li>Flag: <img src="${country.flag}"></li>
        </ul>`
      })
    })
    .catch(err => {
    console.error("Error: ", err);
  });
}
