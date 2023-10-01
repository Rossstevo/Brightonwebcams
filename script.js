// Sample API URL, replace with the actual API endpoint for tide times
const API_URL = "https://api.tide-times-for-brighton.com";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const tideTimesList = document.getElementById('tideTimesList');

        data.tideTimes.forEach(tide => {
            const listItem = document.createElement('li');
            listItem.textContent = `Time: ${tide.time}, Tide: ${tide.type}`;
            tideTimesList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Error fetching tide times:", error);
    });
