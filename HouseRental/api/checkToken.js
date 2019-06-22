
const checkToken = async (token) => (
    await fetch('http://192.168.1.16:3001/api/checkToken', { 
      // await fetch('http://192.168.1.16:3001/api/checkToken', { 
      method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token
            }
        })
      .then(response => response.json())
);
module.exports = checkToken;

  
