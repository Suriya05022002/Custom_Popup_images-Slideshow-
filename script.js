document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let activeIndex = 0;
    let interval;

    function setActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    function moveToSlide(index) {
        activeIndex = index;
        slider.style.left = -100 * activeIndex + '%';
        setActiveDot();
    }

    function nextSlide() {
        activeIndex = (activeIndex + 1) % items.length;
        moveToSlide(activeIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    // Initialize
    moveToSlide(0);
    startAutoSlide();
});
