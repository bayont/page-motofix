/*

Wykonane przez Fabiana Fettera na potrzebę zadania na Moodle.
Klasa II H

*/

let slid;
window.addEventListener('load', (event) => {
     slid = new Slider(".slider");
  });
class Slider {
    constructor(elSelector = ".slider") {
        this.currentSlide = 0;
        this.sliderSelector = elSelector;
        this.elem = null;
        this.slider = null;
        this.slides = null;
        this.prev = null;
        this.next = null;
        this.dots = [];
        this.highlightedDot = null;
        
        this.generateSlider();
        this.createPrevNext();
        this.createDots();
        
        this.chooseSlide(this.currentSlide);
        
        
    }

    generateSlider() {
        this.slider = document.querySelector(this.sliderSelector);
        this.slider.classList.add("slider");

        const slidesContainer = document.createElement("div");
        slidesContainer.classList.add("container");

        this.slides = this.slider.children;
        let i = 1;
        while(this.slides.length) {
            this.slides[0].classList.add("slide");
            this.slides[0].style.backgroundImage = `url('${this.slides[0].getAttribute("data-value")}')`;
            slidesContainer.appendChild(this.slides[0]);
            i++;
        }
        this.slides = slidesContainer.querySelectorAll(".slide");

        this.slider.appendChild(slidesContainer);

    }
    
    createPrevNext() {
        this.prev = document.createElement("button");
        this.prev.type = "button";
        this.prev.classList.add("button");
        this.prev.addEventListener("click", () => this.prevSlide());
        
        this.next = document.createElement("button");
        this.next.type = "button";
        this.next.classList.add("button");
        this.next.addEventListener("click", () => this.nextSlide());
        
        let arrow = document.querySelectorAll(".svg-dis.arrow");
        arrow.forEach((value) => value.classList.remove("svg-dis"));
        this.prev.appendChild(arrow[0]);
        this.next.appendChild(arrow[1]);


        const nav = document.createElement("div");
        nav.classList.add("nav");
        nav.appendChild(this.prev);
        nav.appendChild(this.next);
        nav.style.height = `${this.slider.clientHeight} px`;
        this.slider.appendChild(nav);

    }

    chooseSlide(slide) {
        this.slides[this.currentSlide].classList.remove("active");
        this.slides[slide].classList.add("active");
        this.currentSlide = slide;
        this.highlightDot();
        
    }


    prevSlide() {
        this.slides[this.currentSlide].classList.remove("active");
        if(this.currentSlide >= (this.slides.length - 1))
            this.currentSlide = 0;
        else {
            this.currentSlide++;
        }
        this.slides[this.currentSlide].classList.add("active");
        this.highlightDot();
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove("active");
        if(this.currentSlide <= 0)
            this.currentSlide = this.slides.length - 1;
        else {
            this.currentSlide--;
        }
        this.slides[this.currentSlide].classList.add("active");
        this.highlightDot();
    }
    highlightDot() {
        if(this.highlightedDot != null) this.highlightedDot.classList.remove("active");
        this.highlightedDot = this.dots[this.currentSlide];
        this.highlightedDot.classList.add("active");
    }
    createDots() {
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dotsContainer");

       for(let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement("div"); dot.classList.add("dot");
            dot.addEventListener("click", () => this.chooseSlide(i));
            dotsContainer.appendChild(dot);
            this.dots.push(dot);
        }
        this.slider.appendChild(dotsContainer);
    }

}
