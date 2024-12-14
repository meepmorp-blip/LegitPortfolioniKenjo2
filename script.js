let currentIndex = 0; // Track the current image index
const images = document.querySelectorAll('.carousel-images img'); // Get all images
const totalImages = images.length;

// Function to automatically scroll to the left
function scrollImages() {
    const carousel = document.querySelector('.carousel-images');
    // Update current index to the next image
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image

    // Move the carousel container to the left to show the next image
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Scroll every 5 seconds (slower scroll)
setInterval(scrollImages, 5000);  // Increased interval for slower scrolling

// Enable manual scroll on click (optional)
document.querySelector('.image-carousel').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const clickedIndex = Array.from(images).indexOf(e.target);
        currentIndex = clickedIndex;
        document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

// Ensure the hover effect dynamically handles the opacity
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('.work-img');
        const content = item.querySelector('.work-content');
        img.style.opacity = '1'; // Reveal image
        content.style.opacity = '1'; // Show content
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('.work-img');
        const content = item.querySelector('.work-content');
        img.style.opacity = '0.7'; // Return image to low opacity
        content.style.opacity = '0'; // Hide content
    });
});



