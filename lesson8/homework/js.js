
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText='rgrgrgr';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText='bubububub'

// -- змініть кожному елементу колір фону на червоний
rules.style.background='black';
content.style.background='black';

// -- змініть кожному елементу колір тексту на синій
rules.style.color='blue';
content.style.color='blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let target=document.getElementsByClassName('fc_rules');
for (const targetElement of target) {
    console.log(targetElement);
    targetElement.style.color='red';
}


