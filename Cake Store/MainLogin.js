
function LogInUser(event){
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form data
    var userLog = document.getElementById("User2").value;

    // Store the data in sessionStorage (so it's accessible across pages in the same session)
    sessionStorage.setItem("userLog" , userLog); 

    // Redirect to the MainMenu
    window.location.href = "MainMenu.html";
}

// Function to display user information on the MainMenu page
function displayLoginInfo(){

    // Retrieve user data from sessionStorage
    var userLog = sessionStorage.getItem("userLog");
    
    // Get references to the relevant elements
    const welcome = document.getElementById("welcome");

    // Display user data on the profile page
    document.getElementById("welcome").innerText = userLog;

    //To check whether the User has logged in or not
    if(userLog === null)
    {
        // Display the Welcome part in MainMenu
        welcome.textContent = `Welcome to Cake it`;
    }
    else
    {
        // Display the Welcome part in MainMenu
        welcome.textContent = `Welcome ${userLog} to Cake it`;
    }
    
}

  // Call displayUserInfo when the page loads
  displayLoginInfo();
  
  document.addEventListener('DOMContentLoaded', function () {
    displayLoginInfo();
  });

  