//import * as React from "react";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { headerColor, buttonColor } from "./Screens/Main";
import { UserContext } from "./Context/UserContext";
import { isLoadingContext } from "./Context/IsLoadingContext";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import statusBar from "./Screens/Main";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import PublicData from "./Screens/PublicData";
import PersonalData from "./Screens/PersonalData";
import Staff from "./Screens/Staff";
import QRGen from "./Screens/QRCodeGen";
import RecordTemps from "./Screens/RecordTemps";
import ApiMe from "./ApiCalls/ApiMe";
import Spinner from "react-native-loading-spinner-overlay";


const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkIfLoggedIn();
  }, []); // the empty array makes this effect run only once

  const checkIfLoggedIn = async () => {
    try {
      let res = await ApiMe();
      if (res.status == "200") {
        setUser(res.data);
        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Spinner visible={isLoading} textContent={"Loading"} />
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
      </isLoadingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
