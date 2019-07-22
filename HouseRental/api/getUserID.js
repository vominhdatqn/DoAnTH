
const getUserID = async (userID) => (
    fetch('https://dat-khoa.herokuapp.com:3001/user/login', { 
      // fetch('http://192.168.43.113:3001/user/login', { 
      
      // await fetch('https://dat-khoa.herokuapp.com/user/login', { 
          // await fetch('http://192.168.1.15:3001/api/userID', { 
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        userID
       })
      })
  );
  module.exports = getUserID;
  