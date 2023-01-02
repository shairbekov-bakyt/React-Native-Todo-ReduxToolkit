import {Text, View, Button} from 'react-native';
import {removeTodo} from '../features/todo/todoSlice';
import {useDispatch} from 'react-redux';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 54px 14px;
  background-color: #1e1a3c;
`;

const TodoWrapper = styled.View`
  border-radius: 12px;
  background-color: #3e3364;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px 10px;
  max-height: 50px;
`;

const TodoText = styled.Text`
  color: #fff;
  width: 70%;
  font-size: 13px;
`;

const DeleteBtnWrapper = styled.Pressable`
  border: 1px solid #1e1a3c;
  border-radius: 7px;
`;

export const DetailTodo = ({navigation, route}) => {
  const {task, index} = route.params;
  const dispatch = useDispatch();

  return (
    <Container>
      <TodoWrapper>
        <TodoText>{task}</TodoText>
        <DeleteBtnWrapper
          onPress={() => {
            dispatch(removeTodo(index));
            navigation.goBack();
          }}>
          <Text> Delete</Text>
        </DeleteBtnWrapper>
      </TodoWrapper>
      <Button title="Home" onPress={() => navigation.goBack()} />
    </Container>
  );
};
