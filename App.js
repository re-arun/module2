import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Allsport from './src/screens/Winsum All sports/Allsport';
import Account from './src/screens/Your account/Account';
import Level from './src/screens/Level/Level';
import Winsum from './src/screens/Winsum/Winsum';
import Details from './src/screens/Account details/Details';
import Transaction from './src/screens/all transaction/Transaction';
import Bitbharat from './src/screens/bitbharat/Bitbharat';

function HomeScreen ({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to AllSport"
        onPress={() => navigation.navigate('Allsport')}
      />
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate("Account")}
      />
      <Button
        title="Go to Level"
        onPress={() => navigation.navigate('Level')}
      />
      <Button
        title="Go to Winsum"
        onPress={() => navigation.navigate(' Winsum')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Transaction"
        onPress={() => navigation.navigate('Transaction')}
      />
      <Button
        title="Go to Bitbharat"
        onPress={() => navigation.navigate('Bitbharat')}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Allsport" component={Allsport} />

        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name=" Winsum" component={Winsum} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Bitbharat" component={Bitbharat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({});
