/*

Wykonane przez Fabiana Fettera na potrzebę zadania na Moodle.
Klasa II H

*/


/*
Kod poniżej służy do obsługi kliknięcia myszą przez użytkownika przy rozwijaniu menu w wersji mobilnej
*/

const ham_menu = document.querySelector(".hamburger");
const menu_list = document.querySelector(".menu-list");

const handleClick = () => {
    menu_list.classList.toggle("menu-active");    
    ham_menu.classList.toggle("hamburger-active");
}
ham_menu.addEventListener("click", handleClick);

/*
Kod poniżej służy do wygładzania scrollowania strony po użyciu kotwicy
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});