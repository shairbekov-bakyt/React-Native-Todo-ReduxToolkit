import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

const Container = styled.View`
  flex-direction: row;
  margin: 2% 20px;
`;

const IndexContainer = styled.View`
  background-color: #3e3364;
  border-radius: 12px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const IndexContainerText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const TaskContainer = styled.View`
  border-radius: 12px;
  background-color: #3e3364;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px 10px;
  min-height: 50px;
`;

const TaskContainerText = styled.Text`
  color: #fff;
  width: 90%;
  font-size: 16px;
`;

const TaskItem = (props: {index: number; task: string}) => {
  return (
    <Container>
      <IndexContainer>
        <IndexContainerText>{props.index}</IndexContainerText>
      </IndexContainer>
      <TaskContainer>
        <TaskContainerText>{props.task}</TaskContainerText>
      </TaskContainer>
    </Container>
  );
};

export default TaskItem;
