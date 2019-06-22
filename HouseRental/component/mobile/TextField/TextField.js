import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import Input from '../Input';
import Select from '../Select';
import { defaultTheme } from '../../theme';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  asterisk: {
    width: 17,
    height: 17,
  },
  label: {
    fontSize: 14,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  inputWrapper: {
    marginTop: 30,
  },
  helperTextWrapper: {
    minHeight: 30,
    justifyContent: 'center'
  },
  helperText: {
    fontSize: 13,
  },
  error: {

  },
});

const TextField = ({
  label, inputProps = {}, required, helperText,
  error, type,style={}
}) => {
  let InputComponent = Input;
  switch(type) {
    case 'select': InputComponent = Select; break;
  }
  return (
    <View
      style={styles.root}
    >
      <Text style={styles.label}>
        {label}
        {required && <Text error> *</Text>}
      </Text>
      <View style={[styles.inputWrapper,style]}>
        <InputComponent
          {...inputProps}
        />
      </View>
      <View style={styles.helperTextWrapper}>
        {!!helperText && <Text textAlign="right" style={styles.helperText} error={error}>{helperText}</Text>}
      </View>
    </View>
  );
}

export default TextField;