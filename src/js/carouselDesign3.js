export default function carouselDesign3() {
    const track = document.querySelector('.design3-container');

    const slides = Array.from(track.children)

    const nextButton = document.querySelector('.design3-right-button');

    const prevButton = document.querySelector('.design3-left-button');

    const dotsNav = document.querySelector('.design3-nav');

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

    const setSlidePosition = (slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    }

    //iterate the slides and assign the function
    slides.forEach(setSlidePosition);

    //move slide function
    const moveToSlide = (track, currentSlide, targetSlide) => {
        //move to next slide
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

        //update the class
        currentSlide.classList.remove('current-slide3');
        targetSlide.classList.add('current-slide3');
    }

    //update the dots
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide3');
        targetDot.classList.add('current-slide3');
    }

    //hiding the arrow buttons
    const hideShowArrows = (slides, nextButton, prevButton, targetIndex) => {
        //for hiding the button
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden3');
            nextButton.classList.remove('is-hidden3');
        }

        else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden3');
            nextButton.classList.add('is-hidden3');
        }

        else {
            nextButton.classList.add('is-hidden3');
            prevButton.classList.add('is-hidden3');
        }
    }


    //when click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide3');
        const prevSlide = currentSlide.previousElementSibling;
        
        const currentDot = dotsNav.querySelector('.current-slide3');
        const prevDot = currentDot.previousElementSibling;

        const prevIndex = slides.findIndex(slide => slide === prevSlide);


        moveToSlide(track, currentSlide, prevSlide );

        updateDots(currentDot, prevDot);

        //arrow functions
        hideShowArrows(slides, nextButton, prevButton, prevIndex);

    })


    // when click right, move slides to the right
    nextButton.addEventListener('click', e => {
        //keep track of the slide
        const currentSlide = track.querySelector('.current-slide3');
        const nextSlide = currentSlide.nextElementSibling;

        const currentDot = dotsNav.querySelector('.current-slide3');
        const nextDot = currentDot.nextElementSibling;

        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        
        //pass args to move function
        moveToSlide(track, currentSlide, nextSlide);

        //update the dots
        updateDots(currentDot, nextDot);


        //arrow functions
        hideShowArrows(slides, nextButton, prevButton, nextIndex);
        
    })


    //update the nav indicators

    dotsNav.addEventListener('click', e => {
        //what indicator was clicked on
        //focus only the buttons
        const targetDot = e.target.closest('button');

        //check if null = stop the function
        if(!targetDot) return;

        const currentSlide = track.querySelector('.current-slide3');
        const currentDot = dotsNav.querySelector('.current-slide3');

        //return the index number
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        // console.log(targetIndex);

        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);

        updateDots(currentDot, targetDot);


        //arrow functions
        hideShowArrows(slides, nextButton, prevButton, targetIndex);
        
    })
}