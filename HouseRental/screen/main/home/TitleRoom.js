import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class TitleRoom extends Component {
  render() {
    const { trendTitle } = this.props;
    const { container, tilte } = styles;
    return (
      <View style={container}>

        <Text style={tilte}>{trendTitle}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.04,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width * 0.94,
    marginLeft: 16,
  },
  tilte: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'inherit',
    color: "#000000",
  },
});
