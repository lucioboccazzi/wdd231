// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;



const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class on the navLinks and hamburger icon
hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
});