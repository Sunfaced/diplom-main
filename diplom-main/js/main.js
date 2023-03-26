'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tab-item')
    const tabItems = document.querySelectorAll('.tab-content')
    if (tabs.length && tabItems.length) {
        function tabClick() {
            let currentTabIndex = 0;
            tabs.forEach((item, index) => {
                if ( item === this ) {
                    currentTabIndex = index
                    item.classList.add('current')
                } else{
                    item.classList.remove('current')
                }
            })
            hideAllContent()
            showCurrentContent(currentTabIndex)
        }
        function hideAllContent() {
            tabItems.forEach(item => {
                item.style.display = 'none'
            })
        }
        function showCurrentContent(i = 0) {
            tabItems[i].style.display = 'block'
        }
        hideAllContent()
        showCurrentContent()
        tabs.forEach(item => {
            item.addEventListener('click', tabClick)
        })
    }
    

    //Начало слайдера
    //Получаем стрелки и блоки с контентом (верхний слайдер)
    
    const slides1 = document.querySelectorAll('.swiper-slide-1');
    const prev1 = document.querySelector('.ec-button-prev');
    const next1 = document.querySelector('.ec-button-next');

    //Получаем стрелки и блоки с контентом (нижний слайдер)
    const slides = document.querySelectorAll('.swiper-slide');
    const prev = document.querySelector('.tc-button-prev');
    const next = document.querySelector('.tc-button-next');
    if(slides.length && slides1.length){
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
    //Конец слайдера
    }

    //Начало таймера
    const count = document.querySelector('.countdown')
    const timeEnd = 'May 15, 2025';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
        
            days = Math.floor(t/(1000*60*60*24)),
            hours = Math.floor((t/(1000*60*60))%24),
            minutes = Math.floor((t/1000/60)%60),
            seconds = Math.floor((t/1000)%60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
            days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
        }
    }
    if(count){
        setClock('.countdown', timeEnd);   
    }
    
    //Конец таймера
});

    
    
