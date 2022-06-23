import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Allsport from '../Winsum All sports/Allsport';
const {width, height} = Dimensions.get('window');

const Level = ({navigation}) => {
  const Flat = [
    {
      // src: require('../../../assets/images/Level/smile.jpg'),
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'New Guy',
      name1: ' You competed the welcome tutorail',
      touchable: ' Collect',
    },
    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },
    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },

    {
      src: require('../../assets/images/Level/smile.jpg'),
      name: 'Lorem',
      name1: ' lorem  ipsum dolor amet,consectur',
      touchable: ' Collect',
      name2: 'adipicing elit',
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.midView}>
        <View style={styles.maincontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image
              source={require('../../assets/images/Level/leftarrow.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 21}}> Achivements </Text>
        </View>
        <View style={styles.LevelView}>
          <Image
            source={require('../../assets/images/Level/line.jpeg')}
            style={{height: height * 0.17, width: width * 0.94}}
          />
        </View>

        <FlatList
          data={Flat}
          renderItem={({item}) => {
            return (
              <View style={styles.container1}>
                <Image source={item.src} style={{height: 62, width: 60}} />
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 17}}>
                    {item.name}
                  </Text>

                  <Text> {item.name1}</Text>
                  <Text> {item.name2}</Text>
                </View>
                <View style={styles.CollectV}>
                  <TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {item.touchable}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Level;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: ' rgb(93,44,155)',
    height: height * 0.07,
    width: width * 0.94,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  LevelView: {
    height: height * 0.17,
    width: width * 1,
  },

  midView: {
    height: height * 1,
    width: width * 0.94,
    // backgroundColor: 'red',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgb(231,231,231)',
  },

  container1: {
    height: height * 0.07,
    width: width * 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(231,231,231)',

    borderRadius: 2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  CollectV: {
    height: height * 0.03,
    width: width * 0.18,
    backgroundColor: 'rgb(93,44,155)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
