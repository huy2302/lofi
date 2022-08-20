const btnDay = document.querySelector('.btn-day');
const btnNight = document.querySelector('.btn-night');
const videoNight = document.querySelector('.bg-video__night');
const videoDay = document.querySelector('bg-video__day');

const btn = document.querySelector('.switch')


function convertDay() {
    if (i % 2 == 0) {
        videoNight.classList.add('show')
    } else if (i % 2 == 1) {
        videoNight.classList.remove('show')
    }
    i += 0.5
}
var i = 2
btn.addEventListener('click', convertDay)

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

