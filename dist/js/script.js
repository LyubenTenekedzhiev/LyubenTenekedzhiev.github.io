const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top: ' + (e.pageY - 15) +'px; left: ' + (e.pageX - 15) +'px')
});


// var slideIndex = 1;
// const slides = document.getElementsByClassName("mySlides");
// const dots = document.getElementsByClassName("dot");

// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


//text
let index = 1;
const textSlide = document.getElementsByClassName('textSlide');

showText(index);

function moreSlides(n) {
  showText(index += n);
}

function showText(n) {
  if(n > textSlide.length) {index = 1};
  if( n < 1) {index = textSlide.length};
  
  for(let i = 0; i < textSlide.length; i++) {
    textSlide[i].style.display = "none";
  }
  textSlide[index - 1].style.display = "block";
}


//portfolio 
const option = document.getElementsByClassName("option");

for(let i = 0; i < option.length; i++) {
  option[i].addEventListener('click', function() {
    for(let j = 0; j < option.length; j++) {
      option[j].classList.remove('active');
    }
    option[i].classList.toggle('active');
  })
}


