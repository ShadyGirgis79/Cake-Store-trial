// Function to handle Register Form
function handleRegisterCheckForm(e) {
    e.preventDefault();

    // Attributes for Register Form
    const name1 = document.getElementById('User1');
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');

    let message = [];

    if (name1.value === '' || name1.value === null) {
        message.push('Name is required');
    }

    if (pass1.value.length <= 6) {
        message.push('Password must be larger than 6 characters');
    }

    if (pass1.value.length >= 20) {
        message.push('Password must be smaller than 20 characters');
    }

    if (pass1.value == 'password') {
        message.push('Password cannot be password');
    }

    if (pass1.value !== pass2.value) {
        message.push('Passwords do not match. Please check again.');

        // Show a warning alert
        alert('Warning: Passwords do not match. Please check again.');
    } else {
        
        // Show a success alert
        alert('Success: Passwords match!');

        // If registration checks are successful, call registerUser function
        registerUser();
        return; // Add return statement to exit the function
    }

    // If message has value then an Error occurred
    if (message.length > 0) {
        error1.innerText = message.join(', ');
    }
}

// Function to store the values of register form inside the session
function registerUser() {
    // Retrieve form data
    var userName = document.getElementById("User1").value;
    var userEmail = document.getElementById("email1").value;
    var userAddress = document.getElementById("address").value;
    var userBirthday = document.getElementById("birth").value;
    var userPhone = document.getElementById("phone").value;
    var userNickname = document.getElementById("accName").value;

    // Store the data in sessionStorage (so it's accessible across pages in the same session)
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("userEmail", userEmail);
    sessionStorage.setItem("userAddress", userAddress);
    sessionStorage.setItem("userBirthday", userBirthday);
    sessionStorage.setItem("userPhone", userPhone);
    sessionStorage.setItem("userNickname", userNickname);

    // Redirect to the profile page
    window.location.href = "Profile.html";
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

// Add event listener to toggle password visibility for pass1
document.getElementById('eye1').addEventListener('click', (e) => {
    // Prevent the click event from propagating to the form
    e.preventDefault();
    togglePasswordVisibility('pass1', 'eye1');
});

// Add event listener to toggle password visibility for pass2
document.getElementById('eye2').addEventListener('click', (e) => {
    // Prevent the click event from propagating to the form
    e.preventDefault();
    togglePasswordVisibility('pass2', 'eye2');
});

// Add event listener to the ForgetPass form using the handleFormSubmission function
document.getElementById('regis').addEventListener('submit', handleRegisterCheckForm);

  
  // Function to display user information on the profile page
  function displayUserInfo() {
    // Retrieve user data from sessionStorage
    var userName = sessionStorage.getItem("userName");
    var userEmail = sessionStorage.getItem("userEmail");
    var userAddress = sessionStorage.getItem("userAddress");
    var userBirthday = sessionStorage.getItem("userBirthday");
    var userPhone = sessionStorage.getItem("userPhone");
    var userNickname = sessionStorage.getItem("userNickname");
  
    // Display user data on the profile page
    document.getElementById("row1").innerText = userName;
    document.getElementById("row2").innerText = userAddress;
    document.getElementById("row3").innerText = userEmail;
    document.getElementById("row4").innerText = userBirthday;
    document.getElementById("row5").innerText = userPhone;
    document.getElementById("nickname").innerText = userNickname;
  }
  
  // Call displayUserInfo when the page loads
  displayUserInfo();
  
  document.addEventListener('DOMContentLoaded', function () {
    displayUserInfo();
  });


  
  


