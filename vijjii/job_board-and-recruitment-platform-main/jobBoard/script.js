// Form Validation for Login
document.getElementById("signin").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    const errorElement = document.getElementById("login-error");
  
    if (!validateEmail(email)) {
      errorElement.textContent = "Please enter a valid email address.";
      return;
    }
    if (password.length < 6) {
      errorElement.textContent = "Password must be at least 6 characters long.";
      return;
    }
  
    errorElement.textContent = "";
    alert("signin successful!");
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }