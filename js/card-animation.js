document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.classList.add('animate');
      });
  
      card.addEventListener('mouseout', () => {
        card.classList.remove('animate');
      });
    });
  });
  
  