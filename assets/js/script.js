


// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   



docReady(function() {

	// functions
	// go
	// here

});

// image in text
function showImage() { const img = document.getElementById("tiktok-image"); 
  img.style.display = img.style.display === "block" ? "none" : "block"; }


// images that animate on scroll
const mapping = [
  { section: "intro", image: "img-intro" },
  { section: "backg", image: "img-backg" },
  { section: "chap1", image: "img-chap1" },
  { section: "chap2", image: "img-chap2" },
  { section: "chap3", image: "img-chap3" },
  { section: "conclusion", image: "img-conclusion" },
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const match = mapping.find(m => m.section === entry.target.id);

    if (!match) return;

    const img = document.getElementById(match.image);

    if (entry.isIntersecting) {
      // scrolling into section → show image
      img.classList.add("active");
    } else {
      // scrolling out of section → hide image
      img.classList.remove("active");
    }
  });
}, {
  root: null,
  rootMargin: "-30% 0px -30%",
  threshold: 0
});

// toggle

const buttons = document.querySelectorAll('.toggleBtn');
const sidenote = document.getElementById('sidenote');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    sidenote.classList.add('active');
  });
});


// x button
document.getElementById("hideBtn").addEventListener("click", function() {
  sidenote.classList.remove("active");
});


// chapter navigation
function goToChapter(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
  sidenote.classList.remove('active');
}
