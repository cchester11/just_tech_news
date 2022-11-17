async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username, 
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    // new version of .then method
    //response refers to the fetch statement const
    if (response.ok) {
      console.log('success')
      document.location.replace('/');
    } else {
      alert(response.statusText)
    }
  }
}

async function loginFormHandler (event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // if all is good we're gonna send you to a new page
      document.location.replace('/')
    } else {
      alert(response.statusText)
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);