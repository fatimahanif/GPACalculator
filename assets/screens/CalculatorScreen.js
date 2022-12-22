import React from 'react';
import {Text, ScrollView, StyleSheet, View, Image} from 'react-native';

const CalculatorScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.mainScroll}>
      <View style={styles.view}>
        {/* <Image style={styles.logo} source={require('../images/logo2.png')} /> */}
        <Text style={styles.text}>GPA Calculator</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    backgroundColor: '#fff',
  },
  view: {
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: 'black',
    fontSize: 19,
  },
});

export default CalculatorScreen;
