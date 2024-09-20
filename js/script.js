document.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.getElementById('animated-text');
    const text = 'Luxury Motors';
    let index = 0;
    let isAdding = true;
    
    function updateText() {
        if (isAdding) {
            animatedText.textContent = text.substring(0, index + 1);
            index++;
            if (index > text.length) {
                index = text.length;
                isAdding = false;
                setTimeout(updateText, 1000); // Pause before starting to remove text
                return;
            }
        } else {
            animatedText.textContent = text.substring(0, index);
            index--;
            if (index < 0) {
                index = 0;
                isAdding = true;
                setTimeout(updateText, 1000); // Pause before starting to add text again
                return;
            }
        }
        setTimeout(updateText, 100); // Adjust typing speed here
    }
    
    updateText();
}); 

// Add a hover effect for social media icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.animation = 'bounce 0.5s ease';
    });
    
    icon.addEventListener('animationend', function() {
      this.style.animation = '';
    });
  });
  
  