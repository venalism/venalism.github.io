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