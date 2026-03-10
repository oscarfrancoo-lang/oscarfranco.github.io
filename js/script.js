// Toggle mobile menu
const toggleButton = document.querySelector('.menu-toggle');
const navList = document.getElementById('nav-list');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}

// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
            // if mobile menu open, close it
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
            }
        }
    });
}
