
//This function is made to Change the name of Order Purchased
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the query parameter from the URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the dessert name from the query parameter
    const dessertName = getQueryParam('dessert');

    // Update the paid element with the dessert name and "Purchase"
    const paidElement = document.getElementById('paid');
    if (dessertName) {
        paidElement.textContent = `${dessertName} Purchase`;
    }
});


//This Function is used to calculate the Total valus
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the relevant elements
    const amountInput = document.getElementById('amount');
    const paymentSelect = document.getElementById('payment');
    const totalParagraph = document.getElementById('total');

    // Attach an event listener to the amount input to recalculate total when the amount changes
    amountInput.addEventListener('input', calculateTotal);

    // Attach an event listener to the payment select to recalculate total when the payment method changes
    paymentSelect.addEventListener('change', calculateTotal);

    // Initial calculation when the page loads
    calculateTotal();

    // Function to calculate the total based on the amount and payment method
    function calculateTotal() {
        // Get the amount value
        const amount = parseInt(amountInput.value) || 0;

        // Get the selected payment method
        const paymentMethod = paymentSelect.value;

        // Calculate the total amount based on the rules you mentioned
        let total = 0;
        if (paymentMethod === 'giftcard') {
            total = amount * 80; // Assuming a gift card gives a 20% discount
        } else {
            total = amount * 100;
        }

        // Display the total
        totalParagraph.textContent = `Total = ${total} EGP`;
    }
});


//To change the Star image for each User Rate from Checked to Unchecked
function toggleStar(section, starNumber) {
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`Un${section}${i}`);
        // Toggle between CheckedStar.png and UncheckedStar.png based on the starNumber
        star.src = (i <= starNumber) ? 'Images/CheckedStar.png' : 'Images/UncheckedStar.png';
    }
}

//This function changes the color of the footer randomly
document.addEventListener("DOMContentLoaded", function () {
    const aside = document.querySelector('aside');
    const changeColorButton = document.querySelector('.ChangeColor');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the color of the aside
    function changeAsideColor() {
        const randomColor = getRandomColor();
        aside.style.backgroundColor = randomColor;
    }

    // Attach the click event listener to the button
    changeColorButton.addEventListener('click', changeAsideColor);
});


//This Function is to Upload your text on the webpage on submit
document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.querySelector('form');
    const inputRecipe = document.getElementById('InRecipe');
    const displayRecipe = document.getElementById('WriteRecipe');

    
    if(inputRecipe != null)
    {
        // Event listener for form submission
        recipeForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Get the value from the input and display it in the paragraph
            const recipeText = inputRecipe.value;
            displayRecipe.textContent = `Recipe: ${recipeText}`;
        });
    }
    
});


//This Function is to Upload your youtube link on the webpage on submit
document.addEventListener("DOMContentLoaded", function () {
    const youtubeInput = document.getElementById('youtubeIn');
    const youtubeIframe = document.getElementById('youtubeLink');

    if(youtubeInput != null)
    {
        
    // Event listener for form submission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the YouTube link from the input field
        const youtubeLink = youtubeInput.value;

        // Validate if it's a valid YouTube link (you may need a more robust validation)
        if (isValidYouTubeLink(youtubeLink)) {
            // Set the YouTube link as the source for the iframe
            youtubeIframe.src = youtubeLink;
        } else {
            alert('Please enter a valid YouTube link.');
        }
    });
    }



    // Function to validate a YouTube link (you may need a more robust validation)
    function isValidYouTubeLink(link) {
        // Simple validation for demonstration
        return link.includes('youtube.com') || link.includes('youtu.be');
    }
});
