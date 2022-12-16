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


// contact us login
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7cxNJHhqbCSDh5Us5pfR7O5iKf6u5aTjivCTZPisLcejARpUM69veuB4bK6g-CK0o/exec'
const form = document.forms['submit-to-google-sheet']
const contactUsEmail = document.querySelector('#contactUsEmail')
const contactUsMessage = document.querySelector('#contactUsMessage')
const contactUsButtonSubmit = document.querySelector('#contactUsButtonSubmit')
const contactUsSpinner = document.querySelector('#contactUsSpinner')
const contactUsSuccess = document.querySelector('#contactUsSuccess')
const contactUsFail = document.querySelector('#contactUsFail')
form.addEventListener('submit', e => {
  e.preventDefault()
  contactUsButtonSubmit.textContent = "Loading..."
  contactUsButtonSubmit.setAttribute('disabled', "disabled")
  contactUsSpinner.classList.remove('d-none')
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      contactUsButtonSubmit.textContent = "Submit"
      contactUsButtonSubmit.removeAttribute('disabled')
      contactUsSpinner.classList.add('d-none')
      contactUsSuccess.classList.remove('d-none')
      contactUsEmail.value = ""
      contactUsMessage.value = ""
    })
    .catch(error => {
      contactUsButtonSubmit.textContent = "Submit"
      contactUsButtonSubmit.removeAttribute('disabled')
      contactUsSpinner.classList.add('d-none')
      contactUsEmail.value = ""
      contactUsMessage.value = ""
      contactUsFail.classList.remove('d-none')
    })
})