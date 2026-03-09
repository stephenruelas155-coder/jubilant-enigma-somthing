document.addEventListener("DOMContentLoaded", function () {

  console.log("password is sept2024");
});

const login = document.getElementById('btnLogin');

login.addEventListener('click', function (event) {
  console.log('clicked');
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log("username + pwd:", username + ", " + password);
  if (password === 'sept2024') {
    console.log('user is authenticated');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('isAuthentication', 'true');
    window.location.assign("../index.html");
  }
  if (password != 'sept2024') {
    console.log('user is NOT authenticated');
    sessionStorage.setItem('isAuthentication', 'false');
  }
  console.log('session username:', username);
  console.log('session password:', password);
  console.log('session authenticate', sessionStorage.getItem('isAuthentication'));
});