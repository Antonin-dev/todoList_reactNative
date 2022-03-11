import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

const TaskForm = ({onAddTask}: any) => {
  const [newTitle, setNewTitle] = useState('');
  const onChangeText = (value: React.SetStateAction<string>) =>
    setNewTitle(value);
  const onPress = () => {
    if (newTitle === '') {
      return null;
    }
    onAddTask(newTitle);
    setNewTitle('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder={'New task'}
      />
      <Button title={'add'} onPress={onPress} color={'blue'} />
    </View>
  );
};

export default TaskForm;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '70%',
    height: 40,
    padding: 5,
  },
});
