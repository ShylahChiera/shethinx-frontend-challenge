// declare slide index 1
var slideIndex = 1;

showSlides(slideIndex);

// function for indicators
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//
function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("carousel-slides");
  var dots = document.getElementsByClassName("dot");

  //enable for swipe functionality
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}

  //hide slides which are not active
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //when new indicator is clicked, remove classname "active"
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //show current slide and current indicator "active"
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
