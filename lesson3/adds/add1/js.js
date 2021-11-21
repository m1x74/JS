// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array=[];
// for (let i = 2,j=0; i <= 100; i+=2,j++) {
//     array[j]=i;
//
//
// }
// console.log(array)

// let array=[];
// for (let i = 1,j=0; i <= 100; i+=2,j++) {
//     if (i%2!==0){
//         array[j]=i
//
//     }
// }
// console.log(array)
// let array=[];
// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random()*100))
//
// }
// console.log(array)

// let array=[];
// let min=8;
// let max=732;
// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random()*(max-min+1)+min))
//
// }
// console.log(array)

// 2. Вивести за допомогою console.log кожен третій елемен
// let array=[];
// for (let i = 3; i < 50; i+=3) {
//     array[i]=i;
// }
// console.log(array)
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array=[];
// for (let i = 2,j=0; i <= 50; i+=3, j++) {
//     if (i%2===0){
//         array[j]=i
//     }
//
// }
// console.log(array)
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array=[];
// let b=[];
// for (let i = 2,j=0; i <= 50; i+=3, j++) {
//     if (i%2===0){
//         array[j]=i
//         b.push(i)
//     }
//
// }
// console.log(array);
// console.log(b);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array=[1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i-1])
//     }
//
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let cost=[100,250,50,168,120,345,188];
// let check=[];
// let sum=0;
// function f(bb) {
//     for (let i = 0; i < cost.length; i++) {
//         sum+=cost[i];
//
//     }
//     return sum;
//
// }
// f(cost);
// check.push(sum/cost.length);
// console.log(check);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array=[2,3,4,6,8,9];
// let array2=[];
// for (let i = 0; i < array.length; i++) {
//     array2.push(array[i]*5)
//
// }
// console.log(array2)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let a=['dede',true,5>6,5,6,'333'];
// let b=[];
// for (let i = 0; i < a.length; i++) {
//     if (typeof a[i]==="number"){
//         b.push(a[i]);
//     }
//
// }
// console.log(b);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// for (let i = 0; i < usersWithId.length; i++) {
//     let  user=usersWithId[i];
//     for (const city of citiesWithId) {
//         if (city.user_id===user.id){
//             user.adress=city;
//         }
//
//     }
//
// }
// console.log(usersWithId)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let a=[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < a.length; i++) {
//     if (a[i]%2===0){
//         console.log(a[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let a=[1,2,3,4,5,6,7,8,9,10];
// let b=[];
// for (let i = 0; i < a.length; i++){
//     b.push(a[i])
// }
// console.log(a);
// console.log(b);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let letters=[ 'a', 'b', 'c'];
// let sum='';
// for (let i = 0; i < letters.length; i++) {
//     sum+=letters[i]
//
// }
// console.log(sum)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas=[ 'a', 'b', 'c'];
// sum=0;
// let string=''
// while (sum < mas.length){
//     string+=mas[sum];
//     sum++;
// }
// console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let letters=[ 'a', 'b', 'c'];
// let sum='';
// for (const letter of letters) {
//     sum+=letter
//
// }
// console.log(sum)