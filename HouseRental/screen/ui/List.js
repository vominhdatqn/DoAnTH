import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground, FlatList, Image, Platform, Animated, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { connect } from 'react-redux';
import { getProfile, getUserToken } from '../../redux/actionCreator';

const { width, height } = Dimensions.get('screen');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chaves',
      avatar: '',
    },
    location: 'Wallis and Futura',
    temperature: 34,
    title: 'Greece 1',
    description: 'Greece Description',
    rating: 4.7,
    reviews: 3132,
    preview: 'https://images.unsplash.com/photo-1561378137-e40d3723d0df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=756&q=80',
    images: [
      'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
      'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
      'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
      'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',

    ]
  },
  // {
  //   id: 2,
  //   user: {
  //     name: 'Lelia Chaves',
  //     avatar: '',
  //   },
  //   location: 'Wallis and Futura',
  //   temperature: 34,
  //   title: 'Greece 1',
  //   description: 'Greece Description',
  //   rating: 4.7,
  //   reviews: 3132,
  //   preview: 'https://images.unsplash.com/photo-1561432776-aa968b42fcb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  //   images: [
  //     'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
  //     'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
  //     'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',
  //     'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/51732475_1227251450755403_7361318845761454080_n.jpg?_nc_cat=111&_nc_oc=AQnMVd5xkzBDwuBdJ3AHBbKSPf5dJL7u2HYYqZzbYpwt_ddfbyxff_lT_ayiQb5fglg&_nc_ht=scontent.fhan2-2.fna&oh=e1e37a4f935eaba5ecdaccde187d8dad&oe=5DC64EB6',

  //   ]
  // }
]
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
    paddingHorizontal: 36
  },
  destinations: {
  },
  destination: {
    width: width - (36 * 2),
    height: 100,
    paddingHorizontal: 36,
    marginRight: 2,
    paddingVertical: 24,
    borderRadius: 12,
  },
  destinationInfo: {
    position: 'absolute',
    padding: 18,
    bottom: 2,
    right: 36,
    left: 36,
    borderRadius: 12,
    backgroundColor: 'white',
    zIndex: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: (Platform.OS === 'android') ? 7 : 0
  },
  recommended: {
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  rating: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  dots: {
    width: 12,
    height: 12,
    backgroundColor: '#DCE0E9',
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: 'transparent',
    marginHorizontal: 6,
  },
  activeDot: {
    borderColor: '#007BFA'
  }

})

class Articles extends React.PureComponent {

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide()
    this.props.navigation.navigate('EditProfile')
  };

  showMenu = () => {
    this._menu.show();
  };
  scrollX = new Animated.Value(0)

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[styles.flex, styles.row, { justifyContent: 'center', marginTop: 15 }]}>
        {destinations.map((item, index) => {
          const width = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 3, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: width }]}
            />
          )
        })}

      </View>
    );
  }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations, styles.articles, { flex: 1.5 }]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"

          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          renderItem={({ item }) => this.renderDestination(item)}

        />
        {this.renderDots()}
      </View>
    );
  }
  renderDestination = (item) => {
    return (
      <View tyle={[styles.flex, styles.shadow, { backgroundColor: 'yellow' }]}>
        <ImageBackground
          style={[styles.destination, { height: 200 }]}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              {/* <Image source={{ uri: item.user.avatar }} style={styles.avatar} /> */}
              <Image source={require('../../assets/img/avatar.jpg')} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingLeft: 18 }]}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: 'white' }}>{item.location}</Text>
            </View>
            <View style={{ flex: 0, alignItems: 'flex-end', justifyContent: 'center' }}>
              {/* <Text style={styles.rating}>{item.rating}</Text> */}
              <Text style={styles.rating}>4.7</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 8 }}>{item.title}</Text>
          <Text style={{ color: 'gray' }}>{item.description}</Text>
        </View>
        <View style={[styles.flex, styles.row, { justifyContent: 'center', marginTop: 15 }]}>
          <View key={`step-${item.id}`} style={[styles.dots, item.id === 2 ? styles.activeDot : null]} />
        </View>

      </View>
    );
  }
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended, styles.articles]}>
        <Text style={{ fontWeight: 'bold' }}>Recommended</Text>
        <Text></Text>
      </View>

    );
  }
  componentDidMount() {
    this.LoadInitState();
   }
   LoadInitState = async () => {
    this.props.getUserToken()
    .then(() => {
        this.props.getProfile(this.props.token)
    })
    .catch(error => {
      console.log(error)
    })
    
  }
  render() {
      // console.log(this.props.profile);
    return (
      <View style={[styles.flex]}>
        <View style={[styles.row, styles.header, { backgroundColor: '#f8f8f8' }]}>
          <View>
            <Text>Search for place</Text>
            <Text style={{ fontSize: 24 }}>Profile</Text>
          </View>
          <View>
            <Menu
              ref={this.setMenuRef}
              button={
                <TouchableOpacity onPress={this.showMenu}>
                  <Image source={require('../../assets/img/avatar.jpg')} style={styles.avatar} />
                </TouchableOpacity>
              }
            >
              <MenuItem onPress={this.hideMenu}>Edit Profile</MenuItem>
              <MenuItem onPress={this.hideMenu}>Log Out</MenuItem>
            </Menu>
            <View style={{ width: 14, height: 14, position: 'absolute', borderRadius: 14, right: 2, top: -2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 10, }}> </Text>
            </View>
          </View>
        </View>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    )
  }
}
Articles.defaultProps = {
  destinations: mocks
}

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { getProfile, getUserToken })(Articles);
