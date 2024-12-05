// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;


// Function to for visit message
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    const visitMessageElement = document.getElementById('visitMessage');
    
    if (!lastVisit) {

        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff < 1) {

            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {

            const dayWord = daysDiff === 1 ? "day" : "days";
            visitMessageElement.textContent = `You last visited ${daysDiff} ${dayWord} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate.toISOString());
}

displayVisitMessage();

