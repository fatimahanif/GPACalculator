import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';

const CalculatorScreen = ({navigation}) => {
  const {colors} = useTheme();
  const size = 22;
  const [credit, setCredit] = useState('');
  const [grade, setGrade] = useState('');
  const [gpa, setGpa] = useState('');
  const [gpaList, setList] = useState([]);

  useEffect(() => {
    let entry = gradesList.find(value => value.key == grade);
    if (entry) setGpa(entry.key);
  }, [grade]);

  const creditsList = [
    {key: '4', value: '4'},
    {key: '3', value: '3'},
    {key: '2', value: '2'},
    {key: '1', value: '1'},
  ];

  const gradesList = [
    {key: '4.0', value: 'A'},
    {key: '3.7', value: 'A-'},
    {key: '3.3', value: 'B+'},
    {key: '3.0', value: 'B'},
    {key: '2.7', value: 'B-'},
    {key: '2.3', value: 'C+'},
    {key: '2.0', value: 'C'},
    {key: '1.7', value: 'C-'},
    {key: '1.3', value: 'D'},
    {key: '0.0', value: 'F'},
  ];

  const addGrade = () => {
    setList([
      ...gpaList,
      {
        key: Math.random().toString(),
        credits: credit,
        gpa: gpa,
        grade: grade,
      },
    ]);
  };

  const renderItem = ({item}) => (
    <Text>
      Credits: {item.credits} GPA: {item.gpa} Grade: {item.grade}
    </Text>
  );

  const calculateGPA = () => {
    let gpaProductsSum = 0;
    let creditsSum = 0;
    gpaList.forEach((value, index) => {
      gpaProductsSum += value.gpa * value.credits;
      creditsSum += parseInt(value.credits);
      console.log(creditsSum);
      console.log(gpaProductsSum);
    });
    alert('Your CGPA: ' + gpaProductsSum / creditsSum);
  };

  return (
    <ScrollView>
      <View style={styles.view}>
        <Text style={{...styles.headText, color: colors.notification}}>
          Calculate Your GPA
        </Text>

        <View style={styles.inputRow}>
          <SelectList
            setSelected={val => setCredit(val)}
            data={creditsList}
            save="key"
            placeholder="Credit Hours"
            search={false}
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdown}
          />
          <SelectList
            setSelected={val => setGrade(val)}
            data={gradesList}
            save="key"
            placeholder="Obtained Grade"
            search={false}
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdown}
          />
        </View>

        <Pressable
          style={{
            ...styles.button,
            borderColor: colors.notification,
            backgroundColor: colors.background,
          }}
          onPress={addGrade}
          disabled={grade == '' || credit == ''}>
          <Text style={{...styles.text, color: colors.notification}}>Add</Text>
        </Pressable>

        <View style={{...styles.scrollList, borderColor: '#85586F'}}>
          <FlatList
            data={gpaList}
            renderItem={({item}) => (
              <View style={{...styles.itemRow, borderColor: colors.card}}>
                <TouchableOpacity>
                  <Text style={styles.text}>
                    Credits: {item.credits} GPA: {item.gpa} Grade: {item.grade}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setList(list =>
                      gpaList.filter(element => element.key != item.key),
                    );
                  }}>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.key}
          />
        </View>

        <View style={styles.row}>
          <Pressable
            style={{
              ...styles.button,
              borderColor: colors.notification,
              backgroundColor: colors.background,
            }}
            onPress={() => {
              setList([]);
            }}
            disabled={gpaList.length < 1}>
            <Text style={{...styles.text, color: colors.notification}}>
              Clear List
            </Text>
          </Pressable>

          <Pressable
            style={{
              ...styles.button,
              borderColor: colors.notification,
              backgroundColor: colors.background,
            }}
            onPress={calculateGPA}
            disabled={gpaList.length < 1}>
            <Text style={{...styles.text, color: colors.notification}}>
              Calculate
            </Text>
          </Pressable>
        </View>
      </View>

      <Text></Text>
    </ScrollView>
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
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  row: {
    flexDirection: 'row',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.75,
  },
  delete: {
    color: 'red',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});

export default CalculatorScreen;
