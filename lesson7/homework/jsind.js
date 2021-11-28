// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let array = [
    user1 = new User(1, 'Sviat', 'Lolov', '213rr312@gmail.com', '380950000385'),
    user2 = new User(9, 'Oleg', 'Kekov', '2131231w2@gmail.com', '380950000375'),
    user3 = new User(6, 'Sergiy', 'Orov', '213f12312@gmail.com', '380950000105'),
    user4 = new User(5, 'Max', 'Roflov', '213123a12@gmail.com', '380950000395'),
    user5 = new User(7, 'John', 'Chocker', '21312312@gmail.com', '380950000605'),
    user6 = new User(3, 'Derrick', 'Rose', '212312@gmail.com', '380950000304'),
    user7 = new User(4, 'Gosha', 'Mose', '21312312nn2@gmail.com', '380950002305'),
    user8 = new User(10, 'Olena', 'Molena', '212312@gmail.com', '380950000301'),
    user9 = new User(2, 'Mariya', 'Mriya', '2112312@gmail.com', '380950000315'),
    user10 = new User(8, 'Solomiya', 'Krasiva', '2131g312@gmail.com', '380950090305')
];
// console.log(array)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterid = array.filter(item =>!(item.id%2))
// console.log(filterid)



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort= array.sort((a,b)=>a.id-b.id);
// console.log(userSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor( id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
//
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let array = [
//     user1 = new Client(1, 'Sviat', 'Lolov', '213rr312@gmail.com', '380950000385',['ball','tape','game']),
//     user2 = new Client(9, 'Oleg', 'Kekov', '2131231w2@gmail.com', '380950000375',['ball','tape']),
//     user3 = new Client(6, 'Sergiy', 'Orov', '213f12312@gmail.com', '380950000105',['ball','tape']),
//     user4 = new Client(5, 'Max', 'Roflov', '213123a12@gmail.com', '380950000395',['ball','tape','cd','dvd']),
//     user5 = new Client(7, 'John', 'Chocker', '21312312@gmail.com', '380950000605',['ball','tape']),
//     user6 = new Client(3, 'Derrick', 'Rose', '212312@gmail.com', '380950000304',['ball','tape']),
//     user7 = new Client(4, 'Gosha', 'Mose', '21312312nn2@gmail.com', '380950002305',['ball']),
//     user8 = new Client(10, 'Olena', 'Molena', '212312@gmail.com', '380950000301',['ball','tape','money','phone','earpods']),
//     user9 = new Client(2, 'Mariya', 'Mriya', '2112312@gmail.com', '380950000315',['ball','tape']),
//     user10 = new Client(8, 'Solomiya', 'Krasiva', '2131g312@gmail.com', '380950090305',['tape'])
// ];
// console.log(array)
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let userSort=array.sort((a,b)=>a.order.length-b.order.length);
// console.log(userSort)

