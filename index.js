

// index.html page
const dots = document.querySelectorAll(".dot");
const mySlides = document.querySelectorAll(".my-slides");
const homePage = document.querySelector(".home-page");
const slideshowContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pictures = document.querySelector(".pictures");


const teamPage = document.querySelector(".team-page");
// contactus.hmtl page
const form = document.querySelector("form");
const conctactUs = document.querySelector(".contact-us");
const submitBtn = document.querySelector(".submit-btn");
const requestMessage = document.querySelector(".request-submitted-msg");
const contacBoxes = Array.from(document.querySelectorAll("contact-box"));
const contactBody = document.querySelector(".contact-body");
// elements used across all pages
const footer = document.querySelector("footer");
const year = document.querySelector(".year");
const body = document.querySelector("body");
// variables
const currentYear = new Date().getFullYear();

year.innerText = ` The Vigilante Agency ${currentYear}`;






/* use a series of 'if' statements to check whether the element exists before performing operationson it. This prevents potential errors if an element is not found. */
if (submitBtn) {
  submitBtn.addEventListener("click",  (e) => {
    if (form.checkValidity()) {
      requestMessage.style.visibility = "visible";
      contactBody.style.visibility = "hidden";
      body.style.backgroundImage = "url('images/logo.jpeg')";
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundSize = "fill";
    } else {
      form.reportValidity();
    }
    e.preventDefault();
  });
}

if (homePage) {
  homePage.addEventListener("click", goToHomePage);
}

if (teamPage) {
  teamPage.addEventListener("click", goToTeamPage);
}

if (conctactUs) {
  conctactUs.addEventListener("click", goToContactUsPage);
}

// functions start

function goToHomePage() {
  window.location.assign("index.html");
}

function goToTeamPage() {
  window.location.assign("team.html");
}

function goToContactUsPage() {
  window.location.assign("contactus.html");
}


if (pictures) {
  function makesImagesSlide() {
    let currentSlide = 0;
    let clear;
  
    function advance(index) {
      slideToNext(index);
  
      clear = setTimeout(() => {
        if (index + 1 >= mySlides.length) {
          advance(0);
        } else {
          advance(index + 1);
        }
      }, 3000);
    }
  
    advance(currentSlide);
  
    next.addEventListener("click",  () => {
      clearTimeout(clear);
      slideToNext(currentSlide);
    });
  
    slideshowContainer.addEventListener("mouseenter",  () => {
      clearTimeout(clear);
    });
  
    slideshowContainer.addEventListener("mouseleave",  () => {
      clearTimeout(clear);
      advance(currentSlide);
    });
  
    prev.addEventListener("click",  () => {
      if(mySlides.length > 0) {
        clearTimeout(clear);
        mySlides[currentSlide].style.display = "none";
        dots[currentSlide].classList.remove("switch-to-white");
        if (currentSlide <= 0) {
          currentSlide = mySlides.length - 1;
          mySlides[currentSlide].style.display = "block";
          dots[currentSlide].classList.add("switch-to-white");
        } else {
          currentSlide--;
          mySlides[currentSlide].style.display = "block";
          dots[currentSlide].classList.add("switch-to-white");
        }

      }
    
    });
  
    function slideToNext(index) {
      if(mySlides.length > 0) {
        mySlides[currentSlide].style.display = "none";
        dots[currentSlide].classList.remove("switch-to-white");
        if (index < mySlides.length - 1) {
          currentSlide = index + 1;
        } else {
          currentSlide = 0;
        }
        mySlides[currentSlide].style.display = "block";
        dots[currentSlide].classList.add("switch-to-white");

      }
    
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click",  () => {
        slideToNext(index-1)
      });
    });
  
  }
  makesImagesSlide();

}

// functions end

 












