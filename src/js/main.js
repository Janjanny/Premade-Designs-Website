import "./../scss/main.scss"



const root = document.documentElement;
const elementDisplay = 5;
const content = document.querySelector(".carousel__list");

for (let i = 0; i < elementDisplay; i++) {
    content.appendChild(content.children[i].cloneNode(true));
}


const track = document.querySelector('.carousel2__container__track');

const slides = Array.from(track.children)

const nextButton = document.querySelector('.carousel2__button--right');

const prevButton = document.querySelector('.carousel2__button--left');

const dotsNav = document.querySelector('.carousel2__nav');

const dots = Array.from(dotsNav.children);

//get the size of the slide
const slideSize = slides[0].getBoundingClientRect();

//get the width
const slideWidth = slideSize.width;

//get the height
const slideHeight = slideSize.height;

//arrange the slides next to one another

// slides[0].style.left = `${slideWidth * 0}px`;
// slides[1].style.left = `${slideWidth * 1}px`;

slides.forEach((slides,index) => {
    
})


//when click left, move slides to the left
// when click right, move slides to the right
//update the nav indicators