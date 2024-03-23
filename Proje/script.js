document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;

    // Function to show the current image
    function showCurrentImage() {
        images.forEach(image => image.style.display = 'none');
        images[currentImageIndex].style.display = 'block';
    }

    // Function to handle clicking the previous button
    prevBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showCurrentImage();
    });

    // Function to handle clicking the next button
    nextBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showCurrentImage();
    });

    // Show the initial image
    showCurrentImage();
});
