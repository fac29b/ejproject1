const footer = document.querySelector("footer");
const body = document.querySelector("body")
const form = document.querySelector("form");
const homePage = document.querySelector(".home-page");
const teamPage = document.querySelector(".team-page");
const conctactUs = document.querySelector(".contact-us");
const submitBtn = document.querySelector(".submit-btn");
const requestMessage = document.querySelector(".request-submitted-msg");
const contacBoxes = Array.from(document.querySelectorAll(".contact-box"));
const contactBody = document.querySelector(".contact-body");
const currentYear = new Date().getFullYear();

footer.innerHTML = ` Superheros ${currentYear}`;

console.log(footer)



if (submitBtn) {
  submitBtn.addEventListener("click", function (e) {
    if (form.checkValidity()) {
      requestMessage.style.visibility = "visible";
      contactBody.style.visibility = "hidden";
      body.style.backgroundImage = "url('images/logo.jpeg')";
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundSize = "fill"; 
      footer.style.zIndex = 100;
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
