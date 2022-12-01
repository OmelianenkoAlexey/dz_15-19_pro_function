// ! ДЗ 15. Реалізуйте функцію generateKey

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i
// !!!!!!!!!!!!!!!
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function generateKey(length, characters) {
//     let item = new Array(length);

//     for(let i = 0; i < length; i++) {
//         item.push(characters[Math.round(Math.random() * (characters.length - 0) + 0)]);
//     }
//     return item.join("");
// }

// const key = generateKey(5, characters);
// console.log(key);


// ! ДЗ 16. Функція із замиканням

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// ﻿sum(3) = 3
// sum(5) = 8
// sum(20) = 28

// let total = 0;

// function sum(number) {
//     total = total + number;
//     console.log(`Введено число ${number}, сумма ${total}`);

//     function sum(number) {
//         total = total + number;
//         console.log(`Введено число ${number}, сумма ${total}`);

//         function sum(number) {
//             total = total + number;
//             console.log(`Введено число ${number}, сумма ${total}`);
//         }
//         sum(20);
//     }
//     sum(5);
// }
// sum(3);
// !!!!!!!!!!!!!!!!!!!!!!
// console.log(sum(20))
// sum(3);
// sum(5);
// sum(20);

// return total;

// let a = 'global';
// function outer() {
//     let b = 'outer';
//     function inner() {
//         let c = 'inner'
//         console.log(c);   // 'inner'
//         console.log(b);   // 'outer'
//         console.log(a);   // 'global'
//     }
//     console.log(a);     // 'global'
//     console.log(b);     // 'outer'
//     inner();
// }
// outer();
// console.log(a);         // 'global'

// ! ДЗ 17. Functions

// Дано две функции:

// function main(a, b, c) {
// }

// function sum(a, b) {
//     return a + b;
// }

// Перепишите функцию main следующим образом:

// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.
// !!!!!!!!!!!!!!!!! не правильное решение
// function sum(a, b) {
//     return a + b;
// }

// function main(a = 2, b = 3, c = sum(a, b)) {

//     return c;
// }

// console.log(main(5, 6, 8));

// !!!!!!!!!!!!!!!!! правильное решение

// не надо по дефолту в main параметром с передавать sum()
// В параметр с может прийти и может не прийти функция и твоя задача сделать проверку что туда пришла функция
//  и если да то вызвать с передав туда агрументами a, b

// function sum(a, b) {
//     return a + b;
// }
// function main(a = 2, b = 3, c) {
//     if (typeof c === "function") {
//         return c = sum(a, b);
//     } else {
//         return c;
//     }
// }
// console.log(main(10, 15, sum));

//  !   ДЗ 18. Functions 2

//     Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов.
//     Тот массив, сумма которого большая – должен вернутся функцией.

//     Пример:
// a = [1, 2, 3, 'hello', 4, 5] => summA = 15
// b = [1, 2, 3, true, 4, undefined, 6] => summB = 16

// if (summA < summB) => return b
// debugger;
// let a = [1, 2, 3, 'hello', 4, 5];
// let b = [1, 2, 3, true, 4, undefined, 6];

// function comparesArrays(arr_1, arr_2) {
//     // debugger;
// let newA = [];

// for (let i = 0; i < arr_1.length; i++) {
//     if ((typeof arr_1[i]) === "number") {
//         newA.push(arr_1[i]);
//     }
// }
// let newB = [];
// for (let i = 0; i < arr_2.length; i++) {
//     if ((typeof arr_2[i]) === "number") {
//         newB.push(arr_2[i]);
//     }
// }
// let summA = 0;
// for (let i = 0; i < newA.length; i++) {
// summA = summA + newA[i];
// }
// let summB = 0;
// for (let i = 0; i < newB.length; i++) {
// summB = summB + newB[i];
// }

// let result = "";
// if(summA >= summB) {
//     result = a;
// } else {
//     result = b;
// }
// return result;
// }

// console.log(comparesArrays(a, b));
// !!!!!!!!!!!!!
// let a = [1, 2, 3, 'hello', 4, 5];
// let b = [1, 2, 3, true, 4, undefined, 6];

// function comparesArrays(arr_1, arr_2) {

//     let newA = [];
//     let newB = [];

//     bigLengthArr = arr_1.length > arr_2.length ? arr_1.length : arr_2.length;

//     function otborNumber(arr) {
//         let arrNumber = [];
//         for (let i = 0; i < bigLengthArr; i++) {
//             if ((typeof arr[i]) === "number") {
//                 arrNumber.push(arr[i]);

//             }
//         }
//         return arrNumber;
//     }
//     newA = otborNumber(a);
//     newB = otborNumber(b);

//     let summA = 0;
//     let summB = 0;

//     function summNumber(arr) {
//         let summ = 0;
//         for (let i = 0; i < arr.length; i++) {
//             summ = summ + arr[i];
//         }
//         return summ;
//     }

//     summA = summNumber(newA);
//     summB = summNumber(newB);

//     let result = "";
//     if (summA >= summB) {
//         result = a;
//     } else {
//         result = b;
//     }
//     return result;
// }

// console.log(comparesArrays(a, b));
// !!!!!!!!!!!!!

// const a = [1, 4, 3, 'hello', 4, 5];
// const b = [1, 1, 3, true, 5, undefined, 6];

// function comparison(arrOne, arrTwo) {
//     let summA = 0;
//     let summB = 0;
//     let length = 0;

//     const arrThrre = [arrOne, arrTwo];

//     length = arrOne.length > arrTwo.length ? arrOne.length : arrTwo.length;

//     for (let i = 0; i < length; i++) {
//         if (typeof (arrThrre[0][i]) === 'number') {
//             summA += arrThrre[0][i];
//         }
//         if (typeof (arrThrre[1][i]) === 'number') {
//             summB += arrThrre[1][i];
//         }
//     }

//     if (summA < summB) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(comparison(a, b));
// !!!!!!!!!!!!!

//     ! ДЗ 19. Functions 3

// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции.
// При копировании массива – функция применяется к каждому элементу копируемого массива.

//         newList = copy(list, function (value) { return value * 10; })
// !!!!!!!!!!!!!!!!!
// const color = ["white", "black", "red"];

// function copy(list, value) {
//     if (!value) {
//         return list.slice();
//     } else {
//         let arr = [];
//         for (i = 0; i < value.length; i++) {
//             arr.push(value[i]);
//         }
//         return arr;
//     }
// }

// let newList = copy(color, color);
// console.log(newList);










