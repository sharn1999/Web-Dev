//first

let a = +prompt("Первое число:", "");
let b = +prompt("Второе число:", "");

alert( a + b );

//second

alert( Math.round(6.35 * 10) / 10 );

//third

function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Read: ${readNumber()}`);

//fourth

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

//fifth

function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//sixth

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );