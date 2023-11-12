const footer = document.querySelector("footer");
const body = document.querySelector("body");
const form = document.querySelector("form");
const homePage = document.querySelector(".home-page");
const teamPage = document.querySelector(".team-page");
const conctactUs = document.querySelector(".contact-us");
const submitBtn = document.querySelector(".submit-btn");
const requestMessage = document.querySelector(".request-submitted-msg");
const contacBoxes = Array.from(document.querySelectorAll(".contact-box"));
const contactBody = document.querySelector(".contact-body");
const  dots = document.querySelectorAll(".dot");
const  slideshowContainer = document.querySelector(".slideshow-container");

const currentYear = new Date().getFullYear();


console.log(slideshowContainer)

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






