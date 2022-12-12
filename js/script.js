AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 10, // offset (in px) from the original trigger point
  delay: 99, // values from 0 to 3000, with step 50ms
  duration: 750, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});
if (window.innerWidth < 992) {
  const navLinks = document.querySelectorAll(".nav-item");
  const collapsable = document.getElementById("navbarNav");
  navLinks.forEach((navLink) => navLink.addEventListener("click", (_) => collapsable.classList.remove("show")));
}

const fab = document.querySelector(".fab");
window.addEventListener("scroll", (_) => {
  if (document.documentElement.scrollTop >= 500) fab.classList.remove("d-none");
  else fab.classList.add("d-none");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbw7cxNJHhqbCSDh5Us5pfR7O5iKf6u5aTjivCTZPisLcejARpUM69veuB4bK6g-CK0o/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})