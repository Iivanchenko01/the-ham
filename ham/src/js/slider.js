const slider = document.querySelector('.slider_wrapper');
const prevBtn = document.querySelector('.left_btn');
const nextBtn = document.querySelector('.right_btn');
const dots = document.querySelectorAll('.img_dot');

let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + 4) % 4;
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % 4;
  showSlide(slideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach((dot) => {
        dot.classList.remove('active');
      });
  
      slideIndex = index;
      showSlide(slideIndex);
  
      dot.classList.add('active');
    });
  });
  
  showSlide(slideIndex);
  
  
  
  
  
  