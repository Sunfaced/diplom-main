'use strict';

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
    setClock('.countdown', timeEnd);    

