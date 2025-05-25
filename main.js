 AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    // Add scroll animation to elements
    document.addEventListener('DOMContentLoaded', function() {
      const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
          const position = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (position < windowHeight - 100) {
            el.classList.add('aos-animate');
          }
        });
      };
      
      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll();
    });