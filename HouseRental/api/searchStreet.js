
const searchStreet = (nameSearch, RangeLow, RangeHigh) => {
  return (
    // fetch('https://dat-khoa.herokuapp.com/api/searchStreet', { 
      //  fetch('http://192.168.1.15:3001/api/searchStreet', { 
        fetch('https://dat-khoa.herokuapp.com/api/searchStreet', { 
          // fetch('http://192.168.43.113:3001/api/searchStreet', { 
          
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        nameSearch,
        RangeLow,
        RangeHigh,
       })
       })
  );
};

module.exports = searchStreet;


