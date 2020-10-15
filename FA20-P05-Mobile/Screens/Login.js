import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ApiLogin from "../ApiCalls/ApiLogin";
import ApiMe from "../ApiCalls/ApiMe";

import { buttonColor, screenBackgroundColor } from "./Main";

//TODO: create frontend stuff if login returns 400

export default class Login extends Component {
  state = {
    Username: "",
    Password: "",
  };

  handleUsernameChange = (event) => {
    this.setState({ Username: event });
  };
  handlePasswordChange = (event) => {
    this.setState({ Password: event });
  };

  handleSubmit = async () => {
    try {
      let res = await ApiLogin(this.state.Username, this.state.Password);
      if (res.status == "200") {
        this.props.navigation.navigate("Staff");
      }
    } catch {
      alert("please check email and password");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          style={styles.textBox}
          onChangeText={this.handleUsernameChange}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.textBox}
          onChangeText={this.handlePasswordChange}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.text}>Log in</Text>
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
  textBox: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    marginBottom: 15,
    paddingHorizontal: 10,
    borderBottomColor: "rgba(125, 125, 125, 0.60)",
    borderBottomWidth: 1,
  },
  button: {
    height: 35,
    width: 100,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: buttonColor,
  },
  text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
});
