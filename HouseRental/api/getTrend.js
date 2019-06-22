
const getTrend = async (township) => (
 
  // await fetch('http://192.168.1.16:3001/api/cateID', { 
      await fetch('http://192.168.1.16:3001/api/searchTownShip', { 
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
