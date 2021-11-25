// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let name = (string, symbol) => {
//     let array = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol);
//         a.forEach((item) => {
//             if (item) array.push(item);
//         })
//         console.log(array.join(' '));
//     }
// }
// name(n2, '---');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let f=(leng,range)=>{
//     let arr=[];
//     for (let i = 0; i < leng; i++) {
//       arr.push(Math.floor(Math.random()*range))  ;
//
//     }
//     return arr
// }
//
// console.log(f(10,100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let f=(leng,range)=>{
//     let newArr=[];
//     for (let i = 0; i < leng; i++) {
//         newArr.push(Math.floor(Math.random()*range));
//
//     }
//     return newArr.sort((a,b)=>b-a)
//
// }
// console.log(f(10,100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let f=(leng,range)=>{
//     let array=[];
//     for (let i = 0; i < leng; i++) {
//         array.push(Math.floor(Math.random()*range));
//     }
//     return array.filter(a=>a%2===0);
// };
// console.log(f(10,100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let f=(leng,range)=>{
//     let array=[];
//     for (let i = 0; i < leng; i++) {
//         array.push(Math.floor(Math.random()*range));
//     }
//     return array.map(value => value.toString())
// };
// console.log(f(10,100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let f=(mas,direction)=>{
//     if (direction==='>'){
//     return mas.sort((a,b)=>a-b);}
//     else if (direction==='<'){
//         return mas.sort((a,b)=>b-a);
//     }
// }
// console.log(f([1,5,77,12],'<'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let f=(arr)=>{
//    return arr.sort((a,b)=>b.monthDuration-a.monthDuration);
// }
// console.log(f(coursesAndDurationArray))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let f=(arr)=>{
//    return arr.filter(a=>a.monthDuration>5);
// }
// console.log(f(coursesAndDurationArray));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// let cutString=(str,n)=>{
//    let result=[];
//     for (let i = 0; i < str.length; i+=n) {
//         result.push(str.substr(i,n));
//     }
//     return result;
//
// }
// console.log(cutString('братишка',3));
