const signIn = (email,password) => (
    fetch('http://192.168.206.2:3001/user/login', { 
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
