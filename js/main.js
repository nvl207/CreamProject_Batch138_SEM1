// Function to fix the height of the iframe
function calcHeight() {
    var headerElement = document.querySelector('.preview__header');
    var frameElement = document.querySelector('.full-screen-preview__frame');

    if (headerElement && frameElement) {
        var headerDimensions = headerElement.offsetHeight;
        frameElement.style.height = (window.innerHeight - headerDimensions) + 'px';
    }
}

// Calculate height on document ready, window resize, and window load
document.addEventListener('DOMContentLoaded', function() {
    calcHeight();
});

window.addEventListener('resize', function() {
    calcHeight();
});

window.addEventListener('load', function() {
    calcHeight();
});

// Your other JavaScript code can go here

// Your custom JavaScript can go here

$(document).ready(function(){
    // Initialize FlexSlider
    $('.flexslider').flexslider({
        animation: 'fade', // You can change the animation type
        slideshow: true,   // Enable auto slideshow
        slideshowSpeed: 5000, // Set the slideshow speed in milliseconds (5 seconds in this example)
        controlNav: false, // Hide the navigation dots
        directionNav: false, // Hide the navigation arrows
        pauseOnHover: true // Pause the slideshow on hover
    });

    // Show navigation arrows on hover
    $('.home-slider').hover(
        function(){
            $('.flex-direction-nav').fadeIn();
        },
        function(){
            $('.flex-direction-nav').fadeOut();
        }
    );
});
