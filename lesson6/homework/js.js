// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let first='hello world';
// let second='lorem ipsum';
// let third='javascript is cool';
// console.log(first.length,second.length,third.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let first='hello world';
// let second='lorem ipsum';
// let third='javascript is cool';
// console.log(first.toUpperCase(),second.toUpperCase(),third.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let first='HELLO WORLD';
// let second='LOREM IPSUM';
// let third='JAVASCRIPT IS COOL';
// console.log(first.toLowerCase(),second.toLowerCase(),third.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let stringToarray =(str)=>{
//     return str.split(' ');
//
// };
// let array=stringToarray(str);
// console.log(array);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters=(str, length)=>{
//     return str.substr(0,length);
// };
// console.log(delete_characters(str,7));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{
//    return  str.toUpperCase().split(' ').join('-');
// }
// console.log(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let a='stanislav';
// let f=(a)=>{
//     return a[0].toLocaleUpperCase()+a.slice(1);
//
// }
// console.log(f(a));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str= 'hello my name is stas';
// let capitalize=(str)=>{
//     return str.split(' ').map(arg=>arg.charAt(0).toUpperCase()+arg.slice(1)).join(' ');
// };
// console.log(capitalize(str));