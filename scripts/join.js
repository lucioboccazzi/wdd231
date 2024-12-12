document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('application-form');

    const timestampField = document.getElementById('timestamp');
    const today = new Date(); 
    timestampField.value = today.toISOString();

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this); 
            const queryString = new URLSearchParams(formData).toString(); 

            window.location.href = 'thankyou.html?' + encodeURIComponent(queryString);
        });
    }
});


if (window.location.pathname.includes('thankyou.html')) {
    const params = new URLSearchParams(decodeURIComponent(window.location.search));

    document.getElementById('first-name').textContent = params.get('first-name');
    document.getElementById('last-name').textContent = params.get('last-name');
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('mobile').textContent = params.get('mobile');
    document.getElementById('selected-individual-sport').textContent = params.get('selected-individual-sport');
    document.getElementById('selected-team-sport').textContent = params.get('selected-team-sport');
    document.getElementById('timestamp').textContent = params.get('timestamp');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}