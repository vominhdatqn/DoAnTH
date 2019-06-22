import React from 'react';
import {  StyleSheet, View ,TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialIcons'


class Checkbox extends React.PureComponent {
   
        render() {
          const {size , color, disabled,checked,onChange } = this.props;
          const opacity = disabled ? 0.2 : 1;
          return (
       
            <TouchableHighlight
              onPress={onChange}
              underlayColor="transparent"
              style={{ marginVertical: 2 }}
            >
       
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
       
                      <View style={{ width: size, height: size, backgroundColor: color, padding: 1,opacity }}>
                          {
                              (checked)
                                  ?
                                  (<View style={styles.checkedView}>
                                      <Icons name="check" size={size} color={"#eff0f3"} />
                                      {/* <Image source={require('./check.png')} style={styles.checkBoxImage} /> */}
                                  </View>)
                                  :
                                  (<View style={styles.uncheckedView} />)
                          }

                      </View>

              </View>
       
            </TouchableHighlight>
          );
        }
      }
      
Checkbox.propTypes =
    {
        onChange: PropTypes.func,
        size: PropTypes.number,
        color: PropTypes.string,
        checked: PropTypes.bool,
        disabled:PropTypes.bool
    };
Checkbox.defaultProps =
    { 
        size: 15,
        color: '#004c7e',
        checked: false,
        disabled:false
    };
const styles = StyleSheet.create({
    checkedView:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    checkBoxImage:
    {
        height: '80%',
        width: '80%',
    },

    uncheckedView:
    {
        flex: 1,
        backgroundColor: 'white',
        borderColor:'#4a4a4a',
        borderWidth:1
    },

    checkBoxLabelText:
    {
        fontSize: 16,
        paddingLeft: 10
    }
});
    
    
export default Checkbox;
