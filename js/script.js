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

let str = prompt("Введите строку");
let maxlength = prompt("Введите максимальную длинну строки!");

function truncate(str, maxlength) {
    if (str.length <= maxlength){
        return str;
    } else {
        return str.substr(0, maxlength) + "...";
    }
}

console.log(truncate(str, maxlength));


// ЗАДАЧА 4

const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const getAvarageMark = (array) => {
    const studentsList = array.map(a => Object.assign({}, a));

    studentsList.forEach(object => {
        let average = object.marks.reduce((a, b) => (a + b)) / object.marks.length;
        object.averageMark = `${average}`;
    });
    console.log(studentsList);
}

getAvarageMark(students);


const getGlobAvarMark = (array) => {
    let averageGlobal = 0;
    let sumGlobal = 0;
    let globAvarMark = 0;
    array.forEach(object => {
        averageGlobal = object.marks.reduce((a, b) => (a + b)) / object.marks.length;
        sumGlobal += averageGlobal;
        globAvarMark = sumGlobal / array.length;
    });
    console.log(`Cредний балл по всем студентам: ${globAvarMark}`);
}

getGlobAvarMark(students);


// ЗАДАЧА 5

const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
];

const getAvaragePriceSuv = (array) => {
    let suv = array.filter(object => object.type.toLowerCase() === 'suv');
    let globalPrice = 0;
    let globAvarPrice = 0;
    suv.forEach(object => {
        globalPrice += object.price;
        globAvarPrice = globalPrice / suv.length;
    });
    console.log(`Средняя цена автомобилей типа SUV: ${globAvarPrice}$`);
}

getAvaragePriceSuv(vehicles);


// ЗАДАЧА 6

let arr = [10, 20, 3, 4, 0, 99, 97];

let copySorted = (arr) => arr.slice().sort();
let sorted = copySorted(arr);

console.log(arr); 
console.log(sorted);


// ЗАДАЧА 7

let getKeysCount = (obj) => Object.keys(obj).length;

console.log(getKeysCount({ name: 'John' }));
console.log(getKeysCount({ name: 'John', age: 22 }));
console.log(getKeysCount({ name: 'John', salary: null }));