/**
 * Lightbox functionality for portfolio images
 * Allows images to be clicked and viewed in a modal overlay
 */

//Comment: I know that lightbox allows the images on my portfolio page to be clicked and viewed in a larger format. I understand how some of the logic and how it results in the outcome, but I do not understand how every line of code is structured and how it all works together for the final result.//

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox modal elements
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Image preview');
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close image preview');
    
    const img = document.createElement('img');
    img.className = 'lightbox-content';
    img.alt = '';
    
    modal.appendChild(closeBtn);
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Find all images that should be clickable
    const images = document.querySelectorAll('img[src*="images/"]');
    
    // Add click handlers to each image
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modal.classList.add('active');
            img.src = this.src;
            img.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    //Comment: I understand the logic below that there are 3 different ways that allows you to exit the enlarged image and return back to the portfolio page, but I could not write this without the assistance of the chat.//
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLightbox();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Function to close the lightbox
    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
});
