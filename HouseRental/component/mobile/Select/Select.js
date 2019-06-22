import React from 'react';
import { StyleSheet, View } from 'react-native';
import Picker from './RNSelect';


const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  viewContainer: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    height: 46,
    color: 'gray',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // fontSize: 16,
  },
  arrowDown: {
    position: 'absolute',
    top: 8,
    right: 10
  }
});

const Select = ({
  containerStyle, style, ...other
}) => (
  <View style={[styles.container, containerStyle]}>
    <Picker
      placeholder={{}}
      textInputProps={{
        allowFontScaling: false,
      }}
      hideIcon
      {...other}
      style={{
        viewContainer: styles.viewContainer,
        inputIOS: styles.input,
        inputAndroid: styles.input,
        underline: { borderTopWidth: 0 },
       
      }}
    />
  </View>
);

export default Select;
