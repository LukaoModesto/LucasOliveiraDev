const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.2
    }
);

const hiddenElements = document.querySelectorAll(".fade-up");

hiddenElements.forEach((el) => {
    observer.observe(el);
});

const aboutLink = document.getElementById("about-link");

const aboutTitle = document.getElementById("about-title");

if (aboutLink && aboutTitle) {
    aboutLink.addEventListener("click", () => {

    setTimeout(() => {

        aboutTitle.classList.remove("about-click-animation");

        void aboutTitle.offsetWidth;

        aboutTitle.classList.add("about-click-animation");

        }, 600);
    });
}

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

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }

});
overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.textContent = "☰";
});
document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

        hamburger.textContent = "☰";

    });

});

window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".hero h1")
            .classList.add("hero-show");
    }, 200);

    setTimeout(() => {
        document.querySelector(".hero h2")
            .classList.add("hero-show");
    }, 400);

    setTimeout(() => {
        document.querySelector(".hero p")
            .classList.add("hero-show");
    }, 600);

    setTimeout(() => {
        document.querySelector(".hero-buttons")
            .classList.add("hero-show");
    }, 800);

});


