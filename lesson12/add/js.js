// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточног
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then(response=>{
    let wrap=document.createElement('div');
    wrap.classList.add('wrap');
    wrap.style.display='flex';
    wrap.style.flexDirection='column';
    wrap.style.rowGap='20px';
    document.body.append(wrap);
    for (const user of response) {
        let userdiv=document.createElement('div');
        userdiv.style.marginLeft='30px'
        userdiv.innerHTML=`${user.id} ${user.name} - ${user.username}`
        wrap.append(userdiv);
        let btnuser=document.createElement('button');
        btnuser.style.marginLeft='20px'
        btnuser.innerText='Посты';
        btnuser.style.background='red';
        userdiv.append(btnuser);
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then((posts)=>{return posts.json()})
                .then(posts=>{
                    let wrappost=document.createElement('div');
                    wrappost.classList.add('post');
                    wrappost.style.margin='10px';

                    userdiv.append(wrappost);
                    for (const post of posts) {
                        if (post.userId===user.id){
                            let postdiv=document.createElement('div');
                            postdiv.style.margin='10px'
                            postdiv.innerHTML=`${post.id}) ${post.title}`;
                            wrappost.append(postdiv);
                            if (wrappost.className==='post'){
                                wrappost.style.display='none';

                            }
                            btnuser.onclick=()=>{
                                wrappost.classList.toggle('block');
                                if (wrappost.className==='post block'){
                                    wrappost.style.display='block';
                                }else {
                                    wrappost.style.display='none';




                                }
                            }

                            let btnpost=document.createElement('button');
                            btnpost.style.marginLeft='20px'
                            btnpost.innerText='Комментарии';
                            btnpost.style.background='cornflowerblue';
                            postdiv.append(btnpost);
                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then((comments)=>{return comments.json()})
                                .then(comments=>{
                                    let wrapcom=document.createElement('div');
                                    wrapcom.classList.add('com');
                                    wrapcom.style.margin='10px';
                                    wrappost.append(wrapcom);
                                    for (const comment of comments) {
                                        if (comment.postId===post.id){
                                            let comdiv=document.createElement('div');
                                            comdiv.style.margin='10px'
                                            comdiv.innerHTML=`${comment.id}) ${comment.email}: "${comment.body}"`;
                                            postdiv.append(wrapcom);
                                            wrapcom.append(comdiv);
                                            if (wrapcom.className==='com'){
                                                wrapcom.style.display='none';
                                            }
                                            btnpost.onclick=()=>{
                                                wrapcom.classList.toggle('block');
                                                if (wrapcom.className==='com block'){
                                                    wrapcom.style.display='block';
                                                }else {
                                                    wrapcom.style.display='none';
                                                }
                                            }




                                        }

                                    }


                                })

                        }




                    }
                })




    }
})