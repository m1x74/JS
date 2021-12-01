// Все робити за допомоги js.
// - створити блок,
// let a=document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// a.classList.add('wrap');
// a.classList.add('collapse');
// a.classList.add('alpha');
// a.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// a.style.background='silver';
// a.style.color='red';
// a.style.fontSize='15px';
// // - додати цей блок в body.
// document.body.append(a)
// // - клонувати його повністю, та додати клон в body.
// let aClone=a.cloneNode(true);
// document.body.append(aClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let mas=['Main','Products','About us','Contacts'];
// let b=document.getElementsByClassName('menu')[0];
// for (const item of mas) {
//     let li=document.createElement('li');
//     li.innerText=item;
//    b.appendChild(li);
// }

// Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let a=document.createElement('div');
//     a.innerHTML=item.title+ ' - ' +item.monthDuration;
//     document.body.append(a)
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let a=document.createElement('div');
    a.classList.add('item');
    let b=document.createElement('h1');
    b.classList.add('heading');
   let c=document.createElement('p');
   c.classList.add('description')
    b.innerText=item.title;
   c.innerText=item.monthDuration;


    a.appendChild(b);
    a.appendChild(c);
    document.body.append(a);

}
