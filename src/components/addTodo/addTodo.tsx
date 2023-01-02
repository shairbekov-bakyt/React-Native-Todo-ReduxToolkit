import React, {useState} from 'react';
import {addItem} from '../../features/todo/todoSlice';
import {useDispatch} from 'react-redux';

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TaskInputField = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        value={task}
        onChangeText={setTask}
        style={styles.inputField}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(addItem(task));
          setTask('');
        }}>
        <Text>add</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#3E3364',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskInputField;
