import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    minHeight: 46,
    width: '100%',
    alignItems: 'center',
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: 'rgba(111, 111, 111, 0.2)',
    color: 'black',
  },
  focused: {
    borderColor: '#089cfb',
  },
});

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      height: 0,
    };
    this.handleFocus = this.handleFocus.bind(this);  
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  render() {
    const {
      focused,
      height
    } = this.state;

    const inputStyles = [styles.root];

    if(focused) inputStyles.push(styles.focused);

    return (
      <TextInput
        style={[inputStyles, height && { height }]}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onContentSizeChange={this.onContentSizeChange}
        onLayout={this.onContentSizeChange}
       
        {...this.props}
      />
    );
  }
}

export default Input;
