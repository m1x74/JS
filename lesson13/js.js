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

let name=document.productName.prname;
let number=document.productName.number;
let price=document.productName.price;
let picture=document.productName.picture;

let btn=document.getElementById("btn");
let f='favorite';
let save=(name,number,price,picture)=>{
    let array=JSON.parse(localStorage.getItem(f)) || [];
    array.push({name,number,price,picture});
    localStorage.setItem(f,JSON.stringify(array));

};
btn.onclick=()=>{
    save(name.value,number.value,price.value,picture.value);
    location.reload();
}


