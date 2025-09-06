
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("dots");
    let index = 0;

    // Create dots on botom
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    function updateSlide() {
      slides.forEach((slide, i) => slide.classList.remove("active"));
      slides[index].classList.add("active");

      // center active slide
      const carousel = document.getElementById("carousel");
      const offset = (index * -300) + (carousel.parentElement.offsetWidth / 2 - 130);
      carousel.style.transform = `translateX(${offset}px)`;

      // update dots
      document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function changeSlide(dir) {
      index = (index + dir + slides.length) % slides.length;
      updateSlide();
    }

    function goToSlide(i) {
      index = i;
      updateSlide();
    }

    updateSlide();
    window.addEventListener("resize", updateSlide);
