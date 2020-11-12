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

export const buttonOutlineColor = "rgba(100, 130, 0, 1.0)";
export const buttonColor = "rgba(142, 175, 95, 1.0)";
export const screenBackgroundColor = "rgba(50, 50, 50, .50)";
export const statusBar = "rgba(110, 140, 0, .60)";

function Separator() {
  return <View style={styles.separator} />;
}

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
    <ScrollView style={{ backgroundColor: screenBackgroundColor }}>
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
        <Text style={styles.welcome}>HealthShare</Text>
        <View
          style={{
            backgroundColor: "rgba(50, 50, 50, .70)",
            height: 95,
            justifyContent: "center",
            padding: 5,
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
            Creating trust by being transparent with school health statistics.
            Don't worry, we do not store any personally identifiable information
            about students.
          </Text>
        </View>
      </ImageBackground>
      <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          View the number of students that were sent home due to high
          temperature readings.
        </Text>
        <Button
          title="View Public Data"
          type="outline"
          buttonStyle={styles.button}
          titleStyle={{ color: "white", fontFamily: "serif" }}
          onPress={() => navigation.navigate("PublicData")}
        ></Button>
      </View>

      {/*                  CODE FOR PERSONAL DATA BUTTON              */}
      {/*
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
        */}

      {/*                   CODE FOR QR CODE BUTTON                   */}

      {/*<View style={styles.box}>         
          <Text style={styles.boxText}>
            This is where a student can navigate to a generated barcode - this
            should assign their temperature to a random id, while still allowing
            them to see their personal history.
          </Text>
          <Button
            title="QR Code"
            type="outline"
            buttonStyle={styles.buttonWide}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => navigation.navigate("UserQRCode")}
          ></Button>
        </View>*/}

      {/*changes button and it's navigation depending on whether the user is logged in */}
      {user !== null ? (
        <>
          <View style={styles.box}>
            <Text style={styles.boxText}>
              Record student temperatures at the school you are currently
              working at.
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
            <Separator />
            <Button
              title="Logout"
              type="outline"
              buttonStyle={styles.button}
              titleStyle={{ color: "white", fontFamily: "serif" }}
              onPress={handleLogout}
            ></Button>
          </View>
        </>
      ) : (
        <View style={styles.logInOutBox}>
          <Text style={styles.boxText}>Staff Member log in</Text>
          <Button
            buttonStyle={styles.button}
            title="Log In"
            type="outline"
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => navigation.navigate("Login")}
          ></Button>
        </View>
      )}
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
    borderColor: buttonOutlineColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
    marginBottom: 20,
  },

  buttonWide: {
    marginTop: 0,
    borderColor: buttonOutlineColor,
    width: 185,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
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
    padding: 20,
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
    height: 150,
    width: 335,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: "center",
  },

  logInOutBox: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    height: 120,
    width: 335,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignSelf: "center",
  },

  separator: {
    marginVertical: 10,
  },

  buttonText: {
    fontFamily: "serif",
    fontSize: 18,
    color: "white",
  },
});

export default Main;
