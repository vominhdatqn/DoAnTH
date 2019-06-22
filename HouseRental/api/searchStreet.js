
const searchStreet = (nameSearch) => {
  return (
    fetch('http://192.168.1.16:3001/api/searchStreet', { 
      //  fetch('http://192.168.1.16:3001/api/searchStreet', { 
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        nameSearch,
       })
       })
  );
};

module.exports = searchStreet;


