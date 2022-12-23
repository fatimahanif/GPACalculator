import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './assets/screens/HomeScreen';
import CalculatorScreen from './assets/screens/CalculatorScreen';
import AboutScreen from './assets/screens/AboutScreen';

const CustomTheme = {
  colors: {
    primary: '#F8EDE3',
    background: '#F8EDE3',
    card: '#85586F',
    text: '#F8EDE3',
    notification: '#85586F',
  },
};

const App: () => Node = () => {
  const Drawer = createDrawerNavigator();
  const {colors} = useTheme();
  return (
    <>
      <StatusBar />
      <NavigationContainer theme={CustomTheme}>
        <Drawer.Navigator screenOptions={{headerTintColor: '#F8EDE3'}}>
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
