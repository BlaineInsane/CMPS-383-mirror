import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
  PointPropType,
} from "react-native";
import { Button } from "react-native-elements";
import moment from "moment";
import {
  statusBar,
  buttonColor,
  buttonOutlineColor,
  screenBackgroundColor,
  boxColor,
  goodTemp,
} from "../Styles/Colors";
import { Separator } from "../Components/Separator";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

import { isLoadingContext } from "../Context/IsLoadingContext";
import { activeSchoolsContext } from "../Context/ActiveSchoolsContext";

import ApiGetTempsBySchoolId from "../ApiCalls/ApiGetTempsBySchoolId";

export default function PublicData({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [schoolPickedValue, setSchoolPickedValue] = useState([]);
  const [datePicked, setDatePicked] = useState("");
  const [healthyTemps, setHealthyTemps] = useState("");
  const [unhealthyTemps, setUnhealthyTemps] = useState("");
  const { setIsLoading } = useContext(isLoadingContext);
  const { activeSchools } = useContext(activeSchoolsContext);

  const PickerList = activeSchools.map((school) => {
    return (
      <Picker.Item label={school.name} value={school.id} key={school.id} />
    );
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = async (date) => {
    setIsLoading(true);

    // checks to make sure the user didn't select a date from the future(dang time travelers)
    if (moment(date).isAfter(moment(Date.now()), "day")) {
      Alert.alert("Error", "Please select a non-future date.");
    } else {
      // set selected date to display.
      setDatePicked(moment(date).format("MMM Do YYYY"));
      try {
        let res = await ApiGetTempsBySchoolId(schoolPickedValue, date);
        if (res.status == "200") {
          setHealthyTemps(res.data.numHealthyTemps);
          setUnhealthyTemps(res.data.numUnhealthyTemps);
        }
      } catch {} // <--- Should definitely put stuff in here in case res.status is not 200
    }

    hideDatePicker();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Select School</Text>
        <Separator />
        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            width: 250,
            alignSelf: "center",
            backgroundColor: "rgba(240, 240, 240, 1.0)",
          }}
        >
          <Picker
            selectedValue={schoolPickedValue}
            style={{
              height: 45,
              width: 250,
              color: "black",
              alignSelf: "center",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "black",
            }}
            onValueChange={(itemValue) => setSchoolPickedValue(itemValue)}
          >
            {PickerList}
          </Picker>
        </View>
        <Separator />
        <Text style={styles.text}>-- AND --</Text>
        <Button
          title="Choose Date"
          buttonStyle={styles.button}
          titleStyle={{ color: "white", fontFamily: "serif" }}
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Separator />
        <Text style={{ textAlign: "center", fontFamily: "serif" }}>
          Date selected:{" "}
          <Text style={{ fontFamily: "serif", fontWeight: "bold" }}>
            {datePicked}
          </Text>
        </Text>
        <Separator />
        <View
          style={{
            backgroundColor: "rgba(240, 240, 240, 1.0)",
            width: 300,
            height: 100,
            alignSelf: "center",
            justifyContent: "center",
            elevation: 10,
            borderRadius: 20,
          }}
        >
          <Text style={styles.tempText}>
            Healthy temperatures:{" "}
            <Text style={{ color: goodTemp }}>{healthyTemps}</Text>
          </Text>
          <Separator />
          <Text style={styles.tempText}>
            Unhealthy temperatures:{" "}
            <Text style={{ color: "#A40606" }}>{unhealthyTemps}</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    justifyContent: "center",
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

  text: {
    fontSize: 20,
    fontFamily: "serif",
    textAlign: "center",
  },

  box: {
    backgroundColor: boxColor,
    width: 340,
    height: 400,
    marginTop: 20,
    elevation: 15,
    alignSelf: "center",
    justifyContent: "center",
  },

  tempText: {
    fontSize: 18,
    fontFamily: "serif",
    textAlign: "right",
    marginRight: 40,
  },
});
