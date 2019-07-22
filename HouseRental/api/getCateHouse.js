
const getCateHouse = async (cate_id) => (
    
      await fetch('https://dat-khoa.herokuapp.com/api/cateID', { 
        // await fetch('http://192.168.43.113:3001/api/cateID', { 
            // await fetch('https://dat-khoa.herokuapp.com/api/cateID', { 
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        cate_id
       })
      })
  );
  module.exports = getCateHouse;
  