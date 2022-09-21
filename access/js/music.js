const btnPlay = $('.btn-play')
const btnPause = $('.btn-pause')
const audio = $('#audio')
const btnMusics = $$('.musics-btn')
const musicVolume = $('.music-volume')
const keyboardChange = $('.keyboard-sound')
const rainyChange = $('.rainy-sound')
const trafficChange = $('.traffic-sound')

const navbarBtn = $('.navbarBtn')
// Loop audio Effect
const audioKeyboard = $('#audio-keyboard')
const audioRainy = $('#audio-rainy')
const audioTraffic = $('#audio-traffic')

audioKeyboard.src = 'access/music/keyboard/keyboard.mp3'
audioKeyboard.loop = true
audioKeyboard.load()

audioRainy.src = 'access/music/keyboard/rainy.mp3'
audioRainy.loop = true
audioRainy.load()

audioTraffic.src = 'access/music/keyboard/traffic2.mp3'
audioTraffic.loop = true
audioTraffic.load()


audio.src = 'access/music/Chill/mixichill.mp3'
const btnPlayPause = $$('.btn')
const app = {
    _isplaying: false,
    handleEvent: function () {
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

        // Set rainy storm sound effect
        rainyChange.onchange = () => {
            audioRainy.volume = rainyChange.value
            if (rainyChange.value > 0) {
                audioRainy.play()
            } else {
                audioRainy.pause()
            }
        }

        // Set trafic sound effect
        trafficChange.onchange = () => {
            audioTraffic.volume = trafficChange.value
            if (trafficChange.value > 0) {
                audioTraffic.play()
            } else {
                audioTraffic.pause()
            }
        }

    },
    start: function () {
        this.handleEvent()

    }
}
app.start()