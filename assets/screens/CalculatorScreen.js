import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';

const CalculatorScreen = ({navigation}) => {
  const {colors} = useTheme();
  const size = 22;

  const [credit, setCredit] = React.useState('');
  const [grade, setGrade] = React.useState('');

  const creditsList = [
    {key: '', value: '4'},
    {key: '', value: '3'},
    {key: '', value: '2'},
    {key: '', value: '1'},
  ];

  const gradesList = [
    {key: '', value: 'A'},
    {key: '', value: 'A-'},
    {key: '', value: 'B+'},
    {key: '', value: 'B'},
    {key: '', value: 'B-'},
    {key: '', value: 'C+'},
    {key: '', value: 'C'},
    {key: '', value: 'C-'},
    {key: '', value: 'D'},
    {key: '', value: 'F'},
  ];

  return (
    <View style={styles.view}>
      <Text style={{...styles.headText, color: colors.notification}}>
        Calculate Your GPA
      </Text>

      <View style={styles.inputRow}>
        <SelectList
          setSelected={val => setCredit(val)}
          data={creditsList}
          save="value"
          placeholder="Credit Hours"
          search={false}
          boxStyles={styles.dropdown}
          dropdownStyles={styles.dropdown}
        />
        <SelectList
          setSelected={val => setGrade(val)}
          data={gradesList}
          save="value"
          placeholder="Obtained Grade"
          search={false}
          boxStyles={styles.dropdown}
          dropdownStyles={styles.dropdown}
        />
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          borderColor: colors.notification,
          backgroundColor: colors.background,
        }}
        onPress={()=>{alert('grade: ' + grade + ' credits: ' + credit)}}
        >
        <Text style={{...styles.text, color: colors.notification}}>Add</Text>
      </TouchableOpacity>

      <ScrollView style={{...styles.scrollList, borderColor: '#85586F'}}>
        <Text>bnn</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#F8EDE3',
    paddingTop: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    width: '85%',
  },
  headText: {
    fontSize: 20,
    fontFamily: 'Nunito-Medium',
    paddingVertical: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dropdown: {
    margin: 8,
  },
  scrollList: {
    width: '85%',
    // paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    borderTopWidth: 0.75,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1.5,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 3,
    elevation: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});

export default CalculatorScreen;
