let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-item');
    const totalSlides = slides.length;

    //this is for siding buttons//
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.bannerslide-inner').style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetSlideInterval();
});

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetSlideInterval();
});

// Start the slideshow
startSlideInterval();
