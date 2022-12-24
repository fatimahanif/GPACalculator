import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Switch,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {DarkTheme, NavigationContainer, useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './assets/screens/HomeScreen';
import CalculatorScreen from './assets/screens/CalculatorScreen';
import AboutScreen from './assets/screens/AboutScreen';

const Light = {
  colors: {
    primary: '#F8EDE3',
    background: '#F8EDE3',
    card: '#85586F',
    text: '#F8EDE3',
    notification: '#85586F',
  },
};

const Dark = {
  colors: {
    primary: '#85586F',
    background: '#85586F',
    card: '#F8EDE3',
    text: '#85586F',
    notification: '#F8EDE3',
  },
};

const App: () => Node = () => {
  const Drawer = createDrawerNavigator();
  const {colors} = useTheme();

  React.useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); setDark(!dark);}
  const [dark, setDark] = React.useState(false);

  return (
    <>
      <StatusBar />
      <NavigationContainer theme={dark ? Dark : Light}>
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: dark ? '#85586F' : '#F8EDE3',
            headerRight: () => (
              <Switch
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={isEnabled ? '#85586F' : '#F8EDE3'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ),
          }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({focused}) => (
                <Ionicons
                  name="home-outline"
                  size={16}
                  color={focused ? colors.background : '#DFD3C3'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Calculator"
            component={CalculatorScreen}
            options={{
              drawerIcon: ({focused}) => (
                <AntDesign
                  name="calculator"
                  size={16}
                  color={focused ? colors.background : '#DFD3C3'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={AboutScreen}
            options={{
              drawerIcon: ({focused}) => (
                <AntDesign
                  name="profile"
                  size={16}
                  color={focused ? colors.background : '#DFD3C3'}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
