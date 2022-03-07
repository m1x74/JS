// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.onclick=function (e) {
//     console.log('Class:',e.target.className);
//     console.log('Tag:',e.target.tagName);
//     console.log('ID:',e.target.id);
//     console.log('Width:',e.target.offsetWidth);
//     console.log('Height:',e.target.offsetHeight);
//     console.log('----------------')
//
// }
    // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    // При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
    // Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let flag=true
// let a=document.createElement('div');
// document.addEventListener('click',function (e) {
//     if (flag){
//         a.style.display='none'
//     }
//     else{
//         a.innerHTML='Class:' + e.target.className + ' '+ 'Tag:'+ e.target.tagName +' '+'ID:'+e.target.id+ ' '+ 'Width:'+e.target.offsetWidth+' '+ 'Height:'+ e.target.offsetHeight
//         a.style.display='block';
//
//         document.body.append(a)
//     }
//     flag=!flag
//
//
// })

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого гор
let filter=document.forms.f1;
filter.onsubmit=function (e) {
    e.preventDefault();
    let deleter=document.getElementsByClassName('wrap');
    if (deleter.length){
        document.body.removeChild(deleter[0])
    }
    let status=()=>{
        let result;
        if (filter.status.checked){
            result=usersWithAddress.filter(val=>val.status===false)
        }
        else {
            result=usersWithAddress;
        }
        return result;
    }
    let age=()=>{
        let result;
        if (filter.age.checked){
            result=usersWithAddress.filter(val=>val.age >= 29)
        }else{
            result=usersWithAddress;
        }
        return result
    }
    let town=()=>{
        let result;
        if (filter.city.checked){
            result=usersWithAddress.filter(val=>val.address.city==='Kyiv')
        }else{
            result=usersWithAddress
        }
        return result
    }
    let finish =usersWithAddress.filter(obj=>status().includes(obj) && age().includes(obj) && town().includes(obj))
    let tabl = document.createElement('div');
    tabl.classList.add('wrap')
    for (const element of finish) {
        let block = document.createElement('div')
        for (const elementField in element) {
            if (elementField !== 'address') {
                let h = document.createElement('h4');
                h.innerText = `${elementField}: ${element[elementField]}`
                block.appendChild(h)
            }
        }
        for (const field in element.address) {
            let h = document.createElement('h4');
            h.innerText = `${field}: ${element.address[field]}`
            block.appendChild(h)
        }
        tabl.append(block)`1`
    }
    document.body.appendChild(tabl)









}
