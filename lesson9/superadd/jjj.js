
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let a=[];
// for (const aElement of users) {
//     a.push(aElement.address);
//
// }
// console.log(a);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// let a=document.createElement('div');
// for (const user of users) {
//     let b=document.createElement('div');
//
//     b.innerText=user.name+' '+ user.age+' '+user.status+' '+user.address.city+' '+user.address.country+' '+user.address.street+' '+user.address.houseNumber
//
//     a.appendChild(b)
//
//
// }
// document.body.append(a);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let a=document.createElement('div');
// for (const user of users) {
//     let b=document.createElement('div');
//     let name=document.createElement('h1');
//     name.innerHTML=user.name;
//     let age=document.createElement('h2');
//     age.innerHTML=user.age;
//     let status=document.createElement('p');
//     status.innerHTML=user.status;
//     let address=document.createElement('div');
//     address.innerHTML=user.address.city+' '+user.address.country+' '+user.address.street+' '+user.address.houseNumber;
//
//
//
//     b.appendChild(name);
//     b.appendChild(age);
//     b.appendChild(status);
//     b.appendChild(address);
//     a.appendChild(b)
// }
// document.body.append(a);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let a=document.createElement('div');
// for (const user of users) {
//     let b=document.createElement('div');
//     b.style.marginLeft='70px';
//     b.style.marginTop='50px';
//     let name=document.createElement('h1');
//     name.innerHTML=user.name;
//     let age=document.createElement('h2');
//     age.innerHTML=user.age;
//     let status=document.createElement('p');
//     status.innerHTML=user.status;
//     let add=document.createElement('p');
//     add.innerHTML='Address:';
//     let address=document.createElement('ul');
//     let city=document.createElement('li');
//     city.innerHTML=user.address.city;
//     let country=document.createElement('li');
//     country.innerHTML=user.address.country;
//     let street=document.createElement('li');
//     street.innerHTML=user.address.street;
//     let houseNumber=document.createElement('li');
//     houseNumber.innerHTML=user.address.houseNumber;
//
//
//
//     address.appendChild(city);
//     address.appendChild(country);
//     address.appendChild(street);
//     address.appendChild(houseNumber);
//     b.appendChild(name);
//     b.appendChild(age);
//     b.appendChild(status);
//     b.appendChild(add)
//     b.appendChild(address);
//     a.appendChild(b)
//
// }
// document.body.append(a);

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     // Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let b=document.getElementsByTagName('h2');
// let ul=document.createElement('ul')
// for (const bElement of b) {
//     let li=document.createElement('li');
//     li.innerHTML=bElement.innerText;
//     ul.appendChild(li)
//
// }
//
// content.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
for (const rule of rules) {
    let rls=document.createElement('div');
    rls.style.color='red'
    rls.classList.add('rules');
    let title=document.createElement('h1');
    title.innerHTML=rule.title;
    let body=document.createElement('p');
    body.innerHTML=rule.body;


    rls.append(title);
    rls.append(body);

    document.body.append(rls);
}






