window.addEventListener('DOMContentLoaded', (e) => {
    const body = document.body;
    const loginContainer = document.querySelector('.js-login');

    body.addEventListener('click', (e) => {    
        if (!loginContainer.contains(e.target)) {
            body.classList.remove('is-login');
        }
    })

})