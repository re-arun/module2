import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  Alert,
  
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal  from 'react-native-modal';
import react, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
const {height, width} = Dimensions.get('window');
const Allsport = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [value, setValue] = useState(null);
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const Country = [
    {
      value: '1',
      label:'India',
    },
    {
      value: 'India',
    },
    {
      value: 'England',
    },
    {
      value: 'Itly',
    },
    {
      value: 'America',
    },
  ];
  const valuee = [
    {
      value: '100',
    },
    {
      value: '200',
    },
    {
      value: '300',
    },
    {
      value: '400',
    },
    {
      value: '500',
    },
  ];

  const List = [
    {
      key: '1',
      img: require('../../assets/images/bet/crickt.png'),
    },
    {
      key: '2',
      img: require('../../assets/images/bet/crickt.png'),
    },
  ];

  const Sport = [
    {
      txt1: 'Circket',
      src: require('../../assets/images/Winsum/circket.png'),
    },
    {
      txt1: 'Soccer',
      src: require('../../assets/images/Winsum/scon.png'),
    },
    {
      txt1: 'Football',
      src: require('../../assets/images/Winsum/football.png'),
    },
    {
      txt1: 'Table ',
      src: require('../../assets/images/Winsum/table.png'),
    },
    {
      txt1: 'Hockey',
      src: require('../../assets/images/Winsum/hockey.png'),
    },
    {
      txt1: 'Handball',
      src: require('../../assets/images/Winsum/handball.png'),
    },

    {
      txt1: 'Baseball',
      src: require('../../assets/images/Winsum/base.png'),
    },

    {
      txt1: 'Boxing',
      src: require('../../assets/images/Winsum/boxing.png'),
    },
  ];
  const List1 = [
    {
      date: '22',
      country: 'May',
      match: 'Indian premire League 2022',
      time: '22:30',
      land1: 'Ireland',
      land2: 'Netherland',
      icc: ' ICC World Cup 2021',
      trans1: ' DEPOSIT',
      trans2: ' WITHDRAW',
      contxt: 'Top 10 Tranding Matches',
      contxt1: 'Start in',
      contxt2: 'Play',
      contxt3: '08',
      contxt5: ' 21 ',
      contxt7: ' 46',
      contxt8: ' 12 k players have arlready enrolled Winner!',
      flag: require('../../assets/images/bet/ireland.jpg'),
      flag1: require('../../assets/images/bet/netherland.png'),
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
          {/* <View style={styles.SportV}>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                paddingLeft: 20,
              }}>
              ALL SPORTS
            </Text>
          </View> */}
        </View>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        
      />
        <View style={styles.lstv}>
          <FlatList
            data={List}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <View style={styles.lst}>
                  <Image source={item.img} style={{height: 160, width: 300}} />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.lstv1}>
          <FlatList
            data={Sport}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <View style={styles.Sportlst}>
                  <TouchableOpacity>
                    <View style={styles.sportFlat}>
                      <Image source={item.src} style={{height: 40}} />

                      <Text> {item.txt1}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.AccountV}>
          <View style={styles.yourAccount}>
            <View style={styles.YourACC}>
              <Text style={{fontWeight: 'bold', color: 'rgb( 150,150,150)'}}>
                Your Account
              </Text>
            </View>

            <View
              style={{
                height: height * 0.056,
                width: width * 0.75,
                // alignSelf: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                // backgroundColor: 'red',
              }}>
              <Image
                source={require('../../assets/images/bet/one.png')}
                style={{height: 40, width: 35}}
              />
              <Text style={{fontSize: 38, color: 'rgb( 173,173,173)'}}>
                $ 0.00
              </Text>
            </View>

            <View style={styles.DWith}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.Deposite}>
                  <Text style={{color: 'white'}}>DEPOSIT</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.withdraw}>
                  <Text style={{}}>WITHDRAW</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <SafeAreaView>
              <View style={styles.Bet}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View style={[styles.ComV1]}>
                      <Text style={{color: 'white'}}>Instent Bet</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.ComV}>
                      <Text>Create your Own Bet</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={[styles.Win]}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    Predict who will win ?
                  </Text>
                </View>

                <View style={[styles.Countr]}>
                  <TouchableOpacity>
                    <View style={[styles.Countr1]}>
                      <Text>Ireland </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={[styles.Countr1]}>
                      <Text>Netherland </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.Countr2}>
                  <Text> Choose the currency in which you want to bet </Text>
                </View>

                <View style={styles.SelectCountry}>
                  <Dropdown
                    placeholder="- Select your currency -"
                    valueField="value"
                    data={Country}
                  />
                </View>
                <View style={styles.Countr3}>
                  <Text> Place your bet </Text>
                </View>

                <View style={styles.SelectCountry}>
                  <Dropdown
                    placeholder=" 0.00"
                    data={valuee}
                    valueField="value"
                  />
                </View>
                <View style={styles.Countr4}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    Who do you want to challenge ?
                  </Text>
                </View>

                <View style={styles.Countr5}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(' Winsum')}>
                    <View style={[styles.Countr6]}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Pick Opponent
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <View style={[styles.Countr7]}>
                      <Text> Cancel </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </View>

        <View style={styles.Trand}>
          <Text style={{fontWeight: 'bold', fontSize: 19}}>
            Top 10 Trending Match
          </Text>
        </View>

        <View style={styles.lstv3}>
          <FlatList
            data={List1}
            horizontal={false}
            renderItem={({item}) => {
              return (
                <View style={styles.lst2}>
                  <View style={styles.cupMV}>
                    <View style={styles.ICC}>
                      <View style={styles.DateV}>
                        <Text>{item.date}</Text>
                        <Text> {item.country} </Text>
                        <Text> {item.time}</Text>
                      </View>
                      <View>
                        <View style={styles.CupWorld}>
                          <Text style={{fontWeight: 'bold', paddingLeft: 8}}>
                            {item.icc}
                          </Text>
                        </View>
                        <View style={styles.flagV}>
                          <Text> {item.land1}</Text>
                          <Image
                            source={item.flag}
                            style={{height: 28, width: 25}}
                          />
                          <View style={(style = styles.comprasion)}>
                            <Text>Vs</Text>
                          </View>
                          <Image
                            source={item.flag1}
                            style={{height: 25, width: 25}}
                          />
                          <Text> {item.land2}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.TimerV}>
                      <View style={styles.startIn}>
                        <Text>{item.contxt1}</Text>
                      </View>
                      <View style={styles.DateMonthV}>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt3}
                          </Text>
                        </View>
                        <Text style={{color: 'rgb( 93,44,155)', fontSize: 20}}>
                          :
                        </Text>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                            borderRadius: 5,
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt5}
                          </Text>
                        </View>
                        <Text style={{color: 'rgb( 93,44,155)', fontSize: 20}}>
                          :
                        </Text>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt7}
                          </Text>
                        </View>
                      </View>

                      {/* modal */}

                      <TouchableOpacity>
                        <View style={styles.play}>
                          <Text
                            style={{
                              height: 18,
                              width: 30,
                              borderRadius: 28,
                              color: 'rgb( 100,198,31)',
                            }}>
                            {item.contxt2}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.Player}>
                      <Text style={{color: 'rgb(93,44,155)'}}>
                        {item.contxt8}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cupMV}>
                    <View style={styles.ICC}>
                      <View style={styles.DateV}>
                        <Text>{item.date}</Text>
                        <Text> {item.country} </Text>
                        <Text> {item.time}</Text>
                      </View>
                      <View>
                        <View style={styles.CupWorld}>
                          <Text style={{fontWeight: 'bold', paddingLeft: 8}}>
                            {item.icc}
                          </Text>
                        </View>
                        <View style={styles.flagV}>
                          <Text> {item.land1}</Text>
                          <Image
                            source={item.flag}
                            style={{height: 28, width: 25}}
                          />
                          <View style={(style = styles.comprasion)}>
                            <Text>Vs</Text>
                          </View>
                          <Image
                            source={item.flag1}
                            style={{height: 25, width: 25}}
                          />
                          <Text> {item.land2}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.TimerV}>
                      <View style={styles.startIn}>
                        <Text>{item.contxt1}</Text>
                      </View>
                      <View style={styles.DateMonthV}>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt3}
                          </Text>
                        </View>
                        <Text style={{color: 'rgb( 93,44,155)', fontSize: 20}}>
                          :
                        </Text>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                            borderRadius: 5,
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt5}
                          </Text>
                        </View>
                        <Text style={{color: 'rgb( 93,44,155)', fontSize: 20}}>
                          :
                        </Text>
                        <View
                          style={{
                            height: 20,
                            width: 30,
                            backgroundColor: 'rgb( 223,211,235)',
                          }}>
                          <Text style={{color: 'rgb( 93,44,155)'}}>
                            {item.contxt7}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.play}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              height: 18,
                              width: 30,
                              borderRadius: 28,
                              color: 'rgb( 100,198,31)',
                            }}>
                            {item.contxt2}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.Player}>
                      <Text style={{color: 'rgb(93,44,155)'}}>
                        {item.contxt8}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Allsport;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
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
  lstv: {
    height: height * 0.2,
    width: width * 0.95,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  lstv1: {
    height: height * 0.071,
    width: width * 0.95,
    alignSelf: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'skyblue',
    borderWidth: 1,
    // alignItems: 'center',
    borderColor: 'rgb( 211,209,209)',
  },
  lst: {
    height: height * 0.18,
    width: width * 0.8,
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'cyan',
  },

  Sportlst: {
    height: height * 0.068,
    width: width * 0.2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },

  //
  //

  AccountV: {
    // height: height * 0.6,
    width: width * 0.96,
    // backgroundColor: 'skyblue',
    borderColor: 'rgb(225,225,225)',
    borderWidth: 2,
    alignSelf: 'center',
  },
  yourAccount: {
    height: height * 0.17,
    width: width * 1,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  Deposite: {
    height: height * 0.046,
    width: width * 0.35,
    backgroundColor: 'yellow',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgb( 0,207,127)',
  },
  withdraw: {
    height: height * 0.046,
    width: width * 0.35,
    backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgb( 232,50,59)',
  },
  DWith: {
    height: height * 0.065,
    width: width * 0.78,
    flexDirection: 'row',
    alignSelf: 'center',
    //  backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  YourACC: {
    height: height * 0.036,
    // backgroundColor: 'green',
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //==>
  Trand: {
    height: height * 0.069,
    width: width * 0.96,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  // ====> flet 2

  cupMV: {
    height: height * 0.21,
    width: width * 0.94,
    // backgroundColor: 'cyan',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgb( 225,225,225)',
  },
  ICC: {
    height: height * 0.12,
    width: width * 0.94,
    // backgroundColor: 'green',
    // alignItems:'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  DateV: {
    height: height * 0.088,
    width: width * 0.16,
    // backgroundColor: 'red',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRightWidth: 2,
    borderColor: 'rgb( 239,239, 239)',
  },
  TimerV: {
    height: height * 0.04,
    width: width * 0.9,
    // backgroundColor: 'brown',
    borderBottomWidth: 3,
    borderColor: 'rgb( 239,239, 239)',

    flexDirection: 'row',
    // justifyContent:'space-evenly'
    alignItems: 'center',
  },
  flagV: {
    height: height * 0.075,
    width: width * 0.78,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  DateMonthV: {
    height: height * 0.027,
    width: width * 0.6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  startIn: {
    height: height * 0.025,
    width: width * 0.2,
    // backgroundColor: 'red',

    justifyContent: 'center',
    alignItems: 'center',
  },
  Player: {
    height: height * 0.043,
    width: width * 0.88,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgb( 215,239,218)',
    borderColor: 'rgb( 239,239, 239)',
  },
  CupWorld: {
    height: 42,

    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  Sport12: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  sportFlat: {
    height: 60,
    width: 70,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  comprasion: {
    height: 22,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: 'rgb( 211,209,209)',
  },

  //=====> modal

  Bet: {
    height: height * 0.68,
    width: width * 0.88,
    backgroundColor: 'rgb(255,255,255)',
    alignSelf: 'center',
    marginTop: 90,
    borderWidth: 1,
    borderColor: 'rgb(130,130,130)',
  },
  ComV: {
    height: 60,
    width: width * 0.44,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ComV1: {
    height: 60,
    width: width * 0.44,
    backgroundColor: 'rgb( 93,44,155)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Win: {
    height: 70,
    width: width * 0.55,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Countr: {
    height: 88,
    width: width * 0.88,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Countr1: {
    height: 60,
    width: width * 0.35,
    // backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: 'rgb(215,215,215)',
  },
  Countr2: {
    height: 60,
    width: width * 0.82,
    // backgroundColor: 'green',
    // alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectCountry: {
    height: 60,
    width: width * 0.82,
    // backgroundColor: 'red',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: 'rgb(207,207,207)',
    justifyContent: 'center',
    // alignItems:'center'
  },
  Countr3: {
    height: 60,
    width: width * 0.4,
    // backgroundColor: 'green',
    // alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Countr4: {
    height: 60,
    width: width * 0.82,
    // backgroundColor: 'green',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Countr5: {
    height: 88,
    width: width * 0.88,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Countr6: {
    height: 50,
    width: width * 0.4,
    backgroundColor: 'rgb( 71,30,127 )',
    borderRadius: 21,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
  },
  Countr7: {
    height: 50,
    width: width * 0.35,
    backgroundColor: 'green',
    borderRadius: 21,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
  },
  // Back: {
  //   height: 25,
  //   width: width * 0.35,
  //   // backgroundColor:'red',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   borderRadius: 21,
  // },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
