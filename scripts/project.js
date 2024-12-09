// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;