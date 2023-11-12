// index.html page
const dots = document.querySelectorAll(".dot");
console.log(dots)
const mySlides = document.querySelectorAll(".mySlides");
const homePage = document.querySelector(".home-page");
const slideshowContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// team.html page
const teamPage = document.querySelector(".team-page");
// contactus.hmtl page
const form = document.querySelector("form");
const conctactUs = document.querySelector(".contact-us");
const submitBtn = document.querySelector(".submit-btn");
const requestMessage = document.querySelector(".request-submitted-msg");
const contacBoxes = Array.from(document.querySelectorAll(".contact-box"));
const contactBody = document.querySelector(".contact-body");
// elements used across all pages
const footer = document.querySelector("footer");
const body = document.querySelector("body");
// variables
const currentYear = new Date().getFullYear();

console.log(mySlides);

footer.innerHTML = ` Superheros ${currentYear}`;

if (submitBtn) {
  submitBtn.addEventListener("click", function (e) {
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

// functions

function goToHomePage() {
  window.location.assign("/index.html");
}

function goToTeamPage() {
  window.location.assign("/team.html");
}

function goToContactUsPage() {
  window.location.assign("/contactus.html");
}

function carousel() {
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

  next.addEventListener("click", function () {
    clearTimeout(clear);
    slideToNext(currentSlide);
  });

  slideshowContainer.addEventListener("mouseenter", function () {
    clearTimeout(clear);
  });

  slideshowContainer.addEventListener("mouseleave", function () {
    clearTimeout(clear);
    advance(currentSlide);
  });

  prev.addEventListener("click", function () {
    clearTimeout(clear);
    mySlides[currentSlide].style.display = "none";
    dots[currentSlide].style.backgroundColor = "white"
    if (currentSlide <= 0) {
      currentSlide = mySlides.length - 1;
      mySlides[currentSlide].style.display = "block";
    } else {
      currentSlide--;
      mySlides[currentSlide].style.display = "block";
    }
  });

  function slideToNext(index) {
    mySlides[currentSlide].style.display = "none";
    if (index < mySlides.length - 1) {
      currentSlide = index + 1;
    } else {
      currentSlide = 0;
    }
    mySlides[currentSlide].style.display = "block";
  }
}

carousel();
