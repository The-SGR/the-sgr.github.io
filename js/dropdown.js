const btn = document.querySelector('#dropbtn');
const menu = document.querySelector('.dropdown-content')

if (menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('disp');
    })
}