import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, StatusBar, Alert } from "react-native";
import ApiTemps from "../ApiCalls/ApiTemps";
import {
  statusBar,
  buttonColor,
  screenBackgroundColor,
  buttonOutlineColor,
  boxColor,
  pickerColor,
} from "../Styles/Colors";
import { Button } from "react-native-elements";
import { ScrollPicker } from "react-native-value-picker";
import { Picker } from "@react-native-picker/picker";
import { Separator } from "../Components/Separator";

import { TEMPERATURE_PICKER_NUMBERS } from "../Data/ValuePickerTemps";
import { userSchoolsContext } from "../Context/UserSchoolsContext";
import { isLoadingContext } from "../Context/IsLoadingContext";

export default function RecordTemps() {
  const [pickedValue, setPickedValue] = useState();
  const [schoolId, setId] = useState();
  const [schoolPickedValue, setSchoolPickedValue] = useState();
  const [temperatureKelvin, setTempKelvin] = useState();
  const { userSchools } = useContext(userSchoolsContext); // <-- array of school objects
  const { setIsLoading } = useContext(isLoadingContext);

  // creates items(school names) to be put in the dropdown box(Picker)
  const PickerList = userSchools.map((school) => {
    return (
      <Picker.Item label={school.name} value={school.id} key={school.id} />
    );
  });

  const idBySchool = userSchools.map((school) => {
    return school.id;
  });

  const handleTempChange = (event) => {
    setPickedValue(event);

    setId(
      schoolPickedValue != null ? schoolPickedValue : parseFloat(idBySchool)
    );
    setTempKelvin(parseFloat(event));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // checks if a temperature has been selected.
      if (isNaN(temperatureKelvin)) {
        setIsLoading(false);
        Alert.alert("Error", "Please select a temperature.");
      } else {
        let res = await ApiTemps(schoolId, temperatureKelvin);

        if (res.status == "201") {
          let temperatureMessage = "";
          if (temperatureKelvin >= 100.4) {
            temperatureMessage = "\nThis is an unhealthy temperature.";
          } else {
            temperatureMessage = "\nThis is a healthy temperature.";
          }
          Alert.alert(
            "Success",
            "Temperature " +
              temperatureKelvin +
              "\u00b0 F recorded." +
              temperatureMessage
          );
          setIsLoading(false);
        }
      }
    } catch {
      Alert.alert("Error", "Failed to record temperature ");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
      <View style={styles.box}>
        <Text style={styles.text}>Select School</Text>
        <Separator />
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 20,
            width: 250,
            backgroundColor: pickerColor,
          }}
        >
          <Picker
            selectedValue={schoolPickedValue}
            style={{
              height: 45,
              width: 250,
              color: "black",
            }}
            onValueChange={(itemValue) => setSchoolPickedValue(itemValue)}
          >
            {PickerList}
          </Picker>
        </View>

        <Text style={styles.text}>Record Temperature</Text>
        <Separator />
        <View
          style={{
            height: 160,
            width: 200,
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: pickerColor,
          }}
        >
          <ScrollPicker
            currentValue={pickedValue}
            extraData={pickedValue}
            list={TEMPERATURE_PICKER_NUMBERS}
            onItemPress={handleTempChange}
            labelColor="black"
            separatorColor="gray"
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
          titleStyle={styles.buttonText}
          title="Record"
          type="outline"
          onPress={handleSubmit}
        ></Button>
        {/*
        <Button
          buttonStyle={styles.buttonWide}
          titleStyle={styles.buttonText}
          title="Scan QR Code"
          type="outline"
          onPress={() => navigation.navigate("StaffQRCode")}
        ></Button>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 20,
    borderColor: buttonOutlineColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
  },

  buttonWide: {
    marginTop: 20,
    borderColor: buttonOutlineColor,
    width: 175,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "serif",
    marginTop: 20,
    color: "black",
  },

  box: {
    backgroundColor: boxColor,
    width: 340,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    elevation: 15,
  },
  buttonText: {
    fontFamily: "serif",
    fontSize: 17,
    color: "white",
  },
});
