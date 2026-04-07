


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

// button for sidenotes
mapping.forEach(m => {
  const el = document.getElementById(m.section);
  if (el) observer.observe(el);
});

const btn = document.getElementById("toggleBtn");
const sidenote = document.getElementById("sidenote");

btn.addEventListener("click", () => {
  sidenote.classList.toggle("hidden");

  // Optional: change button text
  if (sidenote.classList.contains("hidden")) {
    btn.textContent = "*";
  } else {
    btn.textContent = "*";
  }
});

btn.addEventListener("click", () => {
  btn.classList.add("clicked");
});





// chapter navigation
// function goToChapter(id) {
//   document.getElementById(id).scrollIntoView({
//     behavior: "smooth"
//   });
// }



let chapterList = [ ];

const chapterLinks = document.querySelectorAll( 'nav ul a[href^="#"]' );
chapterLinks.forEach( link => chapterList.push(document.querySelector( link.getAttribute('href') ) ) );

chapterList.reverse( );


window.addEventListener( 'scroll', ( ) => {
  const scrollTop = window.pageYOffset;
  let matchFound = false;

  chapterList.forEach( ( chapter, index ) => {
    const heading = chapter.querySelector( ':scope h2' );
    const headingStyle = window.getComputedStyle( heading );
    const headingMarginTop = parseFloat( headingStyle.getPropertyValue( 'margin-top' ) );
    const headingTop = chapter.offsetTop - headingMarginTop;

    const chapterLink = chapterLinks[ chapterLinks.length - index - 1 ];

    if ( !matchFound && headingTop - scrollTop < 50 ) {
      chapterLink.classList.add( 'active' );

      matchFound = true;
    } else { 
      chapterLink.classList.remove( 'active' );
    }
  } );
} );