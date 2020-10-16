//import * as React from "react";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import PublicData from "./Screens/PublicData";
import PersonalData from "./Screens/PersonalData";
import Staff from "./Screens/Staff";
import { UserContext } from "./UserContext";
import { useEffect } from "react";
import ApiMe from "./ApiCalls/ApiMe";

const headerColor = "rgba(50, 120, 150, 1.0)";
const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkIfLoggedIn();
  }, []); // the empty array makes this effect run only once

  const checkIfLoggedIn = async () => {
    try {
      let res = await ApiMe();
      if (res.status == "200") {
        setUser(res.data);
      }
    } catch {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Main Page",
              headerStyle: {
                backgroundColor: headerColor,
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
                backgroundColor: headerColor,
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
                backgroundColor: headerColor,
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
                backgroundColor: headerColor,
              },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Staff"
            component={Staff}
            options={{
              title: "Staff",
              headerStyle: {
                backgroundColor: headerColor,
              },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
