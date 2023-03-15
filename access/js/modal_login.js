
// const showModal = () => {
//     $('.modal').classList.remove('modal-hide')
//     // document.getElementById('modal').style.transition = 'showLoginModal 0.3s cubic-bezier(0.71, 0.12, 1, 1)'
// }
var modalClose
const showModal = () => {
    $('#two').innerHTML = `
    <div id="modal" class="modal">
        <div class="modal-container">
            <img class="modal-close" alt="" src="./access/img/close.svg">
            <img class="logo-img" src="./access/img/logo.0cbf9e63.gif" alt="">
            <h3>Welcome back!</h3>
            <h4>Log In to your account</h4>
            <form class="modal-login" action="" method="get">
                <div class="login-card">
                    <div class="ouline_input">
                        <input class="input" type="email" placeholder="Email" style=" border-radius: 10px 10px 0 0;">
                        <div></div>
                    </div>
                    <div class="div-outline"></div>
                    <div class="ouline_input">
                        <input class="input" type="password" placeholder="Password" style="border-radius: 0 0 10px 10px;">
                        <div></div>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
            <a href="#">Forgot password?</a>
            <div class="signup">
                <p>Don't have an account?</p>
                <a href="#">Sign Up for free</a>
            </div>
        </div>
    </div>
    `
    modalClose = $('.modal-close')
    modalClose.addEventListener('click', () => {
        $('.modal').classList.add('modal-hide')
    })
}



