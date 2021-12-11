// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()})
    .then((json)=> {
        console.log(json)
        for (const post of json) {
           let post = document.createElement('div');
           let userid=document.createElement('h1');
           userid.innerText=`post.title= ${post.title}`
           let id=document.createElement('h2');
           let title=document.createElement('p');



            document.body.append(post);
            post.append(userid,id,title);

        }
        }



    );




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments