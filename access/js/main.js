const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const video = $$('.bg-video')
var i = 2
// Switch Btn Rainy of Dry
const btn = $('.switch-btn')
const switchVideo = function () {
    video.forEach((btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    })
}
// Switch video
btn.onclick = function () {
    if (i % 2 == 1) {
        if ($('.bg-video__day').classList.contains('active')) {
            switchVideo()
            $('.bg-video__night').classList.add('active')
        } else if ($('.bg-video__rainyday').classList.contains('active')){
            switchVideo()
            $('.bg-video__rainynight').classList.add('active')
        }
    } else if (i % 2 == 0) {
        if ( $('.bg-video__night').classList.contains('active')) {
            switchVideo()
            $('.bg-video__day').classList.add('active')
        } else if ($('.bg-video__rainynight').classList.contains('active')) {
            switchVideo()
            $('.bg-video__rainyday').classList.add('active')
        }
    }
    i += 0.5    
}
// Switch video Rainy
const btnRain = $('.btn-rains')
var countRain = 2
btnRain.onclick = function() {
    if (countRain % 2 == 0) {
        if ($('.bg-video__day').classList.contains('active')) {
            switchVideo()
            $('.bg-video__rainyday').classList.add('active')
        } else if ($('.bg-video__night').classList.contains('active')) {
            switchVideo()
            $('.bg-video__rainynight').classList.add('active')
        }
        audioRainy.play()
        rainyChange.value = 0.5
        countRain++;
    } else if (countRain % 2 != 0){
        if ($('.bg-video__rainyday').classList.contains('active')) {
            switchVideo()
            $('.bg-video__day').classList.add('active')
        } else if ($('.bg-video__rainynight').classList.contains('active')){
            switchVideo()
            $('.bg-video__night').classList.add('active')
        }
        audioRainy.pause()
        rainyChange.value = 0
        countRain++
    } 
}

// Click fullscreen
var elem = document.documentElement;
function isFullScreen() {
    return window.screenTop == 0 ? true : false;
}
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    } if (!isFullScreen()) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

// show and hide menu
const menu = document.querySelector('.menu_setting')
const showHideMenu = () => {
    if(menu.classList.contains('active-menu')) {
        menu.classList.remove('active-menu')
    } else {
        menu.classList.add('active-menu')
    }
}

// show and hide Menu
const hideMenu = () => {
    menu.classList.add('active-menu')
}
document.addEventListener('click', hideMenu)
document.querySelector('.btn-menu').addEventListener('click', function(event){
    event.stopPropagation()
})
menu.addEventListener('click', function(event){
    event.stopPropagation()
})
