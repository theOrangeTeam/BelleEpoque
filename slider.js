"use strict";

window.onload = function () {


 //slider1
 var slideIndex = 1;
 var gallery = document.querySelectorAll(".slider figure");
 var sliderControls = document.querySelector(".slider ol");

 if (gallery) {
     showSlide(slideIndex);

     function changeSlide(n) {
         showSlide(slideIndex = n);
     };

     function showSlide(n) {
         if (n > gallery.length) { slideIndex = 1 };
         if (n < 1) { slideIndex = gallery.length };
         var dots = document.querySelectorAll(".slider ol li");

         gallery.forEach(e => {
             e.style.display = "none";
         });

         dots.forEach((d, i) => {
             d.className = d.className.replace("active", "");
             d.onclick = () => {
                 changeSlide(i + 1);
             };
         });

         dots[slideIndex - 1].className += "active";
         gallery[slideIndex - 1].style.display = "flex";
         gallery[slideIndex - 1].style.opacity = "1";
        };
  
   carousel();
   
        function carousel(){       
                 var i;
                 var dots = document.querySelectorAll(".slider ol li");

                 gallery.forEach(e=> {
                    e.style.display = "none";
                    
                  });

                  dots.forEach((d, i) => {
                    d.className = d.className.replace("active", "");
                    d.onclick = () => {
                        changeSlide(i + 1);
                    };
                });
                  
                  slideIndex++;
                 if (slideIndex > gallery.length) {slideIndex = 1}
                 gallery[slideIndex-1].style.display = "block";
                 dots[slideIndex - 1].className += "active";
               
                 
                 setTimeout(carousel, 6000); // Change image every 2 seconds
                };
 };





  //--------------slider2---------------
  var slideIndex2 = 1;
  var gallery2 = document.querySelectorAll(".slider2 figure");
  var sliderControls2 = document.querySelector(".slider2 ol");
 
  if (gallery2) {
      showSlide(slideIndex2);
 
      function changeSlide(n) {
          showSlide(slideIndex2 = n);
      };
 
      function showSlide(n) {
          if (n > gallery2.length) { slideIndex2 = 1 };
          if (n < 1) { slideIndex2 = gallery2.length };
          var dots = document.querySelectorAll(".slider2 ol li");
 
          gallery2.forEach(e => {
              e.style.display = "none";
          });
 
          dots.forEach((d, i) => {
              d.className = d.className.replace("active", "");
              d.onclick = () => {
                  changeSlide(i + 1);
              };
          });
 
          dots[slideIndex2 - 1].className += "active";
          gallery2[slideIndex2 - 1].style.display = "flex";
          gallery2[slideIndex2 - 1].style.opacity = "1";
         };
   
    carousel2();
    
         function carousel2(){       
                  var i;
                  var dots = document.querySelectorAll(".slider2 ol li");
 
                  gallery2.forEach(e=> {
                     e.style.display = "none";
                     
                   });
 
                   dots.forEach((d, i) => {
                     d.className = d.className.replace("active", "");
                     d.onclick = () => {
                         changeSlide(i + 1);
                     };
                 });
                   
                   slideIndex2++;
                  if (slideIndex2 > gallery2.length) {slideIndex2 = 1}
                  gallery2[slideIndex2-1].style.display = "block";
                  dots[slideIndex2 - 1].className += "active";
                
                  
                  setTimeout(carousel2, 6000); // Change image every 2 seconds
                 };
  };




};




