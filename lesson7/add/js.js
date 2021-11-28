// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// let member= [user=new User( 1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//     'Kulas Light',
//     'Apt. 556',
//     'Gwenborough',
//     '92998-3874',
//     '-37.3159',
//     '81.1496,',
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     'Romaguera-Crona',
//     'Multi-layered client-server neural-net',
//     'harness real-time e-markets')]
// function User(id,name,username,email,street,suite,city,zip,lat,lng,phone,website,compName,compPhr,compBs){
//     this.id=id;
//     this.name=name;
//     this.username=username;
//     this.email=email;
//     this.address= {str: street,suite: suite,city: city, zipcode: zip,geo:{lat: lat, lng: lng}};
//     this.phone=phone;
//     this.website=website;
//     this.company= {name: compName, catchPhrase: compPhr, bs: compBs};
//     }
//
// console.log(member);
// id: 1,
// name: 'Leanne Graham',
// username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function Tag(titleOfTag,action,attrs) {
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// }
// let title1 = "<a>";
// let action1 = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes1 = [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
// 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let title2 = "<div>";
// let action2 = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.";
// let atribytes2 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: "title", actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}];
// let title3 = "<h1>";
// let action3 = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. ";
// let atribytes3 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}];
// let title4 = "<span>";
// let action4 = "Тег <span> предназначен для определения строчных элементов документа. ";
// let atribytes4 = [
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: "hidden", actionOfAttr: 'Скрывает содержимое элемента от просмотра.'},
//     {titleOfAttr: "accesskey", actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     {titleOfAttr: "id", actionOfAttr: 'Указывает имя стилевого идентификатора.'}];
// let title5 = "<input>";
// let action5 = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let atribytes5 = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: "alt", actionOfAttr: 'Альтернативный текст для кнопки с изображением.'}];
// let title6 = "<form>";
// let action6 = "Тег <form> устанавливает форму на веб-странице. .";
// let atribytes6 = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//     {titleOfAttr: "autocomplete", actionOfAttr: 'Включает автозаполнение полей формы.'}];
// let title7 = "<option>";
// let action7 = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.";
// let atribytes7 = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: "label", actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: "selected", actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
//     {titleOfAttr: "value", actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}];
// let title8 = "<select>";
// let action8 = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let atribytes8 = [
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: "required", actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'}];
//
// let a = new Tag(title1,action1,atribytes1);
// console.log(a);
// let b= new Tag(title2,action2,atribytes2);
// console.log(b);
// let c= new Tag(title3,action3,atribytes3);
// console.log(c);
// let d= new Tag(title4,action4,atribytes4);
// console.log(d);
// let e= new Tag(title5,action5,atribytes5);
// console.log(e);
// let f= new Tag(title6,action6,atribytes6);
// console.log(f);
// let g= new Tag(title7,action7,atribytes7);
// console.log(g);
// let h= new Tag(title8,action8,atribytes8);
// console.log(h);