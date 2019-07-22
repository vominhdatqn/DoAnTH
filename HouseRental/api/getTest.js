import axios from 'axios';

const getTest = async (token) => (
  // await axios.post('http://192.168.1.15:3001/api/checkToken',null,{ 
    await axios.post('http://10.20.6.128:3001/api/checkToken',null,{ 
    
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }));
module.exports = getTest;


