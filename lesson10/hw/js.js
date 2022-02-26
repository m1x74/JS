// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//



// let a= document.createElement('div');
// a.id='text';
// a.innerText='crufhrufhrhfurhfurf';
// let kn=document.createElement('button');
// kn.style.width='200px';
// kn.style.height='50px';
// kn.onclick=function () {
//     a.style.display='none'
// }
//
//
// document.body.append(a);
// document.body.append(kn);
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let kn=document.createElement('button');
// kn.style.width='200px';
// kn.style.height='50px';
// kn.onclick=function () {
//     kn.style.display='none'
// }
//
// document.body.append(kn);

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input=document.createElement('input');
// input.style.width='600px';
// input.style.height='200px';
// input.type='number';
// let but = document.createElement('button');
// but.style.width='600px';
// but.style.height='100px';
// but.style.marginLeft='100px';
// but.innerHTML='Проверить возраст';
// but.onclick=function () {
//     if (!input.value){
//         alert('Введите возраст')
//     }
//     else if (+input.value<18){
//         alert('Тебе сюда нельзя,ребенок');
//     } else {
//         alert('Проходи, мужчина');
//     }
// }
//
//
//
//
//
// document.body.append(input);
// document.body.append(but);

//
// - Создайте меню, которое раскрывается/сворачивается при клике
// let ul = document.createElement('ul');
// let n = document.createElement('h2');
// n.innerText='MENU'
// n.style.width='300px';
// n.style.height='30px';
// let div=document.createElement('div');
// div.classList.add('menu')
// let menu1 = document.createElement('li');
// menu1.innerText='Rabbit';
// let menu2 = document.createElement('li');
// menu2.innerText='Pie';
// let menu3 = document.createElement('li');
// menu3.innerText='Apple';
// let menu4 = document.createElement('li');
// menu4.innerText='Juice';
// n.onclick=function () {
//     div.classList.toggle('hidden');
//     if (div.className==='menu hidden'){
//         div.style.display='none';
//     }else {
//         div.style.display='block';
//     }
//
// }
//
//
// ul.appendChild(menu1);
// ul.appendChild(menu2);
// ul.appendChild(menu3);
// ul.appendChild(menu4);
// document.body.append(n);
// document.body.append(div);
// div.appendChild(ul);
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let arr=[
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'bubu', body:'lalalala'},
//     {title : 'gggg', body:'olololol'},
//     {title : 'cccc', body:'dudududu'}];
//
// for (const arrElement of arr) {
//     let a=document.createElement('div');
//     let h=document.createElement('h2');
//     let p=document.createElement('p');
//     p.classList.add('body')
//     h.innerText=arrElement.title;
//     p.innerText=arrElement.body;
//     let but=document.createElement('button');
//     but.style.width='100px';
//     but.style.height='30px';
//     but.onclick=function () {
//         p.classList.toggle('hidden');
//         if (p.className==='body hidden'){
//         p.style.display='none';
//     }else {
//         p.style.display='block';
//     }
//
//     }
//
//
//     a.appendChild(h);
//     a.appendChild(p);
//     a.appendChild(but)
//     document.body.append(a)
//
// }


