function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   

docReady(function() {
  document.querySelectorAll(".inline-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const block = btn.closest("p")?.nextElementSibling;
      if (!block) return;

      const overlay = block.querySelector(".overlay-img");
      if (!overlay) return;

      overlay.classList.toggle("active");
    });
  });

const bgBtn = document.getElementById("bgToggle");

  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      const header = document.querySelector("header");

      header.classList.remove("gold-header");
      header.classList.add("red-header");
    });
  }

  const goldBtn = document.getElementById("bgToggleGold");

  if (goldBtn) {
    goldBtn.addEventListener("click", () => {
      const header = document.querySelector("header");

      header.classList.remove("red-header");
      header.classList.add("gold-header");
    });
  }

  const buttons = document.querySelectorAll('.toggleBtn');
  const sidenote = document.getElementById('sidenote');
  const refs = document.querySelectorAll('.side-text');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const refNumber = button.getAttribute('data-ref');

      if (
        sidenote.classList.contains('active') &&
        sidenote.dataset.current === refNumber
      ) {
        sidenote.classList.remove('active');
        sidenote.dataset.current = '';
        refs.forEach(ref => ref.classList.remove('active'));
        return;
      }

      sidenote.classList.add('active');
      sidenote.dataset.current = refNumber;

      refs.forEach(ref => ref.classList.remove('active'));

      const target = document.querySelector(`.side-text[data-ref="${refNumber}"]`);
      if (target) {
        target.classList.add('active');

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    });
  });

  const hideBtn = document.getElementById("hideBtn");
  if (hideBtn) {
    hideBtn.addEventListener("click", () => {
      sidenote.classList.remove("active");
      sidenote.dataset.current = '';
      refs.forEach(ref => ref.classList.remove('active'));
    });
  }

  window.goToChapter = function(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    sidenote.classList.remove('active');
    sidenote.dataset.current = '';
    refs.forEach(ref => ref.classList.remove('active'));
  };

  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⌃";
  scrollBtn.id = "scrollTopBtn";

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});