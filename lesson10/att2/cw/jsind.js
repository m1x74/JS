// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1=document.forms.form1;
// let form2=document.forms.form2;
// let btn=document.getElementById('btn1');
// btn.onclick=function () {
//     console.log(form1.inp1.value+' '+form1.inp2.value);
//     console.log(form2.inp3.value+' '+form2.inp4.value);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let form=document.forms.formtable;
// let btn=document.getElementById('btn2');
//
// btn.addEventListener('click',function () {
//     let table=document.createElement('table')
//     table.style.border='2px solid black';
//     document.body.append(table)
//     let tr=form.tr.value;
//     let td=form.td.value;
//     for (let i = 0; i < tr; i++) {
//         let tr=document.createElement('tr')
//         tr.style.border='1px solid black'
//         for (let j = 0; j < td; j++) {
//             let td=document.createElement('td')
//             td.style.border='1px solid black'
//             td.innerText=form.text.value
//             table.append(tr)
//             tr.appendChild(td)
//         }
//     }
// })
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr=['fuck','shit','bitch','asshole']

// let form =document.forms.wordform;
// let btn=document.getElementById('btn3')
// btn.onclick=function () {
//     let flag=0;
//     for (let i = 0; i <arr.length ; i++) {
//         let inp=form.word.value;
//         if (inp.includes(arr[i])){
//             flag=1;
//         }
//
//     }
//     if (flag===0){
//         console.log(form.word.value)
//     }else {
//         alert('WARNING')
//     }
//
//
//
// }







