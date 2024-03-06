// Sample users (for demonstration purposes only)
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (authenticateUser(username, password)) {
        alert('Login successful!');
        window.location.href = 'secured-page.html';
    } else {
        alert('Invalid username or password.');
    }
});

function authenticateUser(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}
