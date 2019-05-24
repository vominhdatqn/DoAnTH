import React, { Component } from 'react'
import { Text, View,Dimensions,TouchableOpacity,TextInput } from 'react-native';
import styles from '../StyleComponent/StyleHomeSearch';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {showLocation} from '../../redux/actionCreator';
 class HomeSearch extends Component {

  render() {
    
    const {container,search,iconSearch,rows,columms,icons,titleIcons,Icon1,Icon2,Icon3,Icon4,titleText,titleTextPink} = styles;
    return (
      <View style={container}>
        <View style={search}>
          <TouchableOpacity onPress={() => this.props.showLocation()}>
            <View style={{ flex: 1, flexDirection: 'row', borderRadius: 12, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="source-commit-start-next-local" size={23} color="#0693e3" />
              <Text parentLocal={this} style={{ fontSize: 12,fontWeight: '400', fontFamily: 'Cochin', color: '#0693e3', marginRight: 4 }}>HCM</Text>

            </View>
          </TouchableOpacity>
          <View style={{ flex: 5, justifyContent: 'center', alignItems: 'flex-start' }}>
            <TextInput
              placeholderTextColor={"#333333"}
              placeholder={"Tìm quận, tên đường"}
            // onKeyPress={this.Search.bind(this)}
            // onFocus={this.Search.bind(this)} 
            // onSubmitEditing={this.onSearch.bind(this)}
            />
            {/* <Text style={{marginLeft:5, fontSize:12,fontFamily:'Cochin',color:'#333333',}}>Tìm quận, tên đường</Text> */}
          </View>

        </View>

        <View style={iconSearch}>
          <View style={rows}>
            <View style={columms}>
              <View style={icons}>
                <View style={Icon1}>
                  <Ionicons name="battery-charging-100" size={25} color="white" />
                </View>
              </View>
              <View style={titleIcons}>
                <Text style={titleText}>Tìm phòng gấp</Text>
              </View>
            </View>
            <View style={columms}>
              <View style={icons}>
                <View style={Icon2}>
                  <Ionicons name="near-me" size={25} color="white" />
                </View>
              </View>
              <View style={titleIcons}>
                <Text style={titleText}>Tìm gần nơi học & làm</Text>
              </View>
            </View>
            <View style={columms}>
              <View style={icons}>
                <View style={Icon3}>
                  <Ionicons name="account-key" size={25} color="white" />
                </View>
              </View>
              <View style={titleIcons}>
                <Text style={titleText}>Không chung chủ</Text>
              </View>
            </View>
            <View style={columms}>
              <View style={icons}>
                <View style={Icon4}>
                  <Ionicons name="book-multiple-plus" size={25} color="white" />
                </View>
              </View>
              <View style={titleIcons}>
                <Text style={titleTextPink}>Đăng phòng</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default connect(null,{showLocation})(HomeSearch);
