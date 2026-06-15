const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const cards = document.querySelectorAll(".skill-card");

                cards.forEach((card, index) => {
                    card.style.transitionDelay = `${index * 0.15}s`;
                });

                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.2
    }
);

window.addEventListener("DOMContentLoaded", () => {
    changeLanguage("en");
});

const translation = {
    en:{
        home:"Home",
        about:"About",
        skills:"Skills",
        projects:"Projects",
        contact:"Contact",
        
        "hero-title": "Software Developer",
        "hero-description": "Building software and solving problems.",

        "about-title": "About Me",

        "about-text-1":
        "Computer Science graduate with experience in Python, Java, web development and software projects.",

        "about-text-2":
        "Currently focused on building a strong portfolio and pursuing my first opportunity in software development.",

        "skills-title": "Skills",

        "python-desc":
        "Automation, scripting and backend fundamentals.",

        "java-desc":
        "Object-oriented programming and software development.",

        "html-desc":
        "Semantic and accessible web structures.",

        "css-desc":
        "Responsive layouts and modern interfaces.",

        "js-desc":
        "Interactive and dynamic web experiences.",

        "git-desc":
        "Version control and collaborative development.",

        "projects-title": "Projects",

        "project1-desc":
        "RESTful API developed for task management, allowing creation, update, deletion and tracking of tasks through HTTP endpoints.",

        "project2-desc":
        "Personal portfolio developed with HTML, CSS and JavaScript to showcase projects and skills.",

        "view-project": "View Project →",

        "contact-title": "Contact",

        "contact-description":
        "Interested in working together or discussing a project? Feel free to reach out! :D",

        "footer-role": "Software Developer",

        "footer-copy":
        "© 2026 Lucas Andrade. All rights reserved."
    },

    pt:{
        home:"Início",
        about:"Sobre",
        skills:"Habilidades",
        projects:"Projetos",
        contact:"Contato",

        "hero-title": "Desenvolvedor de Software",
        "hero-description": "Construindo software e resolvendo problemas.",

        "about-title": "Sobre Mim",

        "about-text-1":
        "Formado em Ciência da Computação com experiência em Python, Java, desenvolvimento web e projetos de software.",

        "about-text-2":
        "Atualmente focado em construir um portfólio sólido e conquistar minha primeira oportunidade na área de desenvolvimento.",

        "skills-title": "Habilidades",

        "python-desc":
        "Automação, scripts e fundamentos de backend.",

        "java-desc":
        "Programação orientada a objetos e desenvolvimento de software.",

        "html-desc":
        "Estruturas web semânticas e acessíveis.",

        "css-desc":
        "Layouts responsivos e interfaces modernas.",

        "js-desc":
        "Experiências web dinâmicas e interativas.",

        "git-desc":
        "Controle de versão e desenvolvimento colaborativo.",

        "projects-title": "Projetos",

        "project1-desc":
        "API RESTful desenvolvida para gerenciamento de tarefas, permitindo criação, atualização, exclusão e acompanhamento de tarefas.",

        "project2-desc":
        "Portfólio pessoal desenvolvido com HTML, CSS e JavaScript para apresentar projetos e habilidades.",

        "view-project": "Ver Projeto →",

        "contact-title": "Contato",

        "contact-description":
        "Interessado em trabalhar junto ou discutir um projeto? Fique à vontade para entrar em contato! :D",

        "footer-role": "Desenvolvedor de Software",

        "footer-copy":
        "© 2026 Lucas Andrade. Todos os direitos reservados."
    }
}

function changeLanguage(lang) {

    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-lang]").forEach((element) => {

        const key = element.getAttribute("data-lang");

        if (translation[lang][key]) {
            element.textContent = translation[lang][key];
        }

    });

}

window.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "en";

    changeLanguage(savedLanguage);

});

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

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll(".skills-grid .skill-card").forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll(".projects-grid .project-card").forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
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

function changeLanguage(lang) {

    document.querySelectorAll("[data-lang]").forEach((element) => {

        const key = element.getAttribute("data-lang");

        if (translation[lang][key]) {
            element.textContent = translation[lang][key];
        }

    });

}

document.getElementById("pt-btn")
    .addEventListener("click", () => {
        changeLanguage("pt");
    });

document.getElementById("en-btn")
    .addEventListener("click", () => {
        changeLanguage("en");
    });
