document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.getElementById('homeButton');
    var collectionsButton = document.getElementById('collectionsButton');
    var aboutButton = document.getElementById('aboutButton');
    var servicesButton = document.getElementById('servicesButton');
    var contactButton = document.getElementById('contactButton');

    homeButton.addEventListener('click', function () {
        alert('Home button clicked!');
        // Add your custom functionality for the Home button here
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Log a message to confirm that the script is running
        console.log('Script is running');
    
        // Retrieve the collectionsButton element
        var collectionsButton = document.getElementById('collectionsButton');
    
        // Log the collectionsButton variable to see if it's null
        console.log('collectionsButton:', collectionsButton);
    
        // Check if the collectionsButton element exists
        if (collectionsButton) {
            // Add a click event listener to the collectionsButton
            collectionsButton.addEventListener('click', function () {
                // Log a message to confirm that the click event is being handled
                console.log('Collections button clicked');
    
                // Specify the path to your Collection.html file
                var collectionPageURL = 'Collection.html';
    
                // Navigate to the Collection.html page
                window.location.href = collectionPageURL;
            });
        }
    
        // Add event listeners for other buttons if needed
    });
    
    

    aboutButton.addEventListener('click', function () {
        alert('About Us button clicked!');
        // Add your custom functionality for the About Us button here
        // Navigate to the "About Us" page or perform other actions.
    });

    servicesButton.addEventListener('click', function () {
        alert('Services button clicked!');
        // Add your custom functionality for the Services button here
    });

    contactButton.addEventListener('click', function () {
        alert('Contact Us button clicked!');
        // Add your custom functionality for the Contact Us button here
    });

    // Additional event listeners and functionality can be added as needed.
});





