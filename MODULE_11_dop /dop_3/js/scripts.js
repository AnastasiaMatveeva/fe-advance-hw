/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/

  Написать функцию fetchUsers, которая используя REST сервис
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.

  Результатом fetch будет массив объектов с полями.

  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:

    ID | NAME | AGE
    id | name | age
    id | name | age
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");
const tBody = document.querySelector("#js-tbody");
const htmlTpl = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(htmlTpl);

const updateView = items => {
  let htmlString = "";

  items.forEach(item => {
    htmlString += compiled(item);
    tBody.innerHTML = htmlString;
  });
}
const fetchUsers = () =>
  evt.preventDefault();
fetch("https://test-users-api.herokuapp.com/users/")
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  })
  .then(items => {
    const usersInfo = items.data;
    console.log(usersInfo);
    updateView(usersInfo);
  })
  .catch(err => {
    console.log("Error: ", err);
  })

getBtn.addEventListener("click", get);
