gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", function() {

  const specialistElement = document.querySelector(".Specialist");
  const contents = ["Fullstack Web Developer", "Web Scraper", "Economist (BSc.)"];
  let currentIndex = 0;

  function typewriterEffect(element, finalText, duration) {
    const targetEl = document.querySelector(element);
    targetEl.textContent = "";

    const typingSpeed = Math.floor(duration * 1000 / finalText.length); 
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < finalText.length) {
        targetEl.textContent += finalText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }

  typewriterEffect(".alias", " 'Kennery' ", 2);

  function morphText() {
    gsap.to(specialistElement, {
      duration: 1,
      text: contents[currentIndex],
      ease: "power2.inOut",
      onComplete: () => {
        currentIndex = (currentIndex + 1) % contents.length;
        gsap.delayedCall(4, morphText);
      }
    });
  }
  morphText();

  gsap.from(".languages", {
    x: 200,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.2
  });

  const listItems = document.querySelectorAll('.custom-list li');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  listItems.forEach((item) => observer.observe(item));
});
