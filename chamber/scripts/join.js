// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('membership-form');

    // Set timestamp dynamically
    const timestampField = document.getElementById('timestamp');
    timestampField.value = today.toISOString(); // Sets the timestamp to current time

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get form data
            const formData = new FormData(this); // Collect form data
            const queryString = new URLSearchParams(formData).toString(); // Convert form data to query string

            // Redirect to thankyou.html with query parameters
            window.location.href = 'thankyou.html?' + encodeURIComponent(queryString);
        });
    }
});

// Extract query parameters and display on thank you page
if (window.location.pathname.includes('thankyou.html')) {
    const params = new URLSearchParams(decodeURIComponent(window.location.search));

    // Update the page content with the query parameters
    document.getElementById('first-name').textContent = params.get('first-name');
    document.getElementById('last-name').textContent = params.get('last-name');
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('mobile').textContent = params.get('mobile');
    document.getElementById('business-name').textContent = params.get('business-name');
    document.getElementById('membership-level').textContent = params.get('membership-level');
    document.getElementById('description').textContent = params.get('description');
    document.getElementById('timestamp').textContent = params.get('timestamp');
}

// Modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
