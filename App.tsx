import {Text} from 'react-native';
// Redux Toolkit imports
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
// Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from './src/screens/main-screen';
import {DetailTodo} from './src/screens/detail-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen name="Detail" component={DetailTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
