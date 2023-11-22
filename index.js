// index.html page
const dots = document.querySelectorAll(".dot");
const mySlides = document.querySelectorAll(".my-slides");
const homePage = document.querySelector(".home-page");
const slideshowContainer = document.querySelector(".slideshow-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pictures = document.querySelector(".pictures");
const superHeroHomePageContainer = document.querySelector(
  ".super-hero-home-page-container"
);
//team.html  page
const teamPage = document.querySelector(".team-page");
const superHeroMain = document.querySelector(".super-hero-main");
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

let superHeroes = [
  {
    name: "Batman",
    homePagePicture: "images/batman.avif",
    teamPagePicture: "images/batman.avif",
    bio: "The Dark Knight is the ultimate <span>crime-fighting hero</span>, whose skills lie in his discreteness, attitude, and adeptness at using the latest technology to save the day. With his knowledge of criminal minds and weaponry combined with the powerhouse that is the Batmobile, he’s the perfect solution to any outbreak of criminal activity your city may be facing. For a small additional fee, Batman comes with a top-tier team on his side, including his butler Alfred and sidekick Robin.",
    link: "https://www.dc.com/characters/batman",
    sliderText: "Batman protecting Gotham City",
    extraInfo:
      "For a small additional fee, Batman comes with a top-tier team on his side, including his butler Alfred and sidekick Robin.",
    text: "Batman protecting Gotham City",
  },
  {
    name: "SpiderMan",
    homePagePicture: "images/spiderman-scaling.webp",
    teamPagePicture: "images/spiderman.jpeg",
    bio: "Swinging from urban structure to urban structure, Spiderman is the agile fighting powerhouse the bad guys never see coming! Having been bitten by a radioactive spider, Spiderman has the power to create phenomenally strong webs which serve to both propel him through the air and encapsulate enemies. The <span>perfect hero</span> for a modern city of skyscrapers, not only can Spiderman save the day, he also is a skilled photographer and writer. lalallalala",
    link: "https://www.marvel.com/characters/spider-man-peter-parker",
    sliderText: "Spiderman ready to leap into action",
    extraInfo:
      "Swinging between skyscrapers, Spiderman, the agile powerhouse, spins webs to save the day and captures moments, excelling in every adventure.",
    text: " Spiderman ready to leap into action",
  },
  {
    name: "WonderWoman",
    homePagePicture: "images/wonder-woman-1984.avif",
    teamPagePicture: "images/wonderwoman.jpg",
    bio: "One of the original Amazons, Wonderwoman has <span>near-invincible powers</span>  that could only be bestowed by the gods themselves. Flying through the air without aid, equipped with her golden lasso, Wonderwoman provides the speed and strength required to solve any high-stakes problem you may be facing. Not only is Wonderwoman a fantastic hero, she is also extremely economical to work with, as her natural flying ability and strength to transport equipment mean that all the work she takes on can be easily kept on budget.",
    link: "https://www.dc.com/characters/wonder-woman",
    sliderText: "Wonderwoman having fun on the job",
    extraInfo: "",
    text: "Wonderwoman having fun on the job",
  },
  {
    name: "Iron Man",
    homePagePicture: "images/ironman-stance.webp",
    teamPagePicture: "images/ironman.jpeg",
    bio: "Iron Man, or Tony Stark to his friends of which you will soon become, is a technological genius. After being injured in action, Tony created his personal arc reactor suit to both keep himself alive and give him the strength needed to withstand catastrophic events. Not only can Iron Man bravely throw himself into any oncoming danger, he can work with your company to create <span>world-leading technology</span>  in your fight against super criminals. Tony needed to make himself stronger, but now he’s ready to make your organisation stronger as well.",
    link: "https://www.marvel.com/characters/iron-man-tony-stark",
    sliderText: "Iron Man harnessing his powers",
    extraInfo: "",
    text: "Iron Man harnessing his powers",
  },
];

console.log(superHeroes[0].extraInfo.split(" "));

/* use a series of 'if' statements to check whether the element exists before performing operationson it. This prevents potential errors if an element is not found. */

if (superHeroMain) {
  for (var i = 0; i < superHeroes.length; i++) {
    superHeroMain.innerHTML += ` <section class="super-hero-section">
    <article class="bio-box">
      <h2>${superHeroes[i].name}</h2>
      <div class="super-hero-image">
        <img
          src="${superHeroes[i].teamPagePicture}"
          alt="Photo of Batman"
        />
      </div>
      <aside>
       ${superHeroes[i].bio}
      </aside>
      <aside>
        ${superHeroes[i].extraInfo}
      </aside>
      <div class="super-hero-link">
        <a href="${superHeroes[i].link}">More info</a>
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </div>
    </article>
    
  </section>`;
  }
}

if (superHeroHomePageContainer) {
  console.log(slideshowContainer);
  superHeroes.forEach((superHeroe) => {
    slideshowContainer.innerHTML += ` <div class="my-slides fade">
    <img class="slide-pics" src="${superHeroe.homePagePicture}" alt="Batman standing over Gotham City"/>
    <figcaption class="text">
      ${superHeroe.text}
    </figcaption>
  </div>
`;
  });
}

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
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

    next.addEventListener("click", () => {
      clearTimeout(clear);
      slideToNext(currentSlide);
    });

    slideshowContainer.addEventListener("mouseenter", () => {
      clearTimeout(clear);
    });

    slideshowContainer.addEventListener("mouseleave", () => {
      clearTimeout(clear);
      advance(currentSlide);
    });

    prev.addEventListener("click", () => {
      if (mySlides.length > 0) {
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
      if (mySlides.length > 0) {
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
      dot.addEventListener("click", () => {
        slideToNext(index - 1);
      });
    });
  }
  makesImagesSlide();
}

// functions end
