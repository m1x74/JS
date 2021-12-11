// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then((result)=>{return result.json()})
.then(result=>{
    let wrapper=document.createElement('div');
    wrapper.style.marginLeft='20px';
    wrapper.classList.add('wrap');
    document.body.append(wrapper);
    console.log(result)
    for (const post of result) {
        let postdiv=document.createElement('div');
        postdiv.classList.add('post');
           let id=document.createElement('h2');
           id.innerHTML=`ID - ${post.id}`;
           let btn=document.createElement('button');
           btn.innerHTML='Комментарии';
           let comwrap=document.createElement('div');
            comwrap.classList.add('comwrap')
            postdiv.append(comwrap)
            let title=document.createElement('p');
            title.innerText=post.title;
            let body=document.createElement('p');
            body.innerText=post.body;
             if (comwrap.className==='comwrap') {
            comwrap.style.display = 'none';  }
            btn.onclick=()=>{
                comwrap.classList.toggle('block');
                if (comwrap.className==='comwrap block'){
                    comwrap.style.display = 'block';
                }
                else {
                    comwrap.style.display = 'none';
                }

            }


            comwrap.append(title,body);
            postdiv.append(id,btn,comwrap)
        wrapper.append(postdiv);


    }


})