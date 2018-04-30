/*
  Напишите функцию getFormattedTime(time), которая
  получает time - кол-во миллисекунд и возвращает
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.

  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
// */
//
function getFormattedTime(time) {
  let date = new Date (time);
  let newDate = date.getMinutes();
  let newDate2 = date.getSeconds();
  let newDate3 = Math.floor(date.getMilliseconds()/100);
  if (newDate < 10 ){
    newDate = "0" + newDate;
  }
  if (newDate2 < 10 ){
    newDate2 = "0" + newDate2;
  }
  let res = `${newDate}:${newDate2}.${newDate3}`;
  console.log(res);
}

getFormattedTime(1523621052858);
 // 04:12.8

getFormattedTime(1523621161159);
 // 06:01.1


getFormattedTime(1523621244239);
   // 07:24.2
