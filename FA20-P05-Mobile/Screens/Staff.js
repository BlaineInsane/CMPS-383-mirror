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
import { buttonColor, screenBackgroundColor, statusBar } from "./Main";
import { Separator } from "./Login";

export default class Staff extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
          <Separator />
          <Text style={styles.text}>
            This is a page only for staff members:
          </Text>
          <Separator />
          <Button
            buttonStyle={styles.button}
            type="outline"
            title="Record Temperatures"
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => this.props.navigation.navigate("RecordTemps")}
          ></Button>
          <Separator />
          <Button
            buttonStyle={styles.button}
            type="outline"
            title="Other Staff Options"
            titleStyle={{ color: "white", fontFamily: "serif" }}
            //onPress={() => this.props.navigation.navigate("")}
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
    marginTop: 0,
    borderColor: buttonColor,
    width: 200,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "rgba(110, 170, 0, .50)",
  },
  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 210,
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "serif",
  },
});
