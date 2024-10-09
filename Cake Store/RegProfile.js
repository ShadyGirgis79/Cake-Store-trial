
//Function to store the values of register form inside the session
function registerUser(event) {
  event.preventDefault(); // Prevent the form from submitting normally

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


//Attributes for Profile Picture
const profilePic = document.getElementById("profile")
const inputFile = document.getElementById('infile')

//Function to Change the image of Profile
inputFile.addEventListener("change", () =>{
  profilePic.src = URL.createObjectURL(inputFile.files[0])
});


