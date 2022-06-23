import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const Bitbharat = ({navigation}) => {
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

  //   const [email, setEmail] = useState('');
  //   const [errorEmail, setErrorEmail] = useState('');

  //   const [password, setPassword] = useState('');
  //   const [errorPassword, setErrorPassword] = useState('');

  //   const emailValidate = email => {
  //     var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (email === '' || email === undefined || email === null) {
  //       setErrorEmail('please enter email');
  //     } else if (!Regex.test(email)) {
  //       setErrorEmail('Please enter valid email');
  //     } else {
  //       setErrorEmail(null);
  //     }
  //   };

  //   const passwordValidate = password => {
  //     var Regex =
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  //     if (password === '' || password === undefined || password === null) {
  //       setErrorPassword('Please enter password');
  //     } else if (!Regex.test(password)) {
  //       setErrorPassword('Please enter valid password');
  //     } else {
  //       setErrorPassword(null);
  //     }
  //   };

  //   const validate = () => {
  //     const flag = true;
  //     if (email === '') {
  //       // setErrorEmail('Please enter email');
  //       return !flag;
  //     }
  //     if (password === '') {
  //       setErrorPassword('Please enter password');
  //     }
  //     return flag;
  //   };

  //   const onSubmit = () => {
  //     if (validate()) {
  //       // alert('Sussessful');
  //       props.navigation.navigate('Winsum');
  //     } else {
  //       alert('Something went wrong');
  //     }
  //   };

  return (
    <SafeAreaView>
      <View style={styles.maincontiner}>
        <View style={styles.CrossV}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/BItbharat/cross.jpg')}
              style={{height: 25, width: 25}}
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
            Bitbharat Account Login
          </Text>
        </View>
        <View style={styles.mailPhoneV}>
          <View style={styles.mail}>
            <Text style={{fontSize: 20, color: 'rgb( 60,104, 133)'}}>
              Email
            </Text>
          </View>
          <View style={styles.phone}>
            <Text style={{fontSize: 20, color: 'rgb( 60,104, 133)'}}>
              Phone number
            </Text>
          </View>
        </View>

        <View style={styles.txtEmail}>
          <Text style={{fontSize: 20, color: 'rgb(72,118,147)'}}> Email </Text>
        </View>

        <View style={styles.EmailInputV}>
          <View
            style={{
              backgroundColor: 'rgb( 0,39,65)',
              height: height * 0.062,
              width: width * 0.14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/BItbharat/email.jpg')}
              style={{height: 15, width: 25}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={'rgb( 60,104, 133)'}
              // placeholderTextColor={'rgb( 60,104, 133)'}
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
              height: height * 0.062,
              width: width * 0.14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/BItbharat/lock.jpg')}
              style={{height: 25, width: 28}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter your Password"
              placeholderTextColor={'rgb( 60,104, 133)'}
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

        <View style={styles.squre}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/BItbharat/squre.jpeg')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{fontSize: 18, color: 'rgb(0,168,195)', paddingLeft: 10}}>
              Remember me
            </Text>
          </View>
        </View>

        <View style={styles.check}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/BItbharat/check.jpeg')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{fontSize: 18, paddingLeft: 10, color: 'rgb(0,168,195)'}}>
              Please click captcha button
            </Text>
          </View>
        </View>
        <View style={styles.TouchableTV}>
          <TouchableOpacity onPress={() => onSubmit('')}>
            <View style={styles.Touchable}>
              <Text style={{fontSize: 21, color: 'white'}}> Log In</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.forget}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: 'rgb(0,168,195)'}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: 'underline',
                color: 'rgb(0,168,195)',
              }}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bitbharat;

const styles = StyleSheet.create({
  maincontiner: {
    height: height * 1,
    width: width * 1,

    backgroundColor: 'rgb( 0,26,43)',
  },

  header: {
    height: height * 0.15,
    width: width * 0.88,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  mail: {
    height: height * 0.04,
    width: width * 0.21,
    borderRadius: 3,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb( 0,40, 66)',
  },
  phone: {
    height: height * 0.04,
    width: width * 0.31,
    // borderRadius:3,
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailPhoneV: {
    flexDirection: 'row',
    height: height * 0.048,
    width: width * 0.64,
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  txtEmail: {
    height: height * 0.05,
    width: width * 0.26,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPass: {
    height: height * 0.05,
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
  squre: {
    height: height * 0.069,
    width: width * 0.48,
    flexDirection: 'row',
    // backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent:'space-evenly',
  },
  check: {
    height: height * 0.07,
    width: width * 0.88,
    backgroundColor: 'rgb(0,40,66)',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 20,
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
  register: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
  },
  forget: {
    height: height * 0.07,
    width: width * 0.88,
    alignSelf: 'center',
    alignItems: 'center',
  },
  CrossV: {
    alignItems: 'flex-end',
    height: height * 0.055,
    width: width * 0.94,
    // backgroundColor: 'cyan',
    paddingTop: 15,
  },
});
