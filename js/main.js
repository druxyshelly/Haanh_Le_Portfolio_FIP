(() => {
//Variables

//scroll up button
  const scrollBtn = document.querySelector("#scroll-btn");

  const showScrollButton = function () {
    if (scrollBtn) {
      window.scrollY > window.innerHeight
        scrollBtn.classList.add("show")
        
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  const scrollToTop = function () {
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Event listeners
  if (scrollBtn) {
    scrollBtn.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", showScrollButton);
  }



// Header
const header = document.querySelector("header");
function toggleStickyHeader() {
    //Add the "sticky-header" class to the header when you scroll down and remove it when you're at the top of the page
    if (window.scrollY > 100) { 
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

window.addEventListener("scroll", toggleStickyHeader);

//SWIPER CARDS
const swiper = new Swiper('.Slider-container', {
  effect: 'cards',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
});

//Hamburger Menu

   const hamburgerOpenIcon = document.querySelector("#hamburger-open"),
   hamburgerCloseIcon = document.querySelector("#hamburger-close"),
   hamburgerMenu = document.querySelector("#hamburger-menu");
   
function openHamburgerMenu() {
//Show the hamburger menu

hamburgerMenu.style.visibility = "visible";
}

function closeHamburgerMenu() {
//Hide the hamburger menu 

hamburgerMenu.style.visibility = "hidden";

}
hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);


// INFINITE SLIDER
const slider = document.querySelector('.slider');
const slideTrack = document.querySelector('.slide-track');
const allSlides = document.querySelectorAll('.slide');


console.log('Slider:', slider);
console.log('Slide Track:', slideTrack);
console.log('Slides:', allSlides);


if (slideTrack && allSlides.length > 0) {
    // Clone the first slide and append it to the end for an infinite loop
    slideTrack.appendChild(allSlides[0].cloneNode(true));

    const slideWidth = allSlides[0].offsetWidth;
    let currentSlide = 0;

    function nextSlide() {
        currentSlide++;
        slideTrack.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';

        if (currentSlide === allSlides.length) {
            // If at the last slide, reset to the first slide
            setTimeout(function () {
                slideTrack.style.transition = 'none';
                currentSlide = 0;
                slideTrack.style.transform = 'translateX(0)';
                setTimeout(function () {
                    slideTrack.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    // Auto-play the slider every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
} 


allSlides.forEach(function (slide) {
  slide.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
      
  });

  slide.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      
  });
});


//PARTICLES
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//SCroll to
gsap.registerPlugin(ScrollToPlugin);
const projectsHeading = document.querySelector('h2.scroll');

if (projectsHeading) {
  projectsHeading.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSelector = '#contact-box';
    const targetSection = document.querySelector(targetSelector);
    if (targetSection) {
      gsap.to(window, {duration: 1, scrollTo: { y: targetSection.offsetTop, offsetY: 70}});
    }
  })
}

//VIDEO
const player = new Plyr('Video');

//MY NAME 
function lettering(selector) {
  document.querySelectorAll(selector).forEach(function (element) {
    var text = element.innerText;
    element.innerText = ''; 

    var letters = text.split("");
    letters.forEach(function (letter) {
      var charSpan = document.createElement('span');
      charSpan.classList.add('char');
      charSpan.innerText = letter;
      element.appendChild(charSpan);

    });
  });
}

lettering('.name');

setTimeout(function () {
  // Check if GSAP is available
  if (typeof gsap !== 'undefined') {
    animation();
  } else {
    console.warn('GSAP is not available.');
  }
}, 1000);

function animation() {
  var title1 = new TimelineMax();

  title1.staggerFromTo(".name .char", 1,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
}

//TITLE 
window.onload = function () {
  const links = document.querySelectorAll(".scrambledText");
  const solveMilliseconds = 400;
  const charactersSelectionMilliseconds = 70;
  const delayMilliseconds = 150;
  const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXUZ1234567890*#@/*!%&^"];

  const randomArrayElement = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
  };

  links.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const element = e.target;
      scrambleText(element);
      e.preventDefault();
    });
  });

  function scrambleText(element) {
    if (element.classList.contains("active") == false) {
      let delay = 0;
      const elementText = element.innerText;
      const elementCharacters = [...elementText];
      const lockMilliseconds =
        delayMilliseconds * elementCharacters.length + solveMilliseconds;

      element.classList.add("active");

      setTimeout(() => {
        element.classList.remove("active");
      }, lockMilliseconds);

      elementCharacters.forEach((charcter, index) => {
        setTimeout(
          () => {
            let interValid = setInterval(() => {
              const randomCharacter = randomArrayElement(characters);
              element.innerText = replaceCharcter(
                element.innerText,
                index,
                randomCharacter
              );

              setTimeout(() => {
                clearInterval(interValid);
                element.innerText = replaceCharcter(
                  element.innerText,
                  index,
                  elementCharacters[index]
                );
              }, solveMilliseconds);
            }, charactersSelectionMilliseconds);
          },
          delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
        );
      });
    }
  }

  function replaceCharcter(str, index, chr) {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  }
};


//SCROLL TRIGGER 
gsap.registerPlugin(ScrollTrigger);

//HOME PAGE
ScrollTrigger.create({
  trigger: '.sticky-header',
  start: 'top top',
  pin: true,
  pinSpacing: false
});


ScrollTrigger.create({
  trigger: '.greensock-icon',
  start: 'top bottom',
  endTrigger: document.body,
  end: 'bottom bottom',
  pin: true,
  pinSpacing: false
});

let panels = gsap.utils.toArray(".panel");

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    end: () => `+=${panel.offsetHeight}`, 
    pin: true,
    pinSpacing: false
  });
});






})();


