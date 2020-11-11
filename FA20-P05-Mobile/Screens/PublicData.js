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
import { statusBar, buttonColor, buttonOutlineColor } from "./Main";
import { Separator } from "./Login";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

import { isLoadingContext } from "../Context/IsLoadingContext";
import { activeSchoolsContext } from "../Context/ActiveSchoolsContext";

import ApiGetTempsBySchoolId from "../ApiCalls/ApiGetTempsBySchoolId";

export default function PublicData({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [schoolPickedValue, setSchoolPickedValue] = useState([]);
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
      try {
        let res = await ApiGetTempsBySchoolId(schoolPickedValue, date);
        if (res.status == "200") {
          // show data somehow.
        }
      } catch {} // <--- Should definitely put stuff in here in case res.status is not 200
    }

    hideDatePicker();
    setIsLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          alignSelf: "center",
          height: 600,
          width: 325,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Separator />
        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            width: 250,
            alignSelf: "center",
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
        <Text style={{ textAlign: "center" }}>Date selected: </Text>
      </View>
      <View>
        <Separator />
        <Button
          title="Back to Main"
          type="outline"
          buttonStyle={styles.button}
          titleStyle={{ color: "white", fontFamily: "serif" }}
          onPress={() => navigation.navigate("Main")}
        ></Button>
      </View>
    </View>
  );
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
    marginTop: 20,
    borderColor: buttonOutlineColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
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
