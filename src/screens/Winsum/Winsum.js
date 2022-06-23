import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const Winsum = ({navigation}) => {
  const Flat = [
    {
      src: require('../../assets/images/Winsum/circket.png'),
      name: 'circket',
      touchable: ' { 52}',
    },
    {
      src: require('../../assets/images/Winsum/scon.png'),
      name: 'soccer',
      touchable: ' { 12}',
    },
    {
      src: require('../../assets/images/Winsum/football.png'),
      name: 'Football',
      touchable: ' { 252}',
    },
    {
      src: require('../../assets/images/Winsum/table.png'),
      name: 'Table Tennis',
      touchable: ' { 252}',
    },

    {
      src: require('../../assets/images/Winsum/hockey.png'),
      name: 'hockey',
      touchable: ' { 252}',
    },

    {
      src: require('../../assets/images/Winsum/handball.png'),
      name: 'Handball',
      touchable: ' {52}',
    },

    {
      src: require('../../assets/images/Winsum/base.png'),
      name: 'Baseball',
      touchable: ' { 52 }',
    },

    {
      src: require('../../assets/images/Winsum/boxing.png'),
      name: 'Boxing',
      touchable: ' {52}',
    },

    {
      src: require('../../assets/images/Winsum/ice.png'),
      name: 'Ice Hockey  ',
      touchable: ' {52}',
    },

    {
      src: require('../../assets/images/Winsum/basketball.png'),
      name: 'Basketball',
      touchable: ' {52}',
    },

    {
      src: require('../../assets/images/Winsum/australian.png'),
      name: 'Australian Rules',
      touchable: ' {52}',
    },
    {
      src: require('../../assets/images/Winsum/bed.png'),
      name: 'badminton',
      touchable: ' {52}',
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
        <View style={styles.header}>
          <View style={styles.headerV}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Winsum/threedot.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>

            <Image
              source={require('../../assets/images/Winsum/win.png')}
              style={{height: 30, width: 110}}
            />
          </View>

          <View style={styles.headerV1}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Winsum/search.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Winsum/bell.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Winsum/wallet.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.allSport}>
          <View style={styles.SportV}>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                paddingLeft: 20,
              }}>
              ALL SPORTS
            </Text>
          </View>
        </View>
        <View style={styles.FlastV}>
          <FlatList
            data={Flat}
            renderItem={({item}) => {
              return (
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <View style={styles.TextImage}>
                      <View style={styles.titaleImgV}>
                        <Image
                          source={item.src}
                          style={{height: 42, width: 40}}
                        />
                      </View>
                      <View style={styles.sportName}>
                        <TouchableOpacity>
                          <Text style={styles.txtsportname}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.CollectV}>
                      <Text style={{color: 'rgb(75,73,73)', fontSize: 12}}>
                        {item.touchable}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.BottomV}>
          <View style={styles.BottomV1}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Allsport')}>
              <Image
                source={require('../../assets/images/Winsum/home.png')}
                style={{height: 50, width: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Winsum/refres.png')}
                style={{height: 50, width: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{height: 70, width: 65}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Level')}>
              <Image style={{height: 50, width: 35}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(' Account')}>
              <Image style={{height: 50, width: 35}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Winsum;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: 'skyblue',
  },
  header: {
    height: height * 0.09,
    width: width * 1,
    backgroundColor: 'rgb(90,43,150)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerV: {
    height: height * 0.06,
    width: width * 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  headerV1: {
    height: height * 0.06,
    width: width * 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
  },
  container1: {
    height: height * 0.06,
    width: width * 1,
    // backgroundColor: 'blue',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(231,231,231)',
    borderRadius: 2,
    alignSelf: 'center',
  },

  CollectV: {
    height: height * 0.03,
    width: width * 0.18,
    // backgroundColor: 'rgb(93,44,155)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  BottomV: {
    height: height * 0.088,
    width: width * 1,
    backgroundColor: 'rgb(90,43,150)',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
  },
  BottomV1: {
    height: height * 0.07,
    width: width * 0.99,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // alignSelf: 'center',
    alignSelf: 'center',
    // alignContent:'center',
    justifyContent: 'space-evenly',
  },
  FlastV: {
    height: height * 0.72,
    width: width * 1,
  },
  TextImage: {
    height: height * 0.058,
    width: width * 0.5,
    // backgroundColor: 'rgb(93,44,155)',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sportName: {
    height: height * 0.058,
    width: width * 0.33,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  titaleImgV: {
    height: height * 0.058,
    width: width * 0.1,
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  allSport: {
    height: height * 0.03,
    width: width * 1,
    backgroundColor: 'rgb(90,43,150)',

    justifyContent: 'center',
  },
  SportV: {
    height: height * 0.03,
    width: width * 0.25,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtsportname: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgb(75,73,73)',
  },
});
