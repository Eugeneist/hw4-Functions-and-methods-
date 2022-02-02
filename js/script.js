"use strict";

// ЗАДАЧА 1

let searchString = (originalStr, str) => originalStr.includes(str);

console.log(searchString("подушка", "душ"));
console.log(searchString("Hello", "llo"));
console.log(searchString("Hello", "www"));


// ЗАДАЧА 2

let capitalizeFirstLetter = (str) => {
   return str[0].toUpperCase() + str.substr(1, str.length);
}

let userText = prompt("Введите слово с маленькой буквы");

alert(capitalizeFirstLetter(userText));


// ЗАДАЧА 3