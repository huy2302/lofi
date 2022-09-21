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
    if (i % 2 == 0) {
        if ($('.bg-video__day').classList.contains('active')) {
            switchVideo()
            $('.bg-video__night').classList.add('active')
        } else if ($('.bg-video__rainyday').classList.contains('active')){
            switchVideo()
            $('.bg-video__rainynight').classList.add('active')
        }
    } else if (i % 2 == 1) {
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
        countRain++;
    } else if (countRain % 2 != 0){
        if ($('.bg-video__rainyday').classList.contains('active')) {
            switchVideo()
            $('.bg-video__day').classList.add('active')
        } else if ($('.bg-video__rainynight').classList.contains('active')){
            switchVideo()
            $('.bg-video__night').classList.add('active')
        }
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

