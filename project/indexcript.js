fetch(' https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((json)=>{
    let wrap=document.createElement("div");
    wrap.classList.add('wrap');
    document.body.append(wrap);
    for (const user of json) {
        let userblock=document.createElement('div');
        userblock.classList.add('user');
        userblock.innerHTML= `<h2>${user.id}) ${user.name}</h2>`;
        let usbtn=document.createElement('button');
        usbtn.innerText='Details';
        usbtn.onclick=function () {
            localStorage.setItem('user',JSON.stringify(user))
            location.href='user-details.html';
        }

        wrap.append(userblock)
        userblock.append(usbtn)
    }
})