document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight - 50) {
          section.classList.add("fade-in");
      }
  });
});