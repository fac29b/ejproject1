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

function goToHomePage() {
    window.location.assign("/index.html")
}


