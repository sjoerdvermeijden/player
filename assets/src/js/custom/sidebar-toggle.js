window.addEventListener('DOMContentLoaded', () => {
    const sidebarToggleButton = document.querySelector('.js-sidebar-toggle');
    const body = document.body;
    
    sidebarToggleButton.addEventListener('click', (e) => {
        body.classList.toggle('sidebar-open');
    })
})