import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native-elements";
import { buttonColor, buttonOutlineColor } from "../Styles/Colors";

const { width } = Dimensions.get("window");
const qrSize = width * 1.5;

export default class StaffQRCode extends Component {
  state = {
    CameraPermissionGranted: null,
  };
  async componentDidMount() {
    // Ask for camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      CameraPermissionGranted: status === "granted" ? true : false,
    });
  }

  barCodeScanned = ({ data }) => {
    //Access the Data
    alert(data);
  };

  render() {
    const { CameraPermissionGranted } = this.state;
    if (CameraPermissionGranted === null) {
      // Request Permission
      return (
        <View style={styles.container}>
          <Text>Please grant Camera permission</Text>
        </View>
      );
    }
    if (CameraPermissionGranted === false) {
      // Permission denied
      return (
        <View style={styles.container}>
          <Text>Camera Permission Denied.</Text>
        </View>
      );
    }
    if (CameraPermissionGranted === true) {
      // Got the permission, time to scan
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={this.barCodeScanned}
            style={{
              height: qrSize,
              width: qrSize,
            }}
          ></BarCodeScanner>
          <Button
            title="Record Temps"
            type="outline"
            buttonStyle={styles.button}
            titleStyle={{ color: "white", fontFamily: "serif" }}
            onPress={() => this.props.navigation.navigate("RecordTemps")}
          ></Button>
        </View>
      );
    }
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
    marginTop: 30,
    width: 185,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
    borderColor: buttonOutlineColor,
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 400,
    padding: 45,
  },
});
