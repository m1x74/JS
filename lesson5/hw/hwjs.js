// - створити функцію яка обчислює та повертає площу прямокутника
// let s=(a,b) => a*b;
// console.log(s(5,4));

// - створити функцію яка обчислює та повертає площу кола
// let s=(pi,r) => pi*r**2;
// console.log(s(3.14,4));

// - створити функцію яка обчислює та повертає площу циліндру
// let s=(pi,r,h)=> 2*pi*r*h;
// console.log(s(3.14,3,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let m=[1,2,3,4,5];
// let mas=()=>{
//     for (let i = 0; i < m.length; i++) {
//         console.log(m[i])
//
//     }
// }
// mas(m);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let par=(text)=>{
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`);
//     for (let i = 0; i < 10; i++) {
//         document.write(`<p>${i} - ${text}</p>`)
//
//     }
// };
// par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eum.')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let sps=(text)=>{
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// sps('raz dva tri')

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let sps=(text)=>{
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
// sps('raz dva tri');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas=[1,2,'ededed',true,5>6,4];
// let sps=(m)=>{
//     document.write('<ol>');
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${m}</li>`)
//     }
//
// }
// sps(mas);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let mas=[{id : 3,name: 'Stas',age:16},{id : 6,name: 'Max',age:10},{id : 22,name: 'Lena',age:25}];
// let doc=(m)=>{
//     for (const mElement of m) {
//         document.write(`<div style="margin-left: 40px;font-size: 40px;margin-top: 20px">${mElement.id}.${mElement.name} - ${mElement.age}</div>`)
//
//     }
// }
// doc(mas)
