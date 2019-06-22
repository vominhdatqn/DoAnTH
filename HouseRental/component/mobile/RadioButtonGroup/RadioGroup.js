import React, { Component  } from 'react';
import { StyleSheet, View } from 'react-native';
import RadioButton from './RadioButton';
export default class RadioGroup extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      radioButtons: this.validate(this.props.radioButtons),
    };
  }

  validate(data) {
    let selected = false; // Variable to check if "selected: true" for more than one button.
    // eslint-disable-next-line array-callback-return
    data.map(e => {
      e.color = e.color ? e.color : '#444';
      e.disabled = e.disabled ? e.disabled : false;
      e.label = e.label ? e.label : 'You forgot to give label';
      e.labelColor = e.labelColor ? e.labelColor : '#444';
      e.layout = e.layout ? e.layout : 'row';
      e.selected = e.selected ? e.selected : false;
      if (e.selected) {
        if (selected) {
          e.selected = false; // Making "selected: false", if "selected: true" is assigned for more than one button.
          console.log('Found "selected: true" for more than one button');
        } else {
          selected = true;
        }
      }
      e.size = e.size ? e.size : 20;
      e.value = e.value ? e.value : e.label;
    });
    if (!selected) {
      data[0].selected = true;
    }
    return data;
  }

  onPress = label => {
    const radioButtons = this.state.radioButtons;
    const selectedIndex = radioButtons.findIndex(e => e.selected === true);
    const selectIndex = radioButtons.findIndex(e => e.label === label);
    if (selectedIndex !== selectIndex) {
      radioButtons[selectedIndex].selected = false;
      radioButtons[selectIndex].selected = true;
      this.setState({ radioButtons });
      this.props.onPress(this.state.radioButtons);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: this.props.flexDirection }}>
          {this.state.radioButtons.map(data => (
            <RadioButton
              key={data.label}
              data={data}
              onPress={this.onPress}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});