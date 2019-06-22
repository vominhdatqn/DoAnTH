
const getCateHouse = async (cate_id) => (
 
        // await fetch('http://192.168.1.16:3001/api/cateID', { 
            await fetch('http://192.168.1.16:3001/api/cateID', { 
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
  