// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a,b,c) {
//     if (a<b&&a<c){
//         document.write(a);
//     }else if (b<c&&b<a){
//         document.write(b)
//     }
//     else{
//         document.write(c);
//     }
//
// }
// numbers(2,0,1)






// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(a,b,c) {
//     if (a>b&&a>c){
//         document.write(a);
//     }else if (b>c&&b>a){
//         document.write(b)
//     }
//     else{
//         document.write(c);
//     }
//
// }
// numbers(2,0,1)


// - створити функцію яка повертає найбільше число з масиву
// let a=[1,2,3,4,5,6];
// function f(num) {
//     let max=num[0];
//     for (const element of num){
//         if (element>max){
//             max=element
//         }
//     }
//     return max;
// }
// document.write(f(a))


// - створити функцію яка повертає найменьше число з масиву
// let a=[1,2,3,4,5,6];
// function f(num) {
//     let min=num[0];
//     for (const element of num){
//         if (element<min){
//             min=element
//         }
//     }
//     return min;
// }
// document.write(f(a))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let a=[1,6,89,12,3];
// function f(sum) {
//     let b=0;
//     for (let i = 0; i < a.length; i++) {
//         b+=a[i]
//
//     }
//     return b;
//
// }
// document.write(f(a));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let a=[1,6,89,12,3];
// function f(avg) {
//     let b=0;
//     for (let i = 0; i < a.length; i++) {
//         b+=a[i]/a.length;
//
//     }
//     return b;
//
// }
// document.write(f(a));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function f(num) {
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const element of arguments) {
//         if (element < min) {
//             min = element
//         }
//
//         if (element>max){
//             max=element
//         }
//
//     }
//     console.log(max);
//     return min;
//
// }
// document.write(f(4,5,6,8))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function f(rand) {
//     let array=[];
//     for (let i = 0; i < rand; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
//    return array
//
// }
// document.write(f(10))



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function f(rand,lenght) {
//     let array=[];
//     for (let i = 0; i < rand; i++) {
//         array.push(Math.round(Math.random()*lenght))
//     }
//    return array
//
// }
// document.write(f(10,15))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr=[1,2,3,4,5]
// function f(reverse) {
//     let array = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         array[ri] = arr[i]
//     }
//     return array;
// }
//
// console.log(f(arr))








