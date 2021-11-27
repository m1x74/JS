// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, company, year, maxspeed, enginevolume){
//     this.model = model;
//     this.company = company;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginevolume = enginevolume;
// this.drive=function () {
//     console.log(`На ${this.model} їдемо зі швидкістю ${this.maxspeed} на годину`);
// }
//
// this.info=function (){
//     for (const key in this) {
//         if (typeof this[key]!=='function') console.log(`${key} - ${this[key]}`)
//     }
// };
// this.increaseMaxSpeed=function (newSpeed) {
//     this.maxspeed=this.maxspeed+newSpeed;
// };
// this.changeYear=function (newValue) {
//     this.year=newValue;
// };
// this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let elantra = new Car('Elantra', 'Hyundai', 2021, 203,2);
// console.log(elantra);
// elantra.drive();
// elantra.info();
// elantra.increaseMaxSpeed(20);
// elantra.drive();
// elantra.changeYear(2023);
// elantra.info();
// elantra.addDriver('Stas');
// console.log(elantra);

// - (Те саме, тільки через клас)
// class Car{
//     constructor(model, company, year, maxspeed, enginevolume) {
//         this.model = model;
//         this.company = company;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginevolume = enginevolume;
//     }
//     drive() {
//     console.log(`На ${this.model} їдемо зі швидкістю ${this.maxspeed} на годину`);
// }
//
// info(){
//     for (const key in this) {
//         console.log(`${key} - ${this[key]}`)
//     }
// };
// increaseMaxSpeed(newSpeed) {
//     this.maxspeed=this.maxspeed+newSpeed;
// };
// changeYear(newValue) {
//     this.year=newValue;
// };
// addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let elantra = new Car('Elantra', 'Hyundai', 2021, 203,2);
// console.log(elantra);
// elantra.drive();
// elantra.info();
// elantra.increaseMaxSpeed(20);
// elantra.drive();
// elantra.changeYear(2023);
// elantra.info();
// elantra.addDriver('Stas');
// console.log(elantra);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// class Cinderella{
//     constructor(name,age,footsize,) {
//         this.name=name;
//         this.age=age;
//         this.footsize=footsize;
//     }
// }
// let array=[
//     new Cinderella('Alina',18,36),
//     new Cinderella('Mykola',68,46),
//     new Cinderella('Masha',12,39),
//     new Cinderella('Natasha',23,37),
//     new Cinderella('Galya',45,40),
//     new Cinderella('Nadya',13,41),
//     new Cinderella('Lolik',17,35),
//     new Cinderella('Bolik',21,36),
//     new Cinderella('Pupa',22,33),
//     new Cinderella('Lupa',27,32),
// ];
// class Prince{
//     constructor(name,age,shoe) {
//         this.name=name;
//         this.age=age;
//         this.shoe=shoe;
//     }
// }
// let prince= new Prince('Oleg',35,40);
// let wife= (Cinderella,Prince)=>{
//     for (const cinderellaElement of array) {
//         if (cinderellaElement.footsize===Prince.shoe){
//             return `Your wife is ${cinderellaElement.name}`
//         }
//
//     }
// }
// console.log(array);
// console.log(prince);
// console.log(wife(array,prince));
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let princess=array.find((size)=>size.footsize===prince.shoe);
// console.log('Your wife is' + ' '+princess.name)
