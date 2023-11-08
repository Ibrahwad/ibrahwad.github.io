function moveShapes() {
    // Get all the .shape elements inside the .shape-container
    var shapes = document.querySelectorAll('.shape-container .shape');
  
    // Function to calculate a random percentage change within a range
    function randomizePosition(currentPercentage, range) {
      var change = (Math.random() * range * 2) - range; // random number between -range and +range
      return Math.max(0, Math.min(100, currentPercentage + change)); // ensure within 0% to 100% bounds
    }
  
    // Iterate over each shape and adjust its top and left properties randomly
    shapes.forEach(function(shape) {
      // Parse the current top and left percentages from the element's style attribute
      var currentTop = parseFloat(shape.style.top);
      var currentLeft = parseFloat(shape.style.left);
  
      // Calculate new random positions
      var newTop = randomizePosition(currentTop, 25);
      var newLeft = randomizePosition(currentLeft, 25);
  
      // Apply the new top and left to the shape's style
      shape.style.top = newTop + '%';
      shape.style.left = newLeft + '%';
    });
  }
  
  // Run the moveShapes function to randomly position the .shape elements
  moveShapes();

  // Move shapes every 5 seconds
    setInterval(moveShapes, 5000);