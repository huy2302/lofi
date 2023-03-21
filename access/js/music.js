const btnPlay = $('.btn-play')
const btnPause = $('.btn-pause')
const audio = $('#audio')
const btnMusics = $$('.musics-btn')
const musicVolume = $('.music-volume')
const navbarBtn = $$('.navbarBtn')

const btnPrev = $('.btn-prev')
const btnNext = $('.btn-next')
// Loop audio Effect
const keyboardChange = $('.keyboard-sound')
const rainyChange = $('.rainy-sound')
const trafficChange = $('.traffic-sound')

const audioKeyboard = $('#audio-keyboard')
const audioRainy = $('#audio-rainy')
const audioTraffic = $('#audio-traffic')

audioKeyboard.src = 'access/music/keyboard/keyboard.mp3'
audioKeyboard.loop = true
audioKeyboard.load()

audioRainy.src = 'access/music/keyboard/rainy.mp3'
audioRainy.loop = true
audioRainy.load()
audioRainy.volume = 0.5

audioTraffic.src = 'access/music/keyboard/traffic2.mp3'
audioTraffic.loop = true
audioTraffic.load()

fetch("https://my-json-server.typicode.com/huy2302/databaseMusic/musics")
    .then((response) => response.json())
    .then((data) => {
        audio.src = `${data[Math.floor(Math.random() * data.length)].link}`

        const app = {
            _isplaying: false,
            index: 0,
            _id: 0,
            newId: 0,
            handleEvent: function () {
                const play = function () {
                    btnPlay.classList.remove('active')
                    btnPause.classList.add('active')
                    audio.play()
                    _isplaying = true
                }
                const pause = function () {
                    btnPlay.classList.add('active')
                    btnPause.classList.remove('active')
                    audio.pause()
                    _isplaying = false
                }
                // Click play and pause
                btnPlayPause.forEach(btn => {
                    btn.onclick = function () {
                        if (btnPlay.classList.contains('active')) {
                            play()
                        } else {
                            pause()
                        }
                    }
                })
                // auto next when song ended
                audio.onended = () => {
                    this._id += 1
                    audio.src = `${data[this._id].link}`
                    audio.play()
                }

                // Space button 
                document.addEventListener('keyup', (event) => {
                    if (event.code == 'Space' && btnPlay.classList.contains('active')) {
                        play()
                    } else if (event.code == 'Space' && btnPause.classList.contains('active')) {
                        pause()
                    }
                })


                // next and prev song
                btnNext.onclick = () => {
                    this._id = this.newId
                    this.newId = Math.floor(Math.random() * data.length)
                    console.log("id: " + this._id + " new id: " + this.newId)
                    audio.src = `${data[this.newId].link}`
                    if (_isplaying) {
                        audio.play()
                    } else {
                        audio.pause()
                    }
                }

                btnPrev.onclick = () => {
                    audio.src = `${data[this._id].link}`
                    console.log("id: " + this._id + " new id: " + this.newId)

                    if (_isplaying) {
                        audio.play()
                    } else {
                        audio.pause()
                    }
                }
                // Set volume music
                musicVolume.onchange = () => {
                    audio.volume = musicVolume.value
                    if (audio.volume == 0) {
                        btnMute.classList.remove('btnMuteActive')
                        btnHight.classList.add('btnMuteActive')
                    } else if (audio.volume > 0) {
                        btnMute.classList.add('btnMuteActive')
                        btnHight.classList.remove('btnMuteActive')
                    }
                }
                $('.btn-volume_reduce').onclick = function () {
                    if (audio.volume <= 1 && audio.volume >= 0) {
                        musicVolume.value -= 0.1
                        audio.volume = musicVolume.value
                    }
                    if (audio.volume <= 0) {
                        console.log(musicVolume.value)
                        btnMute.classList.remove('btnMuteActive')
                        btnHight.classList.add('btnMuteActive')
                    }
                }
                $('.btn-volume_increase').onclick = function () {
                    if (audio.volume == 0) {
                        btnMute.classList.add('btnMuteActive')
                        btnHight.classList.remove('btnMuteActive')
                    }
                    if (audio.volume <= 1 && audio.volume >= 0) {
                        audio.volume += 0.1
                        musicVolume.value = audio.volume
                    }
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
                        if ($('.bg-video__day').classList.contains('active')) {
                            switchVideo()
                            $('.bg-video__rainyday').classList.add('active')
                        } else if ($('.bg-video__night').classList.contains('active')) {
                            switchVideo()
                            $('.bg-video__rainynight').classList.add('active')
                        }
                        audioRainy.play()
                    } else {
                        if ($('.bg-video__rainyday').classList.contains('active')) {
                            switchVideo()
                            $('.bg-video__day').classList.add('active')
                        } else if ($('.bg-video__rainynight').classList.contains('active')) {
                            switchVideo()
                            $('.bg-video__night').classList.add('active')
                        }
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
                // header btn music
                const btnMute = $('.btn-mute')
                const btnHight = $('.btn-hight')
                var musicVolumeTemp = 0
                btnHight.onclick = function () {
                    btnMute.classList.remove('btnMuteActive')
                    btnHight.classList.add('btnMuteActive')
                    musicVolumeTemp = musicVolume.value
                    musicVolume.value = 0
                    audio.volume = musicVolume.value
                }
                btnMute.onclick = function () {
                    btnMute.classList.add('btnMuteActive')
                    btnHight.classList.remove('btnMuteActive')
                    musicVolume.value = musicVolumeTemp
                    audio.volume = musicVolume.value
                }

            },
            start: function () {
                this.handleEvent()
            }
        }
        audio.volume = 0.5
        app.start()
    });

    
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

// Click show and hide navbar
navbarBtn.forEach((btn, index) => {
    btn.onclick = function () {
        // index = 0 : Show navbar
        if (index == 0) {
            if ($('.navbar-content').classList.contains('active')) {
                $('.navbar-content').classList.remove('active')
            } else {
                $('.navbar-content').classList.add('active')
            }
        }
    }
})
// audio.src = 'access/music/Chill/mixichill.mp3'
const btnPlayPause = $$('.btn')
