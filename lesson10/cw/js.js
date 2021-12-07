// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let form1=document.createElement('form');
// let form2=document.createElement('form');
// form1.setAttribute('name','form1');
// form2.setAttribute('name','form2');
// let input1=document.createElement('input');
// input1.setAttribute('name','input1');
// let input2=document.createElement('input');
// input2.setAttribute('name','input2');
// let input3=document.createElement('input');
// input3.setAttribute('name','input3');
// let input4=document.createElement('input');
// input4.setAttribute('name','input4');
// let but=document.createElement('button');
// but.innerText='ПИШИ СЮДА';
// but.addEventListener('click',function () {
//     console.log(document.forms.form1.input1.value);
//         console.log(document.forms.form1.input2.value);
//         console.log(document.forms.form2.input3.value);
//         console.log(document.forms.form2.input4.value);
// })
//
//
//
//
//
//
//
// div1.appendChild(form1);
// div2.appendChild(form2);
// form1.append(input1,input2);
// form2.append(input3,input4);
//
//
//
// document.body.appendChild(div1);
// document.body.appendChild(div2);
// document.body.appendChild(but);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let input1= document.createElement('input');
// let input2= document.createElement('input');
// let input3= document.createElement('input');
// let button = document.createElement('button');
// button.innerText='СОЗДАТЬ ТАБЛИЦУ';
//
//
// button.addEventListener('click',function () {
//     let ryad=input1.value;
//     let yach=input2.value;
//     let text=input3.value;
//
//     function tablecr(ryad,yach,t) {
//         let table=document.createElement('table');
//         table.style.border='solid black 1 px';
//         let divtable=document.createElement('div')
//         divtable.appendChild(table);
//         document.body.append(divtable);
//         for (let i = 0; i < ryad ;i++) {
//             let ryad=document.createElement('tr');
//             ryad.style.border='1px solid red';
//
//             for (let j = 0; j <yach; j++) {
//                 let yach=document.createElement('td');
//                 yach.style.border='1px solid orange';
//                 yach.innerText=`${t}`;
//                 table.appendChild(ryad);
//                 ryad.appendChild(yach);
//
//             }
//         }
//     }
//     tablecr(ryad,yach,text);
// })
//
//
//
//
// document.body.append(input1,input2,input3,button);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let array = ['fuck', 'shit', 'damn', 'fag', 'bitch'];
// let inp = document.createElement('input');
// let but = document.createElement('button');
// but.innerText = 'Проверить слово';
// inp.type = 'text'
// document.body.append(inp, but);
// but.addEventListener('click',function () {
//     for (const string of array) {
//         if (inp.value === string) {
//             alert('Фу как некультурно');
//             return
//         } else if (inp.value) {
//             alert('всё норм');
//             return;
//         }
//
//     }
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let array = ['fuck', 'shit', 'damn', 'fag', 'bitch'];
let inp = document.createElement('input');
let but = document.createElement('button');
but.innerText = 'Проверить слово';
inp.type = 'text';
document.body.append(inp, but);
but.addEventListener('click',function () {
    let flag = 0
    for (let i = 0; i < array.length; i++) {
        let value = inp.value;

        if (value.includes(array[i])) {
            flag=1;}
    }
        if (flag===0){
            alert('GOOD')
        }
        else {
           alert('Не ругайся') ;
        }




    })


