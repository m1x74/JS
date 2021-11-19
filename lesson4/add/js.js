// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function f() {
//     if (arguments.length>=2){
//         let sum=0;
//         for (let i = 0; i < arguments.length; i++) {
//             sum+=arguments[i]
//         }
//         console.log(sum)
//     } else {
//         console.log(arguments[0])
//     }
//
// }
// f(3,3);

// ИЛИ ТАК. СУММА ОДНОГО ЭЛЕМЕНТА ЖЕ БУДЕТ РАВНО ЭТОМУ ЭЛЕМЕНТУ, ТАК ЧТО МОЖНО ТАК. УТОЧНИТЕ, ПЛИЗ, КАКОЙ ИЗ ВАРИАНТОВ ЛУЧШЕ?
//
// function f() {
//         let sum=0;
//         for (let i = 0; i < arguments.length; i++) {
//             sum+=arguments[i]
//         }
//         console.log(sum)
// }
// f(3);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let array1=[2,4,5,6,8];
// let array2=[5,34,6,2,1];
// function sum(mas1,mas2) {
//     let arraysum=[];
//     for (let array1Key in array1) {
//         for (let array2Key in array2) {
//             if (array1Key===array2Key){
//                 arraysum.push(array1[array1Key]+array2[array2Key]);
//
//             }
//
//         }
//
//     }
//     console.log(arraysum)
//     }
// sum(array1,array2)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let array= [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function f(mas) {
//     let newArray=[];
//     for (let i = 0; i < mas.length; i++) {
//         const masElement = mas[i];
//         for (const masKey in masElement) {
//             newArray.push(masKey)
//         }
//     }
//     console.log(newArray)
// }
// f(array)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array= [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function f(mas) {
//     let newArray=[];
//     for (let i = 0; i < mas.length; i++) {
//         const masElement = mas[i];
//         for (const masElementKey in masElement) {
//             newArray.push(masElement[masElementKey])
//         }
//     }
//     console.log(newArray)
// }
// f(array)

