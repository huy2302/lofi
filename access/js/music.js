const btnPlay = $('.btn-play')
const btnPause = $('.btn-pause')
const audio = $('#audio')
const navbarbtn = $('.navbarBtn')

console.log(navbarbtn)

audio.src = 'access/music/mixichill.mp3'
const btnPlayPause = $$('.btn')
const app = {
    handleEvent: function() {
        // Click play and pause
        btnPlayPause.forEach(btn => {
            btn.onclick = function () {
                if (btnPlay.classList.contains('active')) {
                    btnPlay.classList.remove('active')
                    btnPause.classList.add('active')
                    audio.play()
                } else {
                    btnPlay.classList.add('active')
                    btnPause.classList.remove('active') 
                    audio.pause()
                }
            }
        })
        // Click show and hide navbar
        navbarbtn.onclick = function () {
            if ($('.navbar-content').classList.contains('active')) {
                $('.navbar-content').classList.remove('active')
            } else {
                $('.navbar-content').classList.add('active')
            }
        }
    },
    start: function() {
        this.handleEvent()

    }
}
app.start()