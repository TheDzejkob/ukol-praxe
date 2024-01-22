document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Get the entered username and password
        var enteredUsername = document.getElementById('username').value;
        var enteredPassword = document.getElementById('password').value;

        // Define a list of valid usernames and passwords (you can replace this with your own logic)
        var validUsers = ['user1', 'user2'];
        var validPasswords = ['password1', 'password2'];

        // Check if the entered username and password are in the list
        var isValidUser = validUsers.includes(enteredUsername);
        var isValidPassword = validPasswords.includes(enteredPassword);

        // If both username and password are valid, open another page
        if (isValidUser && isValidPassword) {
            window.location.href = 'udalosti.html'; // replace 'another-page.html' with the actual page you want to open
        } else {
            // If not valid, show an alert
            alert('Invalid username or password. Please try again.');
        }
    });
});