var slideIndex = 0;
var slideIndex2 = 0;
showSlides1();


function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides1, 6000); // Change image every 2 seconds
}

showSlides2();


function showSlides2() {
    var j;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 6000); // Change image every 2 seconds
  }

  

  