// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name=document.form.name;
let age=document.form.age;
let btn=document.getElementById('btn');
let func=(userName,userAge)=>{
    let object={user:userName,age:userAge};
    localStorage.setItem('key',JSON.stringify(object));
};
btn.onclick=function () {
    func(name.value,age.value);
}




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let btn1=document.getElementById('btncar');
let volume=document.form1.volume;
let model=document.form1.model;
let type=document.form1.type;

let a=(carModel,carType,carVolume)=>{
    let array=JSON.parse(localStorage.getItem('guest')) || [];
    array.push({carModel,carType,carVolume});
    localStorage.setItem('guest',JSON.stringify(array));
}
btn1.onclick=(f)=>{
    a(model.value,type.value,volume.value);
}

