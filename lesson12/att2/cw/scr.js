// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then((json)=>{
    let wrap=document.createElement('div');
    wrap.classList.add('wrap');
    document.body.append(wrap)
    for (const post of json) {

        let block =document.createElement('div');
        block.classList.add('block')
        block.innerHTML=`<h2>USER - ${post.userId}</h2>
                        <h3>ID - ${post.id}</h3>
                        <h4>Title - ${post.title}</h4>`
        let com=document.createElement('p');
        com.classList.add('com')
        com.innerHTML=post.body
        let btn=document.createElement('button');
        btn.innerText='Показать комментарий';
        com.style.display='none';
        btn.addEventListener('click',function () {
            com.classList.toggle('show')
           if (com.className.includes('show')){
               com.style.display='block';
               btn.innerText='Скрыть комментарий';
           }else {
               com.style.display='none';
               btn.innerText='Показать комментарий';
           }
        })





        wrap.append(block);
        block.append(com,btn);
    }
})