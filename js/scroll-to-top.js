/**
 * Scroll to top button functionality
 */
//Comment: I understand that this scroll to top javascript it what creates the up arrow buttom and that it appears when the user scrolls past 300px. This js also allows the scroll back to the top to be smooth instead of chaotic. However, I could not have coded this on my own without the assistance of the chat. I do understand how each line works together to achieve the final result of this.//
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll-to-top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML = '&uarr;'; // Up arrow
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
