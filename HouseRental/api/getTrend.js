
const getTrend = async (township) => (

  await fetch('https://dat-khoa.herokuapp.com/api/searchTownShip', { 
  // await fetch('http://192.168.43.113:3001/api/searchTownShip', {
    //   await fetch('https://dat-khoa.herokuapp.com/api/searchTownShip', { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      township
    })
  })
);
module.exports = getTrend;
