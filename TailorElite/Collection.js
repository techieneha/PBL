// Sample dress data
const dressData = [
    { id: 1, name: 'Ball Gown', description: 'A beautiful ball gown for special events.' },
    { id: 2, name: 'Kurta', description: 'Traditional Indian kurta for a classic look.' },
    { id: 3, name: 'Slit Dress', description: 'A modern dress with a stylish slit.' },
    { id: 4, name: 'Layered Dress', description: 'Chic layered dress for a trendy appearance.' },
    { id: 5, name: 'Anarkali', description: 'Elegant Anarkali dress for a traditional touch.' },
    { id: 6, name: 'Pleated Gown', description: 'Gorgeous pleated gown for a graceful look.' },
    { id: 7, name: 'High Low Dress', description: 'A stylish high-low dress for a contemporary style.' },
    { id: 8, name: 'Gathered Gown', description: 'Beautiful gathered gown for a unique look.' },
    { id: 9, name: 'Bodycon Dress', description: 'Sleek and stylish bodycon dress for a modern vibe.' },
    // Add more dress data as needed
];

// Function to dynamically add dress cards in rows of three
function addDressCards() {
    const dressContainer = document.getElementById('dressContainer');

    // Clear existing content
    dressContainer.innerHTML = '';

    // Calculate the number of rows needed
    const numRows = Math.ceil(dressData.length / 3);

    // Loop through dress data and create card elements
    for (let i = 0; i < numRows; i++) {
        // Create a row container div
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('dress-row');

        // Loop through dress cards for the current row
        for (let j = i * 3; j < Math.min((i + 1) * 3, dressData.length); j++) {
            const dress = dressData[j];
            const dressCard = document.createElement('div');
            dressCard.classList.add('dress-card');
            dressCard.innerHTML = `
                <img class="dress-image" src="images/${dress.name}.png" alt="${dress.name}">
                <div class="dress-title">${dress.name}</div>
                <div class="dress-description">${dress.description}</div>
                <button class="customize-button" onclick="customizeDress(${dress.id})">Customize</button>
            `;

            // Append the dress card to the row container
            rowContainer.appendChild(dressCard);
        }

        // Append the row container to the main container
        dressContainer.appendChild(rowContainer);
    }
}

// Call the function to add dress cards when the page loads
window.onload = addDressCards;
