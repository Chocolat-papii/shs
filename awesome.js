// Select all images with the class '.gallery-item'
const images = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

// Function to open an image in fullscreen mode
function openFullscreen(image, index) {
    currentIndex = index; // Set the current image index
    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) { // Safari compatibility
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // IE/Edge compatibility
        image.msRequestFullscreen();
    } else {
        alert('Fullscreen API is not supported by your browser.');
    }
}

// Function to show the next or previous image
function slideImage(direction) {
    const totalImages = images.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const image = images[currentIndex];
    openFullscreen(image, currentIndex);
}

// Add click event listener to each image
images.forEach((image, index) => {
    image.addEventListener('click', () => openFullscreen(image, index));
});

// Add keyboard navigation in fullscreen mode
document.addEventListener('keydown', (event) => {
    if (document.fullscreenElement) {
        if (event.key === 'ArrowRight') {
            slideImage(1); // Next image
        } else if (event.key === 'ArrowLeft') {
            slideImage(-1); // Previous image
        }
    }
});



// Add touch gestures for mobile
document.addEventListener('touchstart', (event) => {
    if (document.fullscreenElement) {
        startX = event.touches[0].clientX; // Record the starting touch position
    }
});

document.addEventListener('touchend', (event) => {
    if (document.fullscreenElement) {
        endX = event.changedTouches[0].clientX; // Record the ending touch position
        const diff = endX - startX;

        if (Math.abs(diff) > 50) { // Threshold to detect swipe
            if (diff > 0) {
                slideImage(-1); // Swipe right (previous image)
            } else {
                slideImage(1); // Swipe left (next image)
            }
        }
    }
});

///////// section for ELEMENT  ANIMATIONS //////////

//right

function handleScrollAnimationR() {
    const elementR = document.querySelectorAll('.animate-me-right');
    const windowHeight = window.innerHeight;
  
    elementR.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;
  
      el.classList.toggle('visible', isVisible);
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimationR);
  handleScrollAnimationR(); // Initial check

  //left

function handleScrollAnimationL() {
    const elementL = document.querySelectorAll('.animate-me-left');
    const windowHeight = window.innerHeight;
  
    elementL.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;
  
      el.classList.toggle('visible', isVisible);
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimationL);
  handleScrollAnimationL(); // Initial check
  
  //bottom

function handleScrollAnimationB() {
    const elementB = document.querySelectorAll('.animate-me-bottom');
    const windowHeight = window.innerHeight;
  
    elementB.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;
  
      el.classList.toggle('visible', isVisible);
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimationB);
  handleScrollAnimationB(); // Initial check