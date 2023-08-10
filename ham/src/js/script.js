window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.main');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = (scrollPosition * 0.6) + 'px';
  });
