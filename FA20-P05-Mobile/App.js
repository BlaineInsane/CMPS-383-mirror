import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import PublicData from "./Screens/PublicData";
import PersonalData from "./Screens/PersonalData";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main Page",
            headerStyle: {
              backgroundColor: "rgba(50, 120, 150, 1.0)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Log In",
            headerStyle: {
              backgroundColor: "rgba(50, 120, 150, 1.0)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="PublicData"
          component={PublicData}
          options={{
            title: "Public Data",
            headerStyle: {
              backgroundColor: "rgba(50, 120, 150, 1.0)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
          options={{
            title: "Personal Data",
            headerStyle: {
              backgroundColor: "rgba(50, 120, 150, 1.0)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
