/*
  Написать скрипт, который по клику присваивает
  выбранной кнопке языка класс lang-ctrls__btn--active
  и сохраняет сделанный выбор  в объекте, а этот объект
  сохранятеся в localStorage.

  При загрузке окна происходит провека есть ли сохраненный
  выбор в localStorage и если есть, то данные для подсветки
  коавиши берутся оттуда.
*/


const nav = document.querySelector('.lang-ctrls__body');
const arrBtn = Array.from(nav.children);
const btnActive = {
  node: null,
  lang: " ",
  storage: null
}
window.onload = () => {
  const currentLang = localStorage.getItem ('lang');
  arrBtn.forEach(function(name, i, arr){
    if (arrBtn[i].textContent == currentLang){
      btnActive.storage = arrBtn[i];
      const node = arrBtn[i].classList.add("lang-ctrls__btn--active");
    }
  })

console.log(btnActive.storage);
const onClick = event => {
  if (btnActive.node !== null) {
    btnActive.node.classList.remove("lang-ctrls__btn--active");
  }
  if (btnActive.storage !== null) {
    btnActive.storage.classList.remove("lang-ctrls__btn--active");
  }
  if (event.target !== event.currentTarget) {
    btnActive.node = event.target;
    btnActive.lang =  event.target.textContent;
    localStorage.setItem ('lang', event.target.textContent);
    btnActive.node.classList.add("lang-ctrls__btn--active");
    console.log(btnActive);
  };
};
nav.addEventListener("click", onClick);

};
