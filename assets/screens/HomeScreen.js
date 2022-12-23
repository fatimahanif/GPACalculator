import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ScrollView style={styles.mainScroll}>
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../images/logo3.png')} />
        <Text style={{...styles.headText, color: colors.notification}}>
          Welcome to Fatima's GPA Calculator!
        </Text>

        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: colors.notification,
            backgroundColor: colors.background,
          }}
          onPress={() => {
            navigation.navigate('Calculator');
          }}>
          <AntDesign name="calculator" size={30} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            Calculate your GPA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: colors.notification,
            backgroundColor: colors.background,
          }}
          onPress={() => {
            navigation.navigate('About');
          }}>
          <AntDesign name="profile" size={30} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            About Me
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    backgroundColor: '#F8EDE3',
  },
  view: {
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  headText: {
    fontSize: 24,
    paddingVertical: 12,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
  button: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1.5,
    margin: 10,
    borderRadius: 3,
    // justifyContent: 'space-between',
    elevation: 4,
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});

export default HomeScreen;
