window.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.js-theme');

    themeButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.body.classList.toggle('light-theme');
    })
})