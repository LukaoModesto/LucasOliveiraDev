const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.5
    }
);

const hiddenElements = document.querySelectorAll(".fade-up");

hiddenElements.forEach((el) => {
    observer.observe(el);
});

const aboutLink = document.getElementById("about-link");

const aboutTitle = document.getElementById("about-title");

aboutLink.addEventListener("click", () => {

    setTimeout(() => {

        aboutTitle.classList.remove("about-click-animation");

        void aboutTitle.offsetWidth;

        aboutTitle.classList.add("about-click-animation");

    }, 600);

});

document.querySelectorAll(".skill-card").forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});