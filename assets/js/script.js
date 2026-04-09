// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   

docReady(function() {

  // 🔥 overlay images (scalable version)
  document.querySelectorAll(".inline-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const block = btn.closest("p")?.nextElementSibling;
      if (!block) return;

      const overlay = block.querySelector(".overlay-img");
      if (!overlay) return;

      overlay.classList.toggle("active");
    });
  });

  // 🔴 gray button (FIXED)
  const bgBtn = document.getElementById("bgToggle");

  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      const header = document.querySelector("header");

      header.classList.remove("gold-header");   // remove gold
      header.classList.add("red-header");       // always set gray
    });
  }

  // 🟡 gold button (FIXED)
  const goldBtn = document.getElementById("bgToggleGold");

  if (goldBtn) {
    goldBtn.addEventListener("click", () => {
      const header = document.querySelector("header");

      header.classList.remove("red-header");    // remove gray
      header.classList.add("gold-header");      // always set gold
    });
  }

  // toggle sidenote
  const buttons = document.querySelectorAll('.toggleBtn');
  const sidenote = document.getElementById('sidenote');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      sidenote.classList.add('active');
    });
  });

  // close sidenote
  const hideBtn = document.getElementById("hideBtn");
  if (hideBtn) {
    hideBtn.addEventListener("click", () => {
      sidenote.classList.remove("active");
    });
  }

  // chapter navigation
  window.goToChapter = function(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    sidenote.classList.remove('active');
  };

});