// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let a=[];
console.log(a)
function classes(rules){

    if (rules.children.length) {
    for (const rule of rules.children) {
        classes(rule)

    }
    if (rules.className.includes(' ')){
        a.push(rules.className)
    }

}

}
classes(document.body)
