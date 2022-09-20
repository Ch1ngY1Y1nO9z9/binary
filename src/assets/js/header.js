const htmlBody = document.querySelector('body');
const burger = document.querySelector(".burger");
const menu = document.querySelector('.menu');
const menu_botton = document.querySelectorAll('.collapse-menu');
const menu_modal = document.querySelector('.menu-modal');
const menu_link_button = document.querySelector('.menu-link-button');
const btt = document.querySelector('.btt');

burger.addEventListener("click", () => {
    burger.classList.toggle("on")
    menu.classList.toggle('on')
    htmlBody.classList.toggle('overflow-hidden')

    if (!burger.classList.contains('on')) {
        removeActive()
    }
})

function removeActive() {
    menu_botton.forEach(e => {
        e.classList.remove('active')
    })
    menu_modal.classList.remove('active');
}

menu_botton.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('active')) {
            e.classList.remove('active')
            menu_modal.classList.remove('active');
        } else {
            menu_botton.forEach(e => e.classList.remove('active'))
            e.classList.toggle('active')
            menu_modal.classList.add('active');
        }
    })
})

menu_link_button.addEventListener('click', () => {
    removeActive();
})



const notify_icon = document.querySelector('.notify');
const notify_list = document.querySelector('.h-notify-list');
const detail_list = document.querySelector('.h-notify-list .notify-detail')
const check_detail_btn = document.querySelectorAll('.notify-center .right button')


notify_icon.addEventListener('click', e=> {
    if(notify_icon.classList.contains('active')){
        notify_icon.classList.remove('active')
        notify_list.classList.remove('active')    
        detail_list.classList.remove('active')    
    }else{
        notify_icon.classList.add('active')
        notify_list.classList.add('active')    
    }
})

check_detail_btn.forEach( btn => {
    btn.addEventListener('click', () => {
        detail_list.classList.add('active');
    })
})
