
const checkToken = async (token) => (
  
    // await fetch('https://dat-khoa.herokuapp.com/api/checkToken', { 
      // await fetch('http://192.168.43.113:3001/api/checkToken', { 
        await fetch('https://dat-khoa.herokuapp.com/api/checkToken', { 
          
      method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token
            }
        })
      .then(response => response.json())
);
module.exports = checkToken;

  
