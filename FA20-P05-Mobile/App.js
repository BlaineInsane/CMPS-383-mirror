
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Screens/Main';
import Login from './Screens/Login';
import PublicData from './Screens/PublicData';
import PersonalData from './Screens/PersonalData';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="PublicData" component={PublicData}/>
        <Stack.Screen name="PersonalData" component={PersonalData}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;