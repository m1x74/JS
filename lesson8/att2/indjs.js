// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
// let array=[];
// let f=()=>{
//     let wrap=document.getElementById('wrap');
//
// }
// f()

let a=[]
console.log(a);
let f=(rules)=>{
    if (rules.children.length){
        for (const rule of rules.children) {
           f(rule)

        }
        if (rules.className.includes(' ')){
            let c=rules.className.split(' ');
            a.push(c[1])
        }
    }
}

f(document.body);