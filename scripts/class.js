const slides = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

class Slider {
    constructor (items) {
        this.slides = items;
        this.currentIndex = 0;
        this.imageBox = document.querySelector("#slide");
        this.dotsBox = document.querySelector("#dots");
        this.prevBtn = document.querySelector("#prev-btn");
        this.nextBtn = document.querySelector("#next-btn");

        this.prevBtn.addEventListener("click", () => this.prevSlide());
        this.nextBtn.addEventListener("click", () => this.nextSlide());
        this.dotsBox.addEventListener("click", (event) => { 
        const dotItem = event.target.closest("span");
        if (!dotItem) return;
        this.currentIndex = Number(dotItem.id);
        this.updateSlide();
        this.updateDots();
        });

        this.updateSlide();
        this.createDots();
    }
    updateSlide() {
        this.imageBox.setAttribute('src', this.slides[this.currentIndex]);
    }

    nextSlide() {
        if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex = this.currentIndex + 1;
    } else { 
        this.currentIndex = 0;
    }
    this.updateSlide();
    this.updateDots();
    }

    prevSlide() {
        if (this.currentIndex > 0) {
        this.currentIndex = this.currentIndex - 1;
    } else {
        this.currentIndex = this.slides.length - 1;
    }
    this.updateSlide();
    this.updateDots();
    }

    createDots() {
        for (let i = 0; i < this.slides.length; i++) {
             const dot = document.createElement('li');
             if (i === this.currentIndex) {
        dot.classList.add("active");
        }
        dot.innerHTML = `<span id="${i}" class="dot"></span>`;
        this.dotsBox.append(dot);
        }
    }

    updateDots() {
        const dotItems = this.dotsBox.querySelectorAll("li");
        dotItems.forEach((dotItem, index) => {
        if (index === this.currentIndex) {
            dotItem.classList.add("active");
        } else {
            dotItem.classList.remove("active");
        }
    });
    }
}

const slider = new Slider(slides);