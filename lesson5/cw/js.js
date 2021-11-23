// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let f=(a,b,c)=>{
//     if (a<b&&a<c){
//         console.log(a);
//     }else if (b<a&&b<c){
//         console.log(b);
//     }else {
//         console.log(c)
//     }
// }
// f(1,0.5,5)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let f=(a,b,c)=>{
//     if (a>b&&a>c){
//         console.log(a);
//     }else if (b>a&&b>c){
//         console.log(b);
//     }else {
//         console.log(c)
//     }
// }
// f(3,4,5)

// - створити функцію яка повертає найбільше число з масиву
// let a=[3,5,17,4,9];
// let f=(num)=>{
//     let max=num[0];
//     for (const element of num) {
//         if (element>max){
//             max=element
//         }
//
//
//     }
//     return max
// }
// console.log(f(a))

// - створити функцію яка повертає найменьше число з масиву
// let a=[3,5,17,4,9];
// let f=(num)=>{
//     let max=num[0];
//     for (const element of num) {
//         if (element<max){
//             max=element
//         }
//
//
//     }
//     return max
// }
// console.log(f(a))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let a=[3,4,6];
// let f=(bbc)=>{
//     let b=0;
//     for (let i = 0; i < bbc.length; i++) {
//         b+=bbc[i];
//
//     }
//     return b;
// }
//
// console.log(f(a))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let a=[3,4,6];
// let f=(bbc)=>{
//     let b=0;
//     for (let i = 0; i < bbc.length; i++) {
//         b+=bbc[i]/bbc.length;
//
//     }
//     return b;
// }
//
// console.log(f(a))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let f=(...arguments)=>{
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const element of arguments) {
//         if (element<min){
//             min=element;
//         } else if (element>max){
//             max=element
//
//         }
//
//     }
//     console.log(max);
//     return min;
//
//
// }
// console.log(f(1,44,2,6,9))

// - створити функцію яка заповнює масив рандомними числами;
// let f=(func)=>{
//     let a=[];
//     for (let i = 0; i < 40; i++) {
//         a.push(Math.floor(Math.random()*100));
//
//
//     }
//     return a
// }
// console.log(f());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let f=(func,lenght)=>{
//     let a=[];
//     for (let i = 0; i < func; i++) {
//         a.push(Math.floor(Math.random()*lenght));
//
//
//     }
//     return a
// }
// console.log(f(25,440));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let a=[1,2,3];
// let f=(func)=>{
//     let array=[];
//     for (let i = func.length-1,b=0; i >=0; i--,b++) {
//         array[b]=a[i];
//
//     }
//     return array
// }
// console.log(f(a))


