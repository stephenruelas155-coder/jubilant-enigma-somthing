

// Utility: check if user is authenticated (isAuth === 'true')
function isAuthentication() {
	console.log('isAuthentication?', sessionStorage.getItem('isAuthentication')); 
  return sessionStorage.getItem('isAuthentication') === 'true';
  
}

document.addEventListener('DOMContentLoaded', isAuthentication);

