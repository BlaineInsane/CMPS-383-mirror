import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Button } from "react-native-elements";
import { statusBar, buttonColor, screenBackgroundColor } from "./Main";

export default class PublicData extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
        <View style={styles.box}>
          <Text style={styles.text}>Record Temps:</Text>
          <Button
            buttonStyle={styles.button}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            title="Record"
            type="outline"
            //onPress={() => this.props.navigation.navigate("Main")}
          ></Button>
          <Button
            buttonStyle={styles.button}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            title="Back to Main"
            type="outline"
            onPress={() => this.props.navigation.navigate("Main")}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 20,
    borderColor: buttonColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "rgba(100, 170, 0, .50)",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "serif",
  },

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 250,
    marginTop: 20,
  },
});
