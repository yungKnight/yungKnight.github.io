document.addEventListener("DOMContentLoaded", function() {
  const specialistElement = document.querySelector(".Specialist");
  const contents = ["Fullstack Web Developer", "Web Scraper", "Economist (BSc.)"];
  let currentIndex = 0;

  setInterval(() => {
    specialistElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % contents.length;
      specialistElement.textContent = contents[currentIndex];

      specialistElement.style.opacity = 1;
    }, 1000); 
  }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.custom-list li');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    listItems.forEach((item) => {
        observer.observe(item);
    });
});
