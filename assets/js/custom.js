
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


