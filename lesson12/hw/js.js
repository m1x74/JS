// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response)=>{return response.json()})
//     .then((json)=> {
//         let wrapper=document.createElement('div');
//         wrapper.classList.add('wrap');
//         document.body.append(wrapper);
//         console.log(json)
//         for (const post of json) {
//            let postdiv = document.createElement('div');
//            postdiv.classList.add('post');
//            let userid=document.createElement('h1');
//            userid.innerText=`UserID - ${post.userId}`;
//            let id=document.createElement('h2');
//            id.innerHTML=`ID - ${post.id}`
//            let title=document.createElement('p');
//            title.innerText=post.title;
//             let body=document.createElement('p');
//             body.innerText=post.body;
//
//
//
//             wrapper.append(postdiv);
//             postdiv.append(userid,id,title,body);
//
//         }
//         }
//
//
//
//     );




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response)=>{return response.json()})
    .then((json)=> {
            let wrapper=document.createElement('div');
            wrapper.classList.add('wrap');
            document.body.append(wrapper);
            console.log(json)
            for (const post of json) {
                let postdiv = document.createElement('div');
                postdiv.classList.add('post');
                let postid=document.createElement('h1');
                postid.innerText=`UserID - ${post.postId}`;
                let id=document.createElement('h2');
                id.innerHTML=`ID - ${post.id}`
                let name=document.createElement('h3');
                name.innerText=post.name;
                let email=document.createElement('p');
                email.innerText=post.email;
                let body=document.createElement('p');
                body.innerText=post.body;



                wrapper.append(postdiv);
                postdiv.append(postid,id,name,email,body);

            }
        }



    );