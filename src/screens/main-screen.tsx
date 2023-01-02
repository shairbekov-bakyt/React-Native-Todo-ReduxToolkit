import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import type {RootState} from '../redux/store';
import styled from 'styled-components/native';
import Task from '../components/todoItem/todoItem';
import AddTask from '../components/addTodo/addTodo';
const Container = styled.View`
  padding: 0 14px;
  padding-top: 34px;
  flex: 1;
  background-color: #1e1a3c;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 5%;
`;

export const MainScreen = ({navigation}) => {
  const todo = useSelector((state: RootState) => state.todo.todo);

  return (
    <Container>
      <Title>Todo List</Title>
      {todo.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Detail', {task, index})}>
          <Task key={index} index={index} task={task} />
        </TouchableOpacity>
      ))}
      <AddTask />
    </Container>
  );
};
