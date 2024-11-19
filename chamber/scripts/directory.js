// Getting dates
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

// functions
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');

        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';  

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');  

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" class="member-logo">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> <a href="tel:${member.phone}">${member.phone}</a></p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
            <p><strong>Additional Info:</strong> ${member.additional_info || 'No additional information available.'}</p>
        `;

        container.appendChild(memberCard);  
    });
}

function getMembershipLevel(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

document.getElementById('toggle-view').addEventListener('click', function() {
    const container = document.getElementById('members-container');
    const currentView = container.classList.contains('grid-view');

    if (currentView) {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        this.textContent = 'Switch to Grid View';
    } else {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        this.textContent = 'Switch to List View';
    }
});

window.onload = function() {
    fetchMembers();
    document.getElementById('members-container').classList.add('grid-view');  
};