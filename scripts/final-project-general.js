// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const heroElements = document.querySelectorAll('.hero');

    const lazyLoadBackground = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const hero = entry.target;
                const bgUrl = hero.getAttribute('data-bg'); 
                hero.style.backgroundImage = `url(${bgUrl})`; 
                observer.unobserve(hero); 
            }
        });
    };

    const observerOptions = {
        rootMargin: '0px', 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver(lazyLoadBackground, observerOptions);

    heroElements.forEach(hero => {
        observer.observe(hero);
    });
});
