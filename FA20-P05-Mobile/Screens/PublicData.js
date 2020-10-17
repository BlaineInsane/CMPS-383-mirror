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
import { statusBar, buttonColor } from "./Main";

export default class PublicData extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
        <View style={styles.box}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              fontFamily: "serif",
            }}
          >
            Public Data:
          </Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Text style={styles.text}>Placeholder Dummy Data</Text>
          <Button
            title="Back to Main"
            type="outline"
            buttonStyle={styles.button}
            titleStyle={{ color: "white", fontFamily: "serif" }}
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
    backgroundColor: "rgba(50, 50, 50, .60)",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 150,
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
    marginTop: 20,
  },

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 600,
    marginTop: 20,
  },
});