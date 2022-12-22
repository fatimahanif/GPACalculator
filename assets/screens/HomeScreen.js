import React from 'react';
import {Text, ScrollView, StyleSheet, View, Image, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.mainScroll}>
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../images/logo3.png')} />
        <Text style={styles.text}>Welcome to Fatima's GPA Calculator!</Text>

        <View>
          <AntDesign name="calculator" size={30} color="#000" />
          <Ionicons name="home" size={30} color="#000" />
        </View>

        <Button
          title="Calculate"
          onPress={() => {
            navigation.navigate('Calculator');
          }}
        />
        <View style={{padding: 10}}></View>
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    backgroundColor: '#F8EDE3',
  },
  view: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: '#85586F',
    fontSize: 24,
    paddingVertical: 8,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
});

export default HomeScreen;
