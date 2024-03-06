document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // For simplicity, you can store users in local storage
    if (localStorage.getItem('users') === null) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    
    let users = JSON.parse(localStorage.getItem('users'));
    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful!');
    window.location.href = 'index.html';
});
