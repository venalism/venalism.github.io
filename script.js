//contact start//

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
          if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Mengirim...';
            
            setTimeout(function() {
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
            }, 2000);
          }
          
          contactForm.classList.add('was-validated');
        }, false);
        
        contactForm.addEventListener('reset', function() {
          contactForm.classList.remove('was-validated');
        });
      }
      
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

//contact end//

//skill start//

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".skills-slider");
  const cards = Array.from(document.querySelectorAll(".skills-card"));
  const totalCardWidth = cards.reduce((sum, card) => sum + card.offsetWidth, 0);

  function duplicateCards() {
    const fragment = document.createDocumentFragment();

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      fragment.appendChild(clone);
    });

    slider.appendChild(fragment);
    slider.style.width = `${totalCardWidth * 2}px`;
  }

  duplicateCards();

  let scrollAmount = 0;
  const slideSpeed = 1.5;
  let lastTimestamp = 0;

  function autoSlide(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = timestamp - lastTimestamp;

    const adjustment = (elapsed / 16.67) * slideSpeed;
    scrollAmount -= adjustment;

    if (Math.abs(scrollAmount) >= totalCardWidth) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(${scrollAmount}px)`;

    lastTimestamp = timestamp;
    requestAnimationFrame(autoSlide);
  }

  requestAnimationFrame(autoSlide);
});

//skill end//