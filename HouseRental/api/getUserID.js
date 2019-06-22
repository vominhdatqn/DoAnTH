
const getUserID = async (userID) => (
  //  await fetch('http://192.168.1.252:3001/user/login', { 
      await fetch('http://192.168.1.16:3001/user/login', { 
          // await fetch('http://192.168.1.16:3001/api/userID', { 
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
  