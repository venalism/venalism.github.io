document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
          event.preventDefault();
          alert('Mohon isi semua field yang dibutuhkan');
          return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          event.preventDefault();
          alert('Format email tidak valid');
          return false;
        }
        
        alert('Mengirim pesan... Harap tunggu.');
        
        return true;
      });
    }
});