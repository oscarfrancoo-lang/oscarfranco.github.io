const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("#nav-list");
const btnEn = document.querySelector("#btn-en");
const btnEs = document.querySelector("#btn-es");

if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    document.querySelectorAll("#nav-list a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en][data-es]").forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    if (btnEn && btnEs) {
        btnEn.classList.toggle("active", lang === "en");
        btnEs.classList.toggle("active", lang === "es");
    }

    localStorage.setItem("preferredLanguage", lang);
}

if (btnEn) {
    btnEn.addEventListener("click", () => setLanguage("en"));
}

if (btnEs) {
    btnEs.addEventListener("click", () => setLanguage("es"));
}

const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
setLanguage(savedLanguage);