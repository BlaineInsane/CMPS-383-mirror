//import * as React from "react";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { headerColor, buttonColor } from "./Screens/Main";
import { UserContext } from "./UserContext";
import { useEffect } from "react";
import { StatusBar } from "react-native";

import statusBar from "./Screens/Main";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import PublicData from "./Screens/PublicData";
import PersonalData from "./Screens/PersonalData";
import Staff from "./Screens/Staff";
<<<<<<< HEAD
import QRGen from "./Screens/QRCodeGen";
=======
import RecordTemps from "./Screens/RecordTemps";
import ApiMe from "./ApiCalls/ApiMe";
>>>>>>> 9715fb9d92a0d40e946415bc533ffabda5ae5c94

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
      //console.log(err);
    }
  };

  return (
<<<<<<< HEAD
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
        <Stack.Screen
          name="QRGen"
          component={QRGen}
          options={{
            title: "QR Code Generator",
            headerStyle: {
              backgroundColor: headerColor,
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PublicData"
            component={PublicData}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PersonalData"
            component={PersonalData}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Staff"
            component={Staff}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RecordTemps"
            component={RecordTemps}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
>>>>>>> 9715fb9d92a0d40e946415bc533ffabda5ae5c94
  );
}

export default App;
