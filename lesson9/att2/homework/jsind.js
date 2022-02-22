// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let block=document.createElement("div");
// let block2=document.createElement("div");
// let block3=document.createElement("div");
// let block4=document.createElement("div");
// block.classList.add('wrap')
// block.style.background='red';
// block2.classList.add('collapse')
// block2.style.fontSize='14px';
// block3.classList.add('alpha')
// block3.style.color='blue';
// block4.classList.add('beta')
// block4.style.border='solid 4px red';
// let blockclon=block.cloneNode(true);
//
//
// document.body.append(block,block2,block3,block4,blockclon)










// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let arr= ['Main','Products','About us','Contacts'];
// let a=document.getElementsByClassName('menu')[0]
// for (const el of arr) {
//     let lii=document.createElement('li');
//     lii.innerText='bububu';
//     a.appendChild(lii)
// }









// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let a=document.createElement('div')
//     a.innerHTML=element.title+' - '+element.monthDuration;
//     document.body.append(a)
// }





//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let a=document.createElement('div');
//     a.classList.add('item');
//     let h=document.createElement('h1');
//     h.classList.add('heading');
//     h.innerText=element.title;
//     let p=document.createElement('p');
//     p.classList.add('description');
//     p.innerHTML=element.monthDuration;
//
//
//
//
//     a.appendChild(h);
//     a.appendChild(p);
//     document.body.append(a);
//
// }