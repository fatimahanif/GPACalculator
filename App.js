import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useTheme} from '@react-navigation/native';

import HomeScreen from './assets/screens/HomeScreen';
import CalculatorScreen from './assets/screens/CalculatorScreen';
import AboutScreen from './assets/screens/AboutScreen';

const CustomTheme = {
  colors: {
    primary: '#F8EDE3',
    background: '#F8EDE3',
    card: '#85586F',
    text: '#F8EDE3',
  },
};

const App: () => Node = () => {
  const Drawer = createDrawerNavigator();
  const { colors } = useTheme();
  return (
    <>
      <StatusBar />
      <NavigationContainer theme={CustomTheme}>
        <Drawer.Navigator screenOptions={{ headerTintColor: '#F8EDE3' }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Calculator" component={CalculatorScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
