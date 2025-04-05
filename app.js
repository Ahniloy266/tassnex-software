// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "admin" && password === "1234") {
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password");
    }
  });
});console.log('Tassnex app running');
