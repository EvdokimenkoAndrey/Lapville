let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlides();
    setTimeout(showSlides, 6000); // Change image every 3 seconds
}

function updateSlides() {
    const offset = slideIndex * -100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n;
    updateSlides();
    clearTimeout(timeout);
    setTimeout(showSlides, 6000);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});

// Show the first slide initially
updateSlides();

// Start the slideshow
setTimeout(showSlides, 6000);

        document.addEventListener('DOMContentLoaded', function() {
            const menuItems = document.querySelectorAll('.menu-item');
            const contentSections = document.querySelectorAll('.content-section');

            menuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();

                    // Remove active class from all items
                    menuItems.forEach(item => item.classList.remove('active'));

                    // Add active class to the clicked item
                    this.classList.add('active');

                    // Hide all content sections
                    contentSections.forEach(section => section.classList.add('hidden'));

                    // Show the target content section
                    const targetSection = document.getElementById(this.querySelector('.menu-link').getAttribute('data-target'));
                    if (targetSection) {
                        targetSection.classList.remove('hidden');
                    }
                });
            });
        });

document.getElementById('show-more').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    moreContent.classList.toggle('hidden');

    // Change button text
    if (moreContent.classList.contains('hidden')) {
        this.textContent = 'Показать еще';
    } else {
        this.textContent = 'Скрыть';
    }
});

