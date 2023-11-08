const footer = document.querySelector("footer");
const homePage = document.querySelector(".home-page");
const teamPage = document.querySelector(".team-page");
const conctactUs = document.querySelector(".contact-us");


console.log(homePage, teamPage, conctactUs)
const currentYear = new Date().getFullYear();

footer.innerHTML = ` Superheros ${currentYear}` 


if(homePage) {
    homePage.addEventListener("click", goToHomePage);
}

if(teamPage) {
    teamPage.addEventListener("click", goToTeamPage);
}

if(conctactUs) {
    conctactUs.addEventListener("click", goToContactUsPage)
}


// functions

function goToHomePage() {
    window.location.assign("/index.html")
}

function goToTeamPage() {
    window.location.assign("/team.html")
}

function goToContactUsPage() {
    window.location.assign("/contactus.html")
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

