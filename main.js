

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

const image = document.querySelector("#slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dots = document.querySelector("#dots");
let currentIndex = 0;

const updateSlider = () => {
    image.setAttribute("src", slides[currentIndex]);
};

updateSlider();

const handlePrevBtnClick = () => {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = slides.length - 1;
    }
        updateSlider();
        updateDots();
};

prevBtn.addEventListener("click", handlePrevBtnClick);

const handleNextBtnClick = () => {
    if (currentIndex < slides.length - 1) {
        currentIndex = currentIndex + 1;
    } else { 
        currentIndex = 0;
    }
        updateSlider();
        updateDots();
};

nextBtn.addEventListener("click", handleNextBtnClick);

const createDots = () => {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        if (i === currentIndex) {
        dot.classList.add("active");
        }
        dot.innerHTML = `<span id="${i}" class="dot"></span>`;
        dots.insertAdjacentElement('beforeend', dot);
};
};

createDots();

const updateDots = () => {
    const dotItems = dots.querySelectorAll("li");
    
    dotItems.forEach((dotItem, index) => {
        if (index === currentIndex) {
            dotItem.classList.add("active");
        } else {
            dotItem.classList.remove("active");
        }
    });
};