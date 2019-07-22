const signIn = async (email,password) => (
 await fetch('https://dat-khoa.herokuapp.com/user/login', { 
    // await fetch('http://192.168.43.113:3001/user/login', { 
    
    // await fetch('https://dat-khoa.herokuapp.com/user/login', { 
        // await fetch('http://192.168.1.15:3001/user/login', { 
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         email,
         password
     })
     })
    .then((response) => response.json())
);
module.exports = signIn;
