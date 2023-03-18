
// const showModal = () => {
//     $('.modal').classList.remove('modal-hide')
//     // document.getElementById('modal').style.transition = 'showLoginModal 0.3s cubic-bezier(0.71, 0.12, 1, 1)'
// }
var modalClose
const showModal = () => {
    if ($('#modal').classList.contains('modal-hide')) {
        $('#modal').classList.remove('modal-hide')
    } else {
        $('#modal').classList.add('modal-hide')
    }
}

const showSignUp = () => {
    $('#modal').classList.add('modal-hide')
    $('#modal-signup').classList.remove('modal-hide')
}

const showLogIn = () => {
    $('#modal').classList.remove('modal-hide')
    $('#modal-signup').classList.add('modal-hide')
}

modalCloses = $$('.modal-close')
console.log(modalCloses)
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        $('#modal').classList.add('modal-hide')
        $('#modal-signup').classList.add('modal-hide')
    })
})