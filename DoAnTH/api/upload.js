
import RNFetchBlob from 'react-native-fetch-blob';

let upload = (data) => {
  return RNFetchBlob.fetch('POST', 'http://192.168.1.28:3001/upload/', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, data);
}

module.exports = upload;