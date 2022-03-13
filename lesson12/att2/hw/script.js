// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch(' https://jsonplaceholder.typicode.com/posts').then((response) => {
//     return response.json()
// }).then((json) => {
//     let wrap =document.createElement('div');
//     wrap.classList.add('wrap')
//     document.body.append(wrap)
//     for (const post of json) {
//         let user = document.createElement('div');
//         user.classList.add('post');
//         user.innerHTML=`<h2>USER - ${post.userId}</h2>
//                         <h3>ID - ${post.id}</h3>
//                         <h4>Title - ${post.title}</h4>
//                         <p>"${post.body}"</p>`
//         wrap.append(user)
//     }
// })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then((response)=>response.json())
.then((json)=>{
    let wrap =document.createElement('div');
    wrap.classList.add('wrap')
    document.body.append(wrap)
    for (const post of json) {
        let user = document.createElement('div');
        user.classList.add('post');
        user.innerHTML=`<h2>Post - ${post.postId}</h2>
                        <h3>ID - ${post.id}</h3>
                        <h4>Name - ${post.name}</h4>
                        <h4>Email - ${post.email}</h4>
                        <p>"${post.body}"</p>`
        wrap.append(user)
    }
})