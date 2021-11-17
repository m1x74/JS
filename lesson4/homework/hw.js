// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function p(a,b) {
//     let sP = a*b;
//     return sP;
// }
// console.log(p(6,10))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function p(r) {
//     let s = 3.14*r**2;
//     return s;
//
// }
//
// console.log(p(5))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h,r) {
//     let numberp= 3.14;
//     let square = 2*numberp*r**2+2*numberp*h;
//     return square;
//
// }
//
// console.log(s(10,5))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=['Hello','Okten','Com']
// function m(massive) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
//
// }
// m(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(text) {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`);
//     for (let i = 0; i < 10; i++) {
//         document.write(`<p>${i} - ${text}</p>`)
//
//     }
// }
//
// p(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, at beatae blanditiis doloremque ea id ipsam minus nobis pariatur sit veniam voluptas voluptatem voluptatibus. Eos itaque non ullam unde voluptatibus!`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function s(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
//
// }
// s('Okten-Web')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul('Okten',100);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let a=[123,true,'yyyyy',5>6,111];
// function f(array) {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//
//     }
//     document.write(`</ol>`);
//
// }
// f(a)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let a=[{id:1,name:`Stas`,age:20},{id:2,name:`John`,age:24},{id:3,name:`Katya`,age:25},{id:4,name:`Jimmy`,age:20}]
// function f(humans) {
//     for (const human of humans) {
//         document.write(`<div style="margin-left: 40px; ">${human.id}.${human.name} - ${human.age}</div>`)
//     }
//
// }
// f(a)