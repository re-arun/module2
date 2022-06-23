import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {step1} from 'react-native/Libraries/Animated/Easing';

const {height, width} = Dimensions.get('window');

const Details = ({navigation}) => {
  // *********** Step-1 ***********
  const [Email, setEmail] = useState('');

  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  // Step-2
  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === '') {
      setErrorEmail('*Please enter email');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email');
    } else {
      setErrorEmail(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword('*Please enter  valid password');
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid password.');
    } else {
      setErrorPassword(null);
    }
  };

  // Step-3
  const validate = () => {
    let flag = true;
    if (Email === '') {
      // setErrorEmail('*Please enter email.');
      // flag = false;
      return !flag;
    }
    if (Password === '') {
      // setErrorPassword('*Please enter password--.');
      // flag = false;
      return !flag;
    }
    return flag;
  };

  // step-4
  const onSubmit = () => {
    if (validate()) {
      // alert('Success');
    navigation.navigate('Level');
    } else {
      alert('something went wrong');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.maincontiner}>
        <View style={styles.CrossV}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/detais/right.jpeg')}
              style={{height: 60, width: 45}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/BItbharat/cross.jpg')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              color: 'rgb( 285,300,300)',
              fontWeight: 'bold',
            }}>
            Enter Account Details
          </Text>
        </View>
        <View style={styles.txtEmail}>
          <Text style={{fontSize: 20, color: 'rgb(72,118,147)'}}> Email </Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.042,
              width: width * 0.12,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'red',
              borderRightWidth: 1,
            }}>
            <Image
              source={require('../../assets/images/BItbharat/email.jpg')}
              style={{height: 15, width: 25}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              // placeholderTextColor={'rgb( 60,104, 133)'}
              placeholderTextColor={'white'}
              color={'white'}
              keyboardType={'email-address'}
              maxLength={24}
              onChangeText={txt => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />
          </View>
        </View>

        {errorEmail !== null ? (
          <View
            style={{
              height: '2%',
              width: '80%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
          </View>
        ) : null}

        <View style={styles.txtPass}>
          <Text style={{fontSize: 20, color: 'rgb(72,118,147)'}}>Password</Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.042,
              width: width * 0.12,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'red',
              borderRightWidth: 1,
            }}>
            <Image
              source={require('../../assets/images/detais/lock.png')}
              style={{height: 25, width: 28}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your Password"
              // placeholderTextColor={'rgb( 60,104, 133)'}
              placeholderTextColor={'white'}
              keyboardType="email-address"
              color={'white'}
              secureTextEntry={false}
              maxLength={16}
              onChangeText={txt => {
                setPassword(txt), _passwordvalidate(txt);
              }}
            />
          </View>
        </View>

        {errorPassword !== null ? (
          <View
            style={{
              height: '2%',
              width: '80%',
              alignSelf: 'center',
              // backgroundColor: 'green',
            }}>
            <Text style={{color: 'red', fontSize: 16}}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.refferalId}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: ' rgb(72,118,147)',
            }}>
            Refferral Id (Optional)
          </Text>
          <Image
            source={require('../../assets/images/detais/showmore.jpeg')}
            style={{height: 27, width: 25}}
          />
        </View>

        <View style={styles.agree}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/detais/circle1.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
          <View style={styles.txtAgree}>
            <Text style={{color: 'rgb( 72,118,147)', paddingLeft: 10}}>
              i agreee to receive data for Conpany
            </Text>
          </View>
        </View>

        <View style={styles.agree2}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/detais/check1.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>

          <Text style={{color: 'rgb( 72,118,147)'}}>
            I agree to share data form marketing purpose
          </Text>
        </View>
        <View style={styles.TouchableTV}>
          <TouchableOpacity onPress={() => onSubmit()}>
            <View style={styles.Touchable}>
              <Text style={{fontSize: 21, color: 'white'}}> Next </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  maincontiner: {
    height: height * 1,
    width: width * 1,

    backgroundColor: 'rgb( 0,26,43)',
  },

  header: {
    height: height * 0.07,
    width: width * 0.88,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
  },

  txtEmail: {
    height: height * 0.06,
    width: width * 0.26,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPass: {
    height: height * 0.06,
    width: width * 0.34,
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmailInputV: {
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height * 0.07,
    width: width * 0.88,
    backgroundColor: 'rgb(0,39,65)',
    flexDirection: 'row',
    borderRadius: 8,
  },

  TouchableTV: {
    height: height * 0.14,
    width: width * 0.88,
    // backgroundColor:'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Touchable: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgb(0,138,181)',
    justifyContent: 'center',
  },

  CrossV: {
    // alignItems: 'flex-end',
    height: height * 0.075,
    width: width * 0.88,
    // backgroundColor: 'cyan',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  refferalId: {
    height: height * 0.075,
    width: width * 0.88,
    alignSelf: 'center',
    // backgroundColor: 'cyan',
    //  justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  agree: {
    height: height * 0.045,
    width: width * 0.81,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // alignSelf: 'center',
  },
  agree2: {
    height: height * 0.045,
    width: width * 0.88,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtAgree: {
    borderWidth: 3,
    borderColor: 'rgb(255,47,187)',
    // backgroundColor:'red'
  },
});
