import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, Text, View, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals((currGoalText) => [...currGoalText, enteredGoalText]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goals' onChangeText={goalInputHandler}/>
        <Button title='Add Goals' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
        {courseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding:5,
    margin:5,
    borderRadius:8,
    borderColor: '#cccccc',
    backgroundColor: '#5e0acc',
    color: 'white',
  }
});
