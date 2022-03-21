// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let name=document.products.name;
let num=document.products.num;
let cost=document.products.cost;
let pic=document.products.pic;
let button=document.getElementById('but');
let save=(prname,prnum,prcost,prpic)=>{
    let array=JSON.parse(localStorage.getItem('favorite'))||[];
    array.push({prname,prnum,prcost,prpic})
    localStorage.setItem('favorite',JSON.stringify(array))
}
button.onclick=function () {
   save(name.value,num.value,cost.value,pic.value);
   location.reload()
}