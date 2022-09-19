const btnPlay = $('.btn-play')
const btnPause = $('.btn-pause')
const audio = $('#audio')
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
    },
    start: function() {
        this.handleEvent()
    }
}
app.start()