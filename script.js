function registerUser() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  // Check if username or password is empty
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Check if the user already exists in localStorage
  if (localStorage.getItem(username) !== null) {
    alert("Username already exists. Please choose another one.");
    return;
  }

  // Store the username and password in localStorage
  localStorage.setItem(username, password);
  alert("User registered successfully!");
}

function authenticateUser() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Check if the username exists in localStorage
  if (localStorage.getItem(username) !== null) {
    // Check if the password matches the stored password
    if (localStorage.getItem(username) === password) {
      // Redirect to another page after successful login
      window.location.href = "website/index.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  } else {
    alert("Username not found. Please sign up first.");
  }
}