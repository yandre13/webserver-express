let home = document.getElementById('home'),
    about = document.getElementById('about')


if (location.pathname === '/about') {
    about.classList.add('active')
}
if (location.pathname === '/') {
    home.classList.add('active')
}