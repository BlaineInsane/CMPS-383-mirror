//import * as React from "react";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserContext } from "./Context/UserContext";
import { isLoadingContext } from "./Context/IsLoadingContext";
import { userSchoolsContext } from "./Context/UserSchoolsContext";
import { activeSchoolsContext } from "./Context/ActiveSchoolsContext";
import { useEffect } from "react";
import { Alert } from "react-native";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import PublicData from "./Screens/PublicData";
import PersonalData from "./Screens/PersonalData";
import Staff from "./Screens/Staff";
import RecordTemps from "./Screens/RecordTemps";
import UserQRCode from "./Screens/UserQRCode";
import StaffQRCode from "./Screens/StaffQRCode";
import ApiMe from "./ApiCalls/ApiMe";
import ApiGetUserSchools from "./ApiCalls/ApiGetUserSchools";
import Spinner from "react-native-loading-spinner-overlay";
import ApiGetAllActiveSchools from "./ApiCalls/ApiGetAllActiveSchools";

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userSchools, setUserSchools] = useState([]);
  const [activeSchools, setActiveSchools] = useState([]);

  useEffect(() => {
    checkIfLoggedIn();
    getActiveSchools();
  }, []); // the empty array makes this effect run only once

  const checkIfLoggedIn = async () => {
    try {
      let res = await ApiMe();
      if (res.status == "200") {
        setUser(res.data);

        // get array of schools the user is employed at and store in userSchoolsContext
        let schools = await ApiGetUserSchools();
        setUserSchools(schools.data);
      }
    } catch {}
  };

  const getActiveSchools = async () => {
    try {
      const res = await ApiGetAllActiveSchools();
      if (res.status == "200") {
        setActiveSchools(res.data);
        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
      Alert.alert("Error", "Could not contact server. Please restart the app.");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <userSchoolsContext.Provider value={{ userSchools, setUserSchools }}>
          <activeSchoolsContext.Provider
            value={{ activeSchools, setActiveSchools }}
          >
            <Spinner visible={isLoading} />
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
                <Stack.Screen
                  name="UserQRCode"
                  component={UserQRCode}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="StaffQRCode"
                  component={StaffQRCode}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </activeSchoolsContext.Provider>
        </userSchoolsContext.Provider>
      </isLoadingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
