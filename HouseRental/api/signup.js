const signUp =  (email, password, username) => (
     fetch('https://dat-khoa.herokuapp.com/api/register', { 
        // fetch('http://192.168.43.113:3001/api/register', { 
        
      // await fetch('https://dat-khoa.herokuapp.com/user/login', { 
        // fetch('http://192.168.1.15:3001/api/register', { 
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           email,
           password,
           username
       })
       })
      // .then((response) => response.json())
  );
  module.exports = signUp;
  