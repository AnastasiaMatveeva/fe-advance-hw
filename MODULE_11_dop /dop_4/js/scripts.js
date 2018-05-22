/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/

  Написать функцию getUserByName, которая используя REST сервис
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.

  Результатом fetch будет ответ от сервера,
  вывести содержимое всего ответа (id, name, age)
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");
const er = document.querySelector(".error");

const upiUrl = "https://test-users-api.herokuapp.com/users/";
postBtn.addEventListener("click", getUserByName);

function getUserByName(evt) {
  evt.preventDefault();
    fetch(upiUrl)
      .then(response =>{
        if(response.ok){
          return response.json();
        }
        throw new Error ("error fething data");
      })
      .then(users => {
        users.data.find(input.value);
        console.log(user.name);
        console.log(input.value);
        console.log(user.name === input.value)
        // if(user.name === input.value){
        //   result.innerHTML =
        //     `<ul class="result js-result">
        //        <li>ID: ${user.id}</li>
        //        <li>Name: ${user.name}</li>
        //       <li>Age: ${user.age}</li>
        //      </ul>`
        //    }
        //     else {
        //       result.innerHTML = "Такого пользователя в списке нет!"
        //     }
     })

   // })
   .catch(error => {
      console.error("Error: ", error);
    });
 }
