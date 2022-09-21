const btnPlay = $('.btn-play')
const btnPause = $('.btn-pause')
const audio = $('#audio')
const audioKeyboard = $('#audio-keyboard')
const navbarBtn = $('.navbarBtn')
const btnMusics = $$('.musics-btn')
const keyboardChange = $('.keyboard-sound')
const musicVolume = $('.music-volume')
audioKeyboard.src = 'access/music/keyboard/keyboard.mp3'
audioKeyboard.loop = true
audioKeyboard.load()

audio.src = 'access/music/Chill/mixichill.mp3'
const btnPlayPause = $$('.btn')
const app = {
    _isplaying: false,
    handleEvent: function() {
        // Click play and pause
        btnPlayPause.forEach(btn => {
            btn.onclick = function () {
                if (btnPlay.classList.contains('active')) {
                    btnPlay.classList.remove('active')
                    btnPause.classList.add('active')
                    audio.play()
                    _isplaying = true
                } else {
                    btnPlay.classList.add('active')
                    btnPause.classList.remove('active') 
                    audio.pause()
                    _isplaying = false
                }
            }
        })
        
        // Click show and hide navbar
        navbarBtn.onclick = function () {
            if ($('.navbar-content').classList.contains('active')) {
                $('.navbar-content').classList.remove('active')
            } else {
                $('.navbar-content').classList.add('active')
            }
        }
        // Click focus Btn
        btnMusics.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                btnMusics.forEach((btn2) => {
                    btn2.classList.remove('activeMusics')
                })
                btn.classList.add('activeMusics')
                if (index == 0) {
                    audio.src = 'access/music/Sleep/sleep.mp3'
                } else if (index == 1) {
                    audio.src = 'access/music/Study/study.mp3'
                } else if (index == 2) {
                    audio.src = 'access/music/Chill/mixichill.mp3'
                }
                if (_isplaying) {
                    audio.play()
                } else {
                    audio.pause()
                }
            })
        })
        // Set volume music
        musicVolume.onchange = () => {
            audio.volume = musicVolume.value
        }

        // Set keyboard sound effect
        keyboardChange.onchange = () => {
            audioKeyboard.volume = keyboardChange.value
            if (keyboardChange.value > 0) {
                audioKeyboard.play()
            } else {
                audioKeyboard.pause()
            }
        }

    },
    start: function() {
        this.handleEvent()

    }
}
app.start()