// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
const left=document.querySelector('.btn-left');
const right=document.querySelector('.right');
const slider=document.querySelector('.carousel_slide');
const images=document.querySelectorAll('.carousel_slide img');
let counter =0;
const stepSize=images[0].clientWidth;

slider.style.transform= 'translatex('+ `${-stepSize*counter}px)`;
right.addEventListener('click',()=>{
    if (counter>=images.length-1) counter=-1;
    slider.classList.add('transformAnim')
    counter++;
    slider.style.transform= 'translatex('+ `${-stepSize*counter}px)`;
})
left.addEventListener('click',()=>{
    if (counter<=0) counter=images.length;
    slider.classList.add('transformAnim')
    counter--;
    slider.style.transform= 'translatex('+ `${-stepSize*counter}px)`;
})
