import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
  
  const pick = (cb) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let uri = { uri: response.uri };
        let type = {type:response.type };
        let name = {name:response.fileName };
        cb(uri,type,name);
        // cb(source, response.data,response.type,response.fileName);
      }
    });
  }
  
  module.exports = pick;