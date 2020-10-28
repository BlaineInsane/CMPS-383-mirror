import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { statusBar, buttonColor, screenBackgroundColor } from "./Main";
import { Button } from "react-native-elements";
import { ScrollPicker } from "react-native-value-picker";
import { Picker } from "@react-native-picker/picker";
import { Separator } from "./Login";

import { TEMPERATURE_PICKER_NUMBERS } from "../Data/ValuePickerTemps";
import { userSchoolsContext } from "../Context/UserSchoolsContext";

export default function RecordTemps({ navigation }) {
  const [pickedValue, setPickedValue] = useState(98.6);
  const [schoolPickedValue, setSchoolPickedValue] = useState([]);
  const { userSchools } = useContext(userSchoolsContext); // <-- array of school objects

  // creates items(school names) to be put in the dropdown box(Picker)
  const PickerList = userSchools.map((school) => {
    return (
      <Picker.Item label={school.name} value={school.name} key={school.id} />
    );
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
      <View style={styles.box}>
        <Text style={styles.text}>Choose School:</Text>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 20,
            width: 150,
          }}
        >
          <Picker
            selectedValue={schoolPickedValue}
            style={{
              height: 45,
              width: 150,
              color: "black",
            }}
            onValueChange={(itemValue) => setSchoolPickedValue(itemValue)}
          >
            {PickerList}
          </Picker>
        </View>
        <Separator />
        <Text style={styles.text}>Record Temperatures:</Text>
        <View
          style={{
            height: 160,
            width: 200,
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollPicker
            currentValue={pickedValue}
            extraData={pickedValue}
            list={TEMPERATURE_PICKER_NUMBERS}
            onItemPress={setPickedValue}
            labelColor="black"
            separatorColor="black"
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
    borderWidth: 1,
    backgroundColor: "rgba(110, 170, 0, .50)",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "serif",
  },

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 550,
    marginTop: 20,
    alignItems: "center",
  },
});
