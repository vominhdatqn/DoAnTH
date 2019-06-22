import React, { Component  } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class RadioButton extends Component  {
    render() {
      const data = this.props.data;
      const opacity = data.disabled ? 0.2 : 1;
      let layout = { flexDirection: 'row' };
      let margin = { marginLeft: 10 };
      if (data.layout === 'column') {
        layout = { alignItems: 'center' };
        margin = { marginTop: 10 };
      }
      return (
        <TouchableOpacity
          style={[layout, { opacity, marginHorizontal: 10, marginVertical: 5 }]}
          onPress={() => {
            // eslint-disable-next-line no-unused-expressions
            data.disabled ? null : this.props.onPress(data.label);
          }}>
          <View
            style={[
              styles.border,
              {
                borderColor: data.color,
                width: data.size,
                height: data.size,
                borderRadius: data.size / 2,
                alignSelf: 'center',
                backgroundColor:'white'
              },
            ]}>
            {data.selected &&
              <View
                style={{
                  backgroundColor: data.color,
                  width: data.size / 2,
                  height: data.size / 2,
                  borderRadius: data.size / 2,
                }}
              />}
          </View>
          <Text style={[{ alignSelf: 'center' }, margin, {color: data.labelColor}]}>{data.label}</Text>
        </TouchableOpacity>
      );
    }
  }
  
  const styles = StyleSheet.create({
    border: {
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });