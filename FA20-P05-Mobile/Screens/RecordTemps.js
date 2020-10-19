import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Button } from "react-native-elements";
import { ScrollPicker } from "react-native-value-picker";
import { Separator } from "./Login";
import { TEMP_DATA } from "../Data/TempData";

import { statusBar, buttonColor, screenBackgroundColor } from "./Main";

export default function RecordTemps({ navigation }) {
  const [pickedValue, setPickedValue] = useState(98.6);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
      <View style={styles.box}>
        <Text style={styles.text}>Record Temperatures:</Text>
        <View
          style={{
            height: 160,
            width: 200,
            borderColor: "green",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollPicker
            currentValue={pickedValue}
            extraData={pickedValue}
            list={TEMP_DATA}
            onItemPress={setPickedValue}
            labelColor="black"
            separatorColor="green"
            selectedColor="blue"
          />
        </View>
        <Separator />
        <Text style={{ fontFamily: "serif" }}>
          Current Temperature:{" "}
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {pickedValue}
            {"\u00b0"} F
          </Text>
        </Text>
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
          onPress={() => navigation.navigate("Main")}
        ></Button>
      </View>
    </View>
  );
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
    height: 420,
    marginTop: 20,
    alignItems: "center",
  },
});
