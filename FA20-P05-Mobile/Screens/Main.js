<script src="http://localhost:8097"></script>;
import * as React from "react";
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

import { Button } from "react-native-elements";

export const buttonColor = "rgba(100, 150, 0, .70)";
export const screenBackgroundColor = "rgba(50, 50, 50, .50)";
export const statusBar = "rgba(110, 140, 0, .60)";

function Separator() {
  return <View style={styles.separator} />;
}

export default class Main extends React.Component {
  render() {
    let user = this.context;

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
                This is where we will have some info about our website, and what
                it aims to accomplish.
              </Text>
            </View>
          </ImageBackground>
          <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
          <View style={styles.box}>
            <Text
              style={{
                textAlign: "center",
                padding: 30,
                fontSize: 15,
                fontFamily: "serif",
              }}
            >
              This is where we will explain what public data is, who is
              recording this data and explain that it is in no way associated
              with an individual in accordance with HIPAA guidelines.
            </Text>
            <Button
              title="View Public Data"
              type="outline"
              buttonStyle={styles.button}
              titleStyle={{ color: "white", fontFamily: "serif" }}
              onPress={() => this.props.navigation.navigate("PublicData")}
            ></Button>
          </View>
          <View style={styles.box}>
            <Text
              style={{
                textAlign: "center",
                padding: 30,
                fontSize: 15,
                fontFamily: "serif",
              }}
            >
              This is where we will explain what personal data is, and how it is
              safely recorded with no association linking student to their
              personal data in any sort of database.
            </Text>
            <Button
              title="View Personal Data"
              type="outline"
              buttonStyle={styles.buttonWide}
              titleStyle={{ color: "white", fontFamily: "serif" }}
              onPress={() => this.props.navigation.navigate("PersonalData")}
            ></Button>
          </View>

          {/*changes button and it's navigation depending on whether the user is logged in */}
          {user ? (
            <View style={styles.box}>
              <Text
                style={{
                  textAlign: "center",
                  padding: 30,
                  fontSize: 15,
                  fontFamily: "serif",
                }}
              >
                "Recording Temperatures" is only viewable/accessible to staff
                members. Upon clicking this button, they will be navigated to a
                screen to begin logging student temperatures.
              </Text>
              <Button
                title="Record Temperatures"
                type="outline"
                buttonStyle={styles.buttonWide}
                titleStyle={{ color: "white", fontFamily: "serif" }}
                onPress={() => this.props.navigation.navigate("RecordTemps")}
              ></Button>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={[
                  {
                    color: "white",
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontSize: 18,
                  },
                ]}
              >
                Log in here
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }
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

  separator: {
    marginVertical: 10,
  },
});
