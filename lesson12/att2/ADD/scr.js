// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let wrap = document.createElement('div')
wrap.classList.add('wrap');
document.body.append(wrap)
fetch('https://jsonplaceholder.typicode.com/users').then((responce)=>responce.json())
.then((json)=>{
    for (const jsonElement of json) {
        let user=document.createElement('div');
        user.classList.add('user');
        user.innerHTML=`<h2>${jsonElement.id}. ${jsonElement.name}</h2>
<h3>Nikname: ${jsonElement.username}</h3>
<h4>Email: ${jsonElement.email}</h4
<h4>Phone: ${jsonElement.phone}</h4>
<h4>Website: ${jsonElement.website}</h4>`;
        let company=document.createElement('div');
        company.innerHTML=
            `<p>Company Name: ${jsonElement.company.name}</p>
            <p>Phrase: ${jsonElement.company.catchPhrase}</p>
            <p>BS: ${jsonElement.company.bs}</p>`
        let adr=document.createElement('div');
        adr.classList.add('adr')
        let adrbtn=document.createElement('button');
        adrbtn.innerText='Check Address';
        adrbtn.classList.add('adrbtn');
        adr.innerHTML=`<h4>Adress: </h4>`;
        let address=document.createElement('div');
        address.classList.add('address');
        address.style.display='none'
        address.innerHTML=
            `<p>Street: ${jsonElement.address.street}</p>
            <p>Suite: ${jsonElement.address.suite}</p>
            <p>City: ${jsonElement.address.city}</p>
            <p>ZIP: ${jsonElement.address.zipcode}</p>`

        adrbtn.addEventListener('click',function () {
            address.classList.toggle('show');
            if (address.className.includes('show')){
                address.style.display='block';
                adrbtn.innerText='Hide Address';
            }else{
                address.style.display='none';
                adrbtn.innerText='Check Address';
            }
        })
        let pwb=document.createElement('div');
        pwb.classList.add('pwb')
        let p=document.createElement('h3');
        p.innerText='Posts: ';
        let pbtn=document.createElement('button');
        pbtn.innerText='Show Posts';
        pbtn.classList.add('pbtn')
        wrap.append(user);
        user.append(company,adr,address,pwb);
        pwb.append(p,pbtn)
        adr.append(adrbtn);
        fetch('https://jsonplaceholder.typicode.com/posts').then((check)=>check.json())
            .then((check)=>{
                let post=document.createElement('div');
                post.classList.add('post');
                user.append(post);
                for (const postElement of check) {
                    if (postElement.userId===jsonElement.id){
                        let postdiv=document.createElement('div');
                        postdiv.classList.add('posts');
                        post.style.display='none'
                        postdiv.style.margin='10px'
                        postdiv.innerHTML=`${postElement.id}) ${postElement.title}`;
                        post.append(postdiv);
                        pbtn.onclick=function () {
                            post.classList.toggle('show');
                            if (post.className.includes('show')){
                                post.style.display='block';
                                pbtn.innerText='Hide Posts';
                            }else{
                                post.style.display='none';
                                pbtn.innerText='Show Posts';
                            }
                        }
                        let combtn=document.createElement('button');
                        combtn.classList.add('combtn');
                        combtn.innerText='Show Comments';
                        postdiv.append(combtn);
                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then((comms)=>comms.json())
                            .then((comms)=>{
                                let wrapcom=document.createElement('div');
                                wrapcom.classList.add('com');
                                wrapcom.style.margin='10px';
                                postdiv.append(wrapcom);
                                for (const comment of comms) {
                                    if (comment.postId===postElement.id){
                                        let comdiv=document.createElement('div');
                                        comdiv.style.margin='10px'
                                        comdiv.innerHTML=`${comment.id}) ${comment.email}: "${comment.body}"`;
                                        postdiv.append(wrapcom);
                                        wrapcom.append(comdiv);
                                        if (wrapcom.className==='com'){
                                            wrapcom.style.display='none';
                                        }
                                        combtn.onclick=()=>{
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