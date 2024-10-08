function togglePassword() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes only)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to another page upon successful login
        window.location.href = "intajkhan.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the button text
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
