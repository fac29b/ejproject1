// index.html page
const dots = document.querySelectorAll(".dot");
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
  let currenSlide = 0;
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

  advance(currenSlide);

  next.addEventListener("click", function () {
    clearTimeout(clear);
    slideToNext(currenSlide);
  });

  slideshowContainer.addEventListener("mouseenter", function() {
    clearTimeout(clear)
  })

  slideshowContainer.addEventListener("mouseleave", function() {
    clearTimeout(clear);
    advance(currenSlide);
  })

  
}

carousel()
