import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const AboutScreen = ({navigation}) => {
  const {colors} = useTheme();
  const size = 22;
  return (
    <ScrollView style={styles.mainScroll}>
      <View style={styles.view}>
        <View style={styles.infoRow}>
          <Fontisto name="female" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            Fatima Hanif
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Fontisto name="date" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            31 August 2002
          </Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons
            name="computer"
            size={size}
            color={colors.notification}
          />
          <Text style={{...styles.text, color: colors.notification}}>
            Web & Mobile App Developer
          </Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5
            name="graduation-cap"
            size={size}
            color={colors.notification}
          />
          <Text style={{...styles.text, color: colors.notification}}>
            BS Software Engineering
          </Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="school" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            COMSATS University Islamabad
          </Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5
            name="phone-alt"
            size={size}
            color={colors.notification}
          />
          <Text style={{...styles.text, color: colors.notification}}>
            +92-318-5152910
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Entypo name="email" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            fatimahanif303@gmail.com
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Fontisto name="github" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            fatimahanif
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Entypo
            name="linkedin-with-circle"
            size={size}
            color={colors.notification}
          />
          <Text style={{...styles.text, color: colors.notification}}>
            fatima-hanif-30a5931b1
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Entypo name="location" size={size} color={colors.notification} />
          <Text style={{...styles.text, color: colors.notification}}>
            Islamabad, Pakistan
          </Text>
        </View>
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    width: '85%',
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});

export default AboutScreen;
