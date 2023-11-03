document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  const landingAnimationElement = document.querySelector('.landing-animation');
  
  // If mobile on initial load, hide the animation and exit.
  if (window.innerWidth <= 768) { // Assuming 768px is your mobile breakpoint
    landingAnimationElement.style.display = 'none';
    return;
  }

  const animationTagElement = document.getElementById('animation-tag');

  setTimeout(() => {
    const { width, height, top, left } = animationTagElement.getBoundingClientRect();
    
    // If inside a sticky container, consider the scroll position.
    const adjustedTop = window.scrollY + top;

    // Set the CSS variables
    document.documentElement.style.setProperty('--hr-width', `${width}px`);
    document.documentElement.style.setProperty('--hr-height', `${height}px`);
    document.documentElement.style.setProperty('--hr-top', `${adjustedTop}px`);
    document.documentElement.style.setProperty('--hr-left', `${left}px`);

    // Add a class to start the animation
    landingAnimationElement.classList.add('animation-shrink');

    landingAnimationElement.addEventListener('animationend', () => {
      landingAnimationElement.style.display = 'none';
    });
  }, 100);
});
// Ordering for the Card Animation

document.addEventListener("DOMContentLoaded", () => {
    // Force the window to start at the top on page load
    window.scrollTo(0, 0);

    const cards = document.querySelectorAll('.carousel .case-card');
    const landingAnimation = document.querySelector('.landing-animation.animation-shrink');
  

    // Lock scrolling
    document.body.style.overflow = 'hidden';

    // Function to start the cards animation
    const startCardsAnimation = () => {
      let delay = 0;
      cards.forEach(card => {
        setTimeout(() => {
          card.style.display = 'block';
          card.classList.add('animate-in');
        }, delay);
        delay += 500; // Increase delay for next card
      });
    };

    const enableScrolling = () => {
      // Unlock scrolling
      document.body.style.overflow = 'auto';
    };
  
    if (landingAnimation) {
      // Start cards animation after the landing animation ends
      landingAnimation.addEventListener('animationend', () => {
        startCardsAnimation();
        enableScrolling(); // Enable scrolling after the landing animation ends
      });
    } else {
      // If landing animation element is not found, start cards animation immediately
      startCardsAnimation();
      enableScrolling();
    }
});