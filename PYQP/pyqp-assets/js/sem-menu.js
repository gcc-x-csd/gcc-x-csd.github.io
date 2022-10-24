let sem_menu = document.querySelector("#menu");
let sem_navbar = document.querySelector(".menu");

sem_menu.onclick = () => {
    sem_menu.classList.toggle("bx-x");
    sem_navbar.classList.toggle("active");
}

window.onscroll = () => {
    sem_menu.classList.remove("bx-x");
    sem_navbar.classList.remove("active");
}

