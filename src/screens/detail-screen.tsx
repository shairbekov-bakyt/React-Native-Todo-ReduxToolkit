import {Text, View} from 'react-native';

export const DetailTodo = (props: {item: string; index: number}) => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>{props.item}</Text>
    </View>
  );
};
