// Function to disable scrolling to let the animation smoothly play
function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

// Turning it back on
function enableScrolling() {
  document.body.style.overflow = '';
}

// Ensure the page starts from the top on every load
window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  disableScrolling();

  // Set a timeout to call the enableScrolling function after 4 seconds
  setTimeout(enableScrolling, 4000);
});
