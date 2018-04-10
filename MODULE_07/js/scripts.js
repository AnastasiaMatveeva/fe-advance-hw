const kb = {
 topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
 middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
 bottomRom: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
}
  function createLayout (p) {
    let items;
    for (let i = 0; i < p.length; i ++) {
    let items = document.createElement('li');
    list.appendChild(items);
    items.innerText +=p[i];

  }
  return items;
}
const list = document.querySelector('.keyboard');

let titleFirst = document.createElement("p");
list.appendChild(titleFirst).innerHTML = "TOP ROW";
createLayout(kb.topRow);
let titleSecond = document.createElement("p");
list.appendChild(titleSecond).innerHTML = "MIDDLE ROW";
createLayout(kb.middleRow);
let titleThird = document.createElement("p");
list.appendChild(titleThird).innerHTML = "BOTTOM ROW";
createLayout(kb.bottomRom);
