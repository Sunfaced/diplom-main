'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tab-item')
    const tabItems = document.querySelectorAll('.tab-content')
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
});

    
    
