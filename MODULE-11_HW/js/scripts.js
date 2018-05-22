// Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise с которым потом можно работать. Реализовать следующий функционал:
//
// функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
// функция getUserById(id) - должна вернуть пользователя с переданным id.
// функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
// функция removeUser(id) - должна удалять из БД юзера по указанному id.
// функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми полями name и age.
// Документацию по бэкенду и пример использования прочитайте здесь .
//
// Сделать минимальный графический интерфейс в виде панели с полями и кнопками. А так же панелью для вывода результатов операций с бэкендом.

const apiUrl = "https://test-users-api.herokuapp.com/users/";

const result = document.querySelector(".result");
const getBtn = document.querySelector("#js-get");
const getId = document.querySelector("#user-id");
const findBtn = document.querySelector("#js-find");

let html = "";
getBtn.addEventListener('click', getAllUsers);

function getAllUsers(evt) {
  evt.preventDefault();
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error fetchind data")
    })
    .then(response => {
      response.data.map(row => {
        html += `<div class = "showResult">
                  <table border=1>
                    <tr>
                      <th>ID
                        <td>${row.id}</td>
                      </th>
                      <th>Name
                        <td>${row.name}</td></th>
                      <th>Age
                        <td>${row.age}</td>
                      </th>
                    <tr>
                  </table>
                  </div>`;
        result.innerHTML = html
      })
    })
    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error updating user`;
    })
}

findBtn.addEventListener('click', getUserById);
function getUserById(evt) {
  evt.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${getId.value}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(user => {
      console.log(user.data)
      html += `<div class = "showResult">
                <table border=1>
                  <tr>
                    <th>Name
                      <td>${user.data.name}</td></th>
                    <th>Age
                      <td>${user.data.age}</td>
                    </th>
                  <tr>
                </table>
                </div>`;
      result.innerHTML = html
    })
    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error finding user`;
    })
}

const userName = document.querySelector("#input_name");
const userAge = document.querySelector("#input_age");
const addBtn = document.querySelector("#js-add");
addBtn.addEventListener('click', addUser);

function addUser(evt) {
  evt.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/`, {
      method: "POST",
      body: JSON.stringify({
        name: `${userName.value}`,
        age: `${userAge.value}`
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(
      result.innerHTML = `You added new user: ${userName.value}, ${userAge.value} years old `
    )

    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error addin user`;
    })
}

const removeBtn = document.querySelector("#js-remove");
removeBtn.addEventListener('click', removeUser);

function removeUser(evt) {
  evt.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${getId.value}`, {
      method: "DELETE"
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(
      result.innerHTML = `You removed user with id:${getId.value}`
    )
    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error updating user`;
    })
}

const updateId = document.querySelector("#id_update");
const updateName = document.querySelector("#name_update");
const updateAge = document.querySelector("#age_update");

const updateButton = document.querySelector("#js_update")
updateButton.addEventListener('click', updateUser);

function updateUser(evt) {

  evt.preventDefault();
  fetch(`https://test-users-api.herokuapp.com/users/${updateId.value}`, {
      method: "PUT",
      body: JSON.stringify({
        name: `${updateName.value}`,
        age: `${updateAge.value}`
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(
      result.innerHTML = `User with id: ${updateId.value} was updated`
    )
    .catch(err => {
      console.error("Error: ", err);
      result.innerHTML = `Error updating user`;
    })
}
