const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnConvert = $('.switch')
var i = 2
const btn = $('.switch-btn')
btn.onclick = function () {
    if (i % 2 == 0) {
        $('.bg-video__night').classList.add('active')
        $('.bg-video__day').classList.remove('active')
    } else if (i % 2 == 1) {
        $('.bg-video__night').classList.remove('active')
        $('.bg-video__day').classList.add('active')
    }
    i += 0.5    
}

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

