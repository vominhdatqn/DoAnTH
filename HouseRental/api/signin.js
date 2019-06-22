const signIn = async (email,password) => (
//  await fetch('http://192.168.1.252:3001/user/login', { 
    await fetch('http://192.168.1.16:3001/user/login', { 
        // await fetch('http://192.168.1.16:3001/user/login', { 
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
