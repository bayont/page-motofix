/*

Wykonane przez Fabiana Fettera na potrzebę zadania na Moodle.
Klasa II H

*/


/*
Skrypt służy do wygładzania scrollowania strony po użyciu kotwicy
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});