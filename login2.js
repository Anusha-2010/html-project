const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate login process (replace with backend integration)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'electric' && password === 'electric@123') {
    message.textContent = 'Login successful!';

    // Here, instead of reloading the same page, 
    //  - You can redirect to a different page (e.g., a welcome page)
    //  - You can update the content displayed on the current page

    // Example 1: Redirect to a welcome page (welcome.html)
    window.location.href = "meter2.html";
    

    // Example 2: Update content on current page (assuming you have elements to show after successful login)
    document.getElementById("login-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
  } else {
    message.textContent = 'Invalid username or password.';
  }
});