
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Screens/Main';
import Login from './Screens/Login';
import Registration from './Screens/Registration';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registration" component={Registration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;