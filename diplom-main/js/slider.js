'use strict';
//Получаем стрелки и блоки с контентом (верхний слайдер)
const slides1 = document.querySelectorAll('.swiper-slide-1');
const prev1 = document.querySelector('.ec-button-prev');
const next1 = document.querySelector('.ec-button-next');

//Получаем стрелки и блоки с контентом (нижний слайдер)
const slides = document.querySelectorAll('.swiper-slide');
const prev = document.querySelector('.tc-button-prev');
const next = document.querySelector('.tc-button-next');


let slideIndex1 = 1;
//Установка первого слайда (для верхнего и нижнего)
showSlides1(slideIndex1, slides1);
showSlides1(slideIndex1, slides);

function showSlides1(n, slider){
    if(n>slider.length){
        slideIndex1 = 1;
    }
    if(n<1){
        slideIndex1 = slider.length;
    }
    slider.forEach(item =>item.style.display = 'none')
    slider[slideIndex1 - 1].style.display = 'block';
}

function plusSlides1(n, slider){
    showSlides1(slideIndex1 +=n, slider)
}

prev1.addEventListener('click', ()=>{
    plusSlides1(-1, slides1)
})
next1.addEventListener('click', ()=>{
    plusSlides1(1, slides1)
})
prev.addEventListener('click', ()=>{
    plusSlides1(-1, slides)
})
next.addEventListener('click', ()=>{
    plusSlides1(1, slides)
})
