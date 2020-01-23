const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top: ' + (e.pageY - 15) +'px; left: ' + (e.pageX - 15) +'px')
});


// let slideIndex = 1;
// const slides = document.getElementsByClassName("mySlides");

// showSlides(slideIndex); //1   0

// // function plusSlides(n) { // n = 1
// //   showSlides(slideIndex += n);  //  2   1
// // }

// function currentSlide(n) {
//   showSlides(slideIndex += n);  // 1
// }

// function showSlides(n) { // 2 || 1     1

//   if (n > slides.length) {  //nope
//     return slideIndex = 1;
//   };

//   if(n < 1) {
//     return slideIndex = slides.length - 1; // returns 3
//   };

//   for(let i = 0; i < slides.length; i++) {    
//     slides[i].style.display = 'none'; // 2 & 3 
//   }

//     slides[slideIndex-1].style.display = "block";  // 2
// }

var slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


