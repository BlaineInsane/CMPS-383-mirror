import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { UserContext } from "../Context/UserContext";
import { isLoadingContext } from "../Context/IsLoadingContext";
import { Button } from "react-native-elements";
import ApiLogout from "../ApiCalls/ApiLogout";

export const buttonColor = "rgba(100, 150, 0, .70)";
export const screenBackgroundColor = "rgba(50, 50, 50, .50)";
export const statusBar = "rgba(110, 140, 0, .60)";

function Main({ navigation }) {
  const { setIsLoading } = useContext(isLoadingContext);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      let username = user.Username;
      let staffid = user.staffId;

      setIsLoading(true);
      let res = await ApiLogout(username, staffid);

      setUser(null);
      setIsLoading(false);
    } catch {
      // If the server is down and the user can't hit the "Logout" endpoint
      // this will make the app still function as if they are logged out.
      // If the user then exits the app and they reopen it when the server is running they
      // will likely be still be logged in. Probably not a huge problem, but a potentially
      // weird behavior.
      setUser(null);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/tree.jpg")}
          resizeMode="contain"
          style={{
            width: 420,
            height: 315,
            alignSelf: "flex-start",
            marginBottom: 20,
          }}
        >
          <Text style={styles.welcome}>Welcome to our mobile app:</Text>
          <View
            style={{
              backgroundColor: "rgba(50, 50, 50, .70)",
              height: 75,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontFamily: "serif",
                padding: 30,
                marginRight: 30,
                textShadowColor: "black",
                textAlignVertical: "center",
                justifyContent: "center",
              }}
            >
              This is where we will have some info about our mobile application,
              and what it aims to accomplish.
            </Text>
          </View>
        </ImageBackground>
        <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            This is where we will explain what public data is, who is recording
            this data and explain that it is in no way associated with an
            individual in accordance with HIPAA guidelines.
          </Text>
          <Button
            title="View Public Data"
            type="outline"
            buttonStyle={styles.button}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => navigation.navigate("PublicData")}
          ></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            This is where we will explain what personal data is, and how it is
            safely recorded with no association linking student to their
            personal data in any sort of database.
          </Text>
          <Button
            title="View Personal Data"
            type="outline"
            buttonStyle={styles.buttonWide}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => navigation.navigate("PersonalData")}
          ></Button>
        </View>
        {/*changes button and it's navigation depending on whether the user is logged in */}
        {user !== null ? (
          <View>
            <View style={styles.box}>
              <Text style={styles.boxText}>
                "Recording Temperatures" is only viewable/accessible to staff
                members. Upon clicking this button, they will be navigated to a
                screen to begin logging student temperatures.
              </Text>
              <Button
                title="Record Temperatures"
                type="outline"
                buttonStyle={styles.buttonWide}
                titleStyle={{ color: "white", fontFamily: "serif" }}
                onPress={() => navigation.navigate("RecordTemps")}
              ></Button>
            </View>
            <View style={styles.logInOutBox}>
              <Text style={styles.boxText}>Staff Members log out here: </Text>
              <Button
                title="Logout"
                type="outline"
                buttonStyle={styles.buttonWide}
                titleStyle={{ color: "white", fontFamily: "serif" }}
                onPress={handleLogout}
              ></Button>
            </View>
          </View>
        ) : (
          <View style={styles.logInOutBox}>
            <Text style={styles.boxText}>Staff Members can log in here: </Text>
            <Button
              buttonStyle={styles.button}
              title="Log In"
              type="outline"
              titleStyle={{ color: "white", fontFamily: "serif" }}
              onPress={() => navigation.navigate("Login")}
            ></Button>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  button: {
    marginTop: 0,
    borderColor: buttonColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "rgba(100, 170, 0, .50)",
  },

  buttonWide: {
    marginTop: 0,
    borderColor: buttonColor,
    width: 185,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "rgba(100, 170, 0, .50)",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: 100,
  },

  boxText: {
    textAlign: "center",
    padding: 30,
    fontSize: 15,
    fontFamily: "serif",
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginTop: 100,
    fontFamily: "serif",
    padding: 30,
  },

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 210,
    marginBottom: 20,
  },

  logInOutBox: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 140,
    marginBottom: 20,
  },

  separator: {
    marginVertical: 10,
  },
});

export default Main;
