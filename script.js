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

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        const targetId = link.getAttribute("href");

        const section = document.querySelector(targetId);

        if (!section) return;

        setTimeout(() => {

            section.classList.remove("section-highlight");

            void section.offsetWidth;

            section.classList.add("section-highlight");

        }, 500);

    });

});

