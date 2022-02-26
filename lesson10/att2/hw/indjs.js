// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

//МЕНТОРАМ: РАСКОМЕНТИРУЙТЕ СТАЙЛ И ХТМЛ ДО ПОСЛЕДНЕГО ЗАДАНИЯ

// let btn1=document.getElementById('btn1')
// let text=document.getElementById('text');
//
// // btn1.onclick=function () {
// //     text.style.display='none'
// // }
// btn1.addEventListener('click',btnClick);
// function btnClick() {
//     text.classList.toggle('hidden')
//     if (text.classList.contains('hidden')){
//         btn1.innerText='Показать элемент'
//     }else{
//         btn1.innerText='Скрыть элемент'
//     }
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn1=document.getElementById('btn1');
// btn1.onclick=function () {
//     btn1.style.display='none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let inp=document.getElementById('inp1');
// let btnage=document.getElementById('btn11');
// btnage.onclick=function () {
//     if (inp.value<18){
//         alert('pls exit')
//     }else {
//         alert('welcome')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu=document.getElementById('menulist')
//
//
// let menubtn=document.getElementById('menubtn');
// menubtn.addEventListener('click',btnClick)
// function btnClick() {
//     menu.classList.toggle('hidden')
//     if (menu.classList.contains('hidden')){
//         menubtn.innerHTML=`Показать меню <i class="fas fa-caret-down"></i>`
//     }else{
//         menubtn.innerHTML=`Скрыть меню <i class="fas fa-caret-up"></i>`
//     }
// }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arr=[  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'bubu', body:'lalalala'},
    {title : 'gggg', body:'olololol'},
    {title : 'cccc', body:'dudududu'}];
for (const arrElement of arr) {
    let comment=document.createElement('div');
    comment.classList.add('comment');
    let title=document.createElement('h2');
    title.innerHTML=arrElement.title
    title.classList.add('title');
    let body=document.createElement('p');
    body.innerHTML=arrElement.body
    body.classList.add('body');
   let btn= document.createElement('button')
    btn.innerText='Скрыть';
   btn.addEventListener('click',btnClick);
   function btnClick() {
       title.classList.toggle('hidden');
       body.classList.toggle('hidden');
       if (title.classList.contains('hidden')){
           btn.innerText='Показать'
       }else{
           btn.innerText='Скрыть'
       }
   }



    document.body.append(comment)
    comment.append(title,body,btn)
}
