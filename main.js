document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const hrElement = document.querySelector('hr');
  
    // Get the dimensions and position of the hr element
    const { width, height, top, left } = hrElement.getBoundingClientRect();
  
    // Set the CSS variables
    document.documentElement.style.setProperty('--hr-width', `${width}px`);
    document.documentElement.style.setProperty('--hr-height', `${height}px`);
    document.documentElement.style.setProperty('--hr-top', `${top}px`);
    document.documentElement.style.setProperty('--hr-left', `${left}px`);
  
    // Add the class to start the animation
    overlay.classList.add('overlay-shrink');
  
    // Set a timeout to remove the overlay when the animation is done
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 3750); // 2000 milliseconds or 2 seconds to match the duration of the CSS animation
  });


document.addEventListener('DOMContentLoaded', () => {
    const linkItems = document.querySelectorAll('.link-item');
  
    linkItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 500); // 500 milliseconds delay between each item
    });
  })

  document.addEventListener('DOMContentLoaded', () => {
    const linkItems = document.querySelectorAll('.namez');
  
    linkItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 500); // 500 milliseconds delay between each item
    });
  })


  document.addEventListener('DOMContentLoaded', () => {
    const ellipses = document.querySelectorAll('.loader');
  
    ellipses.forEach((loader, index) => {
      setTimeout(() => {
        loader.classList.add('loader-bounce');

        // Only attach the animationend event listener to the last ellipse
        if (index === ellipses.length - 1) {
          loader.addEventListener('animationend', () => {
            ellipses.forEach(el => el.style.display = 'none');
          });
        }
      }, index * (0.5 * 1000 + 200)); // X is the delay you'd like between each animation, in milliseconds.
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
  let startTime = Date.now();
  let timerElement = document.getElementById("debug-timer");

  function updateTimer() {
    let currentTime = Date.now();
    let difference = currentTime - startTime;

    let minutes = Math.floor(difference / (60 * 1000));
    let seconds = Math.floor((difference % (60 * 1000)) / 1000);
    let tenths = Math.floor((difference % 1000) / 100); // Get tenths of a second

    timerElement.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}.${tenths}`;
  }

  // Update the timer every 100 milliseconds to include tenths of a second
  setInterval(updateTimer, 100);
});


const ellipsesSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
    <circle cx="3" cy="3" r="2.5" fill="#D9D9D9"/>
</svg>`;

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.outer-card');
    
    cards.forEach(card => {
        adjustEllipses(card);
        
        // Adjust ellipses dynamically on window resize
        window.addEventListener('resize', function() {
            adjustEllipses(card);
        });
    });
});

function adjustEllipses(card) {
    const container = card.querySelector('.card-design');
    
    // Remove existing ellipses
    container.innerHTML = '';

    const ellipsisWidth = 6 + 0.25 * 2;  // width of SVG + gap on either side
    const ellipsesCount = Math.floor(container.clientWidth / ellipsisWidth);

    for (let i = 0; i < ellipsesCount; i++) {
        container.insertAdjacentHTML('beforeend', ellipsesSVG);
    }
}


// Working on creating a bit of a fun randomizer for clicking my image.

const imageElement = document.querySelector('.self-image.translateOnHover');

function handleMouseOver() {
    const randomX = Math.floor(Math.random() * 101) - 50;  // Adjusted from -100 to -50 to match the desired range
    this.style.transform = `translate(${randomX}px, 50px)`;
}

function handleMouseOut() {
    // This resets the transform property, making the image return to its original position
    this.style.transform = 'none';
}

// Attach event listeners
imageElement.addEventListener('mouseover', handleMouseOver);
imageElement.addEventListener('mouseout', handleMouseOut);

// Remove event listeners after one minute
setTimeout(() => {
    imageElement.removeEventListener('mouseover', handleMouseOver);
    imageElement.removeEventListener('mouseout', handleMouseOut);
}, 60000);  // 60000 milliseconds = 1 minute