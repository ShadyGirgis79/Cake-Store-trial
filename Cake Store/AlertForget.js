
// Function to handle ForgetPass Form
function handleForgetPassForm(e) {
    let message = [];

    if (forpass1.value.length <= 6) {
        message.push('Password must be larger than 6 characters');
    }

    if (forpass1.value.length >= 20) {
        message.push('Password must be smaller than 20 characters');
    }

    if (forpass1.value == 'password') {
        message.push('Password cannot be password');
    }

    if (forpass1.value !== forpass2.value) {
        message.push('Passwords do not match. Please check again.');
        // Show a warning alert
        alert('Warning: Passwords do not match. Please check again.');
    } else {
        // Show a success alert
        alert('Success: Passwords match!');
    }

    // If message has value then an Error occurred
    if (message.length > 0) {
        e.preventDefault();
        error3.innerText = message.join(', ');
    }
}

// Toggle password visibility
function togglePasswordVisibility(inputId, eyeId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'Images/Eye.png';
        eyeIcon.alt = 'Show';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'Images/HideEye.png';
        eyeIcon.alt = 'Hide';
    }
}

// Add event listener to toggle password visibility for forpass1
document.getElementById('eyefor1').addEventListener('click', (e) => {
    // Prevent the click event from propagating to the form
    e.preventDefault();
    togglePasswordVisibility('forpass1', 'eyefor1');
});

// Add event listener to toggle password visibility for forpass2
document.getElementById('eyefor2').addEventListener('click', (e) => {
    // Prevent the click event from propagating to the form
    e.preventDefault();
    togglePasswordVisibility('forpass2', 'eyefor2');
});

// Add event listener to the ForgetPass form using the handleFormSubmission function
document.getElementById('forget').addEventListener('submit', handleForgetPassForm);
