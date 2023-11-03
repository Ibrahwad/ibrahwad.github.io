//Manages the rotation of the arrows for the table of contents

document.addEventListener('DOMContentLoaded', function() {
    // Calculating the angle of elements
    function getAngle(elem1, elem2) {
        var p1 = getOffset(elem1);
        var p2 = getOffset(elem2);
        var angleDeg = Math.atan2(p2.top - p1.top, p2.left - p1.left) * 180 / Math.PI;
        return angleDeg;
    }

    // Figuring out the function position
    function getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    // Updating angles as we go :smile: 
    function updateAllAngles() {
        var pointers = document.querySelectorAll('.direction-pointer');
        pointers.forEach(function(pointer) {
            var targetId = pointer.getAttribute('data-target');
            var targetElem = document.getElementById(targetId);
            var angle = getAngle(pointer, targetElem);
            
            var distance = getDistance(pointer, targetElem);
            var scaleValue = computeScaleValue(distance);
            
            pointer.style.transform = `rotate(${angle}deg) scale(${scaleValue})`;
        });
    }
    
    function getDistance(elem1, elem2) {
        var p1 = getOffset(elem1);
        var p2 = getOffset(elem2);
        return Math.sqrt(Math.pow(p2.top - p1.top, 2) + Math.pow(p2.left - p1.left, 2));
    }
    
    function computeScaleValue(distance) {
        const MIN_SCALE = 1;
        const MAX_SCALE = 3;
        const MAX_DISTANCE = 700;  // Adjust this value based on your needs
    
        let scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - Math.min(distance, MAX_DISTANCE) / MAX_DISTANCE);
        return scale;
    }

    function handleArrowClicks() {
        document.querySelectorAll('.direction-pointer').forEach(function(pointer) {
            pointer.addEventListener('click', function() {
                let targetId = pointer.getAttribute('data-target');
                let targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    // Calculate target position: target's top offset minus half the viewport height, plus half the target's height
                    let targetPosition = getOffset(targetElement).top - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
    
                    // Smoothly scroll to the calculated position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Call the arrow click handler function
    handleArrowClicks();

    // Update angles upon page load
    updateAllAngles();

    // Update angles upon window resize or scroll
    window.addEventListener('resize', updateAllAngles);
    window.addEventListener('scroll', updateAllAngles);
});


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.progress-ring circle[stroke="white"]').setAttribute('stroke-dashoffset', 2 * Math.PI * 40);
    document.querySelector('.progress-ring circle[stroke="#D63C3C"]').setAttribute('stroke-dashoffset', 2 * Math.PI * 30);
});

document.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight;
    var scrolledY = window.scrollY;
    var docHeight = document.body.clientHeight;

    // Percentage of the document scrolled down
    var scrolledDownPercent = (scrolledY + windowHeight) / docHeight * 100;

    // Percentage of the document scrolled up (from bottom)
    var scrolledUpPercent = (docHeight - (scrolledY + windowHeight)) / docHeight * 100;

    // Calculate the offset for the outer circle's stroke
    var outerCircumference = 2 * Math.PI * 40;
    var outerOffset = outerCircumference - (scrolledDownPercent / 100 * outerCircumference);

    // Calculate the offset for the inner circle's stroke
    var innerCircumference = 2 * Math.PI * 30;
    var innerOffset = innerCircumference - (scrolledUpPercent / 100 * innerCircumference);

    // Set the stroke-dashoffset
    document.querySelector('.progress-ring circle[stroke="white"]').setAttribute('stroke-dashoffset', outerOffset);
    document.querySelector('.progress-ring circle[stroke="#D63C3C"]').setAttribute('stroke-dashoffset', innerOffset);
});