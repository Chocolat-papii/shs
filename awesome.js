// === Fullscreen Image Viewer ===

// Get all gallery images inside #gallery
const galleryImages = document.querySelectorAll('#gallery .gallery-item img');

const viewer = document.getElementById('image-viewer');
const viewerImg = document.getElementById('viewer-img');
const closeBtn = document.getElementById('viewer-close');

let currentIndex = 0;
let startX = 0;
let endX = 0;

// ----- Open Viewer -----
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openViewer();
    });
});

function openViewer() {
    viewerImg.src = galleryImages[currentIndex].src;
    viewer.classList.add('open');
}

// ----- Close Viewer -----
closeBtn.addEventListener('click', closeViewer);

function closeViewer() {
    viewer.classList.remove('open');
}

// ----- Next / Previous -----
function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openViewer();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openViewer();
}

// ----- Touch Swipe (Mobile) -----
viewer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

viewer.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

// ----- Mouse Drag (Desktop) -----
viewer.addEventListener('mousedown', e => {
    startX = e.clientX;
});

viewer.addEventListener('mouseup', e => {
    endX = e.clientX;
    handleSwipe();
});

function handleSwipe() {
    const diff = endX - startX;
    if (Math.abs(diff) > 60) {
        diff > 0 ? showPrev() : showNext();
    }
}

// ----- Keyboard arrows + ESC -----
document.addEventListener('keydown', e => {
    if (!viewer.classList.contains('open')) return;

    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeViewer();
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