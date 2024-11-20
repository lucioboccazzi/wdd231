// Getting weather Data
const apiKey = '9764cb777323082e289368a09b2c5267';
const city = 'Buenos Aires';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`;

function fetchWeatherData() {
    fetch(currentWeatherURL)
        .then(response => response.json())
        .then(data => {
            const currentTemp = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('current-temp').textContent = `Current Temperature: ${currentTemp}°C`;
            document.getElementById('weather-description').textContent = `Weather: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        })
        .catch(error => console.error('Error fetching current weather:', error));

    fetch(forecastURL)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list;

            const day1Temp = forecast[1].main.temp;
            const day2Temp = forecast[2].main.temp;
            const day3Temp = forecast[3].main.temp;

            document.getElementById('day1').textContent = `Day 1: ${day1Temp}°C`;
            document.getElementById('day2').textContent = `Day 2: ${day2Temp}°C`;
            document.getElementById('day3').textContent = `Day 3: ${day3Temp}°C`;
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}
window.onload = fetchWeatherData;

// Business Spotlight functions

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
   
        navLinks.addEventListener('click', function() {
            console.log('Navigation links clicked!');
        });
    }

    fetch('data/members.json')
        .then(response => {
            if (response.ok) {
                return response.json();  
            } else {
                throw new Error('Failed to load members.json');
            }
        })
        .then(members => {
            function getSpotlightMembers() {
                const spotlightMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
                const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, Math.floor(Math.random() * 2) + 2);  
            }

            function displaySpotlights() {
                const spotlights = getSpotlightMembers();
                const container = document.getElementById('business-spotlights');
                container.innerHTML = '';  

                spotlights.forEach(member => {
                    const card = document.createElement('div');
                    card.classList.add('spotlight-card');

                    card.innerHTML = `
                        <img src="${member.image}" alt="${member.name} logo">
                        <h3>${member.name}</h3>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Membership Level:</strong> ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    `;

                    container.appendChild(card);
                });
            }

            displaySpotlights();
        })
        .catch(error => {
            console.error('Error loading members data:', error);
        });
});

