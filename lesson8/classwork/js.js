// a) змінює id тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let id=document.getElementById('main_header').id='sep-2021';
console.log(id);

// b) робить шириниу елементу ul 400px
let ul=document.getElementsByTagName("ul");
for (const ulElement of ul) {
    ulElement.style.width='400px';
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let list = document.getElementsByClassName('linkList');
for (const listElement of list) {
    listElement.style.width='50%';

}
// d) отримує текст який зберігається в елементі з класом listElement2
let le2=document.getElementsByClassName('listElement2');
for (const le2Element of le2) {
    console.log(le2Element);

}


// e) отримує всі елементи li та змінює ім колір фону на сірий
let li=document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.background='gray';
    console.log(liElement)
}
// f) отримує всі елементи 'a' та додає їм клас anchor
// let a=document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a=document.getElementsByTagName('a');
// for (const aElement of a) {
//     if (aElement.innerText.includes('link3')){
//         aElement.style.width='40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a=document.getElementsByTagName('a');
// for (const aElement of a) {
//     if (aElement.innerText.includes('link1')){
//         aElement.classList.add('element_link1');
//     }else if (aElement.innerText.includes('link2')){
//         aElement.classList.add('element_link2');
//     }else {
//         aElement.classList.add('element_link3');
//     }
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// let color = prompt('введите цвет')
// for (const subElement of sub) {
//     subElement.style.background=color;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// let color = prompt('введите цвет');
// for (const subElement of sub) {
//    if (subElement.innerHTML.includes('content 2 segment')){
//        subElement.style.color=color;
//    }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let con=document.getElementsByClassName('content_1');
// let text=prompt('vvedite text')
// for (const conElement of con) {
//     conElement.innerHTML=text;
// }
// l) отримати елементи p та змінити їм padding на 20px
// let p =document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding='20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let a=document.getElementsByClassName('text2');
for (const aElement of a) {
    aElement.innerHTML='sep-2021'
}
