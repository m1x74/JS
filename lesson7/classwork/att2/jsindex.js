// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model,factory,year,speed,volume){
//     this.model=model;
//     this.factory=factory;
//     this.year=year;
//     this.speed=speed;
//     this.volume=volume;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     }
//     this.info=function (){
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey]!==`function`){
//                 console.log(`${argumentsKey}-${this[argumentsKey]}`)
//             }
//         }
//         }
//     this.increaseMaxSpeed=function (newSpeed){
//         this.speed=this.speed+newSpeed;
//     }
//     this.changeYear= function(newValue){
//         this.year=newValue;
//     }
//
//     this.addDriver= function (driver){
//         this.driver=driver;
//     }
//
// }
//  let camry = new Car('Camry', 'Toyota', 2021, 245,3);
//  console.log(camry);
//  camry.drive();
//  camry.info();
//  camry.increaseMaxSpeed(15);
//  camry.changeYear(1066);
//  camry.addDriver('Stas');
// console.log(camry)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// - (Те саме, тільки через клас)
// class Car{
//     constructor(model, factory, year, speed, volume) {
//         this.model = model;
//         this.factory = factory;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//         drive(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     }
//     info(){
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey]!==`function`){
//                 console.log(`${argumentsKey}-${this[argumentsKey]}`)
//             }
//         }
//         }
//     increaseMaxSpeed(newSpeed){
//         this.speed=this.speed+newSpeed;
//     }
//     changeYear(newValue){
//         this.year=newValue;
//     }
//
//     addDriver(driver){
//         this.driver=driver;
//     }
//
// }
//  let camry = new Car('Camry', 'Toyota', 2021, 245,3);
//  console.log(camry);
//  camry.drive();
//  camry.info();
//  camry.increaseMaxSpeed(15);
//  camry.changeYear(1066);
//  camry.addDriver('Stas');
// console.log(camry)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let array=[
    new Cinderella('Alina',18,33),
    new Cinderella('Mykola',68,46),
    new Cinderella('Masha',12,39),
    new Cinderella('Natasha',23,37),
    new Cinderella('Galya',45,40),
    new Cinderella('Nadya',13,41),
    new Cinderella('Lolik',17,35),
    new Cinderella('Bolik',21,36),
    new Cinderella('Pupa',22,33),
    new Cinderella('Lupa',27,32),
];
class Prince{
    constructor(name, age, find) {
        this.name = name;
        this.age = age;
        this.find = find;
    }
}
let prince= new Prince('Lex',35,36);
let wife=function (Cinderella,Prince){
    for (const cinderellaElement of array) {
        if (cinderellaElement.footsize===Prince.find){
            return `Your wife is ${cinderellaElement.name}`
        }

    }

}
console.log(array);
console.log(prince);
console.log(wife(array,prince));
let princess=array.find((size)=>size.footsize===prince.find);
console.log('Your wife is' + ' '+princess.name);