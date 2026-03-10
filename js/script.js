const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("#nav-list");

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