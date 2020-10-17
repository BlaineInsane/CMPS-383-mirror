import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { buttonColor, screenBackgroundColor, statusBar } from "./Main";

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>

        <Text style={styles.text}>This is a page only for staff members:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("RecordTemps")}
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
            Back to Main
          </Text>
        </TouchableOpacity>
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
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "rgba(100, 170, 0, .50)",
  },
  text: {
    fontSize: 18,
  },
});
