// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.onclick=function (e) {
//     console.log('Class:' , e.target.className);
//     console.log('Id:' , e.target.id);
//     console.log('Tag:' , e.target.tagName);
//     console.log('Width:' , e.target.offsetWidth);
//     console.log('Height:' , e.target.offsetHeight);
//     console.log('_________________');
//
//
// b


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.addEventListener('click', function (event) {
//     let a = document.getElementsByClassName('popup')[0].classList.toggle('showpopup');
//
// })
// let b = document.createElement('div');
// let flag=true ;
// document.addEventListener('click', function (e) {
//
//
//     if (flag){
//         b.style.display='none';
//
//     } else {
//         b.style.display='block';
//         b.classList.add('ppop');
//         b.style.position = 'absolute';
//         b.style.top = '300px';
//         b.style.left = '700px';
//         b.style.background = 'black';
//         b.style.color = 'red';
//         b.style.fontSize = '35px';
//         document.body.append(b);
//         b.innerText = 'Class:' + e.target.className + ' ' + 'Id:' + e.target.id + ' ' + 'Tag:' + e.target.tagName + ' ' + 'Width:' + e.target.offsetWidth + ' ' + 'Height:' + e.target.offsetHeight;
//
//
//     }
//     flag=!flag;
// })


// -- взять массив пользователей
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
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let filter = document.forms.f1;
filter.onsubmit = function (e) {
    e.preventDefault();
    let deleter = document.getElementsByClassName('wrap')
    if (deleter.length) {
        document.body.removeChild(deleter[0])
    }

    let status = () => {
        let result;
        if (filter.status.checked === true) {
            result = usersWithAddress.filter(value => value.status === false)
        } else {
            result = usersWithAddress;
        }
        return result;
    }

    let age = () => {
        let result;
        if (filter.age.checked === true) {
            result = usersWithAddress.filter(value => value.age >= 29)
        } else {
            result = usersWithAddress;
        }
        return result;
    }

    let city = () => {
        let result;
        if (filter.city.checked === true) {
            result = usersWithAddress.filter(value => value.address.city === 'Kyiv')
        } else {
            result = usersWithAddress;
        }
        return result;
    }


    let finish = usersWithAddress.filter(obj => status().includes(obj) && age().includes(obj) && city().includes(obj));
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
            let h = document.createElement('h5');
            h.innerText = `${field}: ${element.address[field]}`
            block.appendChild(h)
        }
        tabl.append(block)
    }
    document.body.appendChild(tabl)

}













// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан