import * as React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import { BASE_URL } from "../env.js";

//TODO: manage logged in user(cookies?)
//      create frontend stuff if login returns 400

export default class Login extends React.Component {
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

  handleSubmit = (event) => {
    const Username = this.state.Username;
    const Password = this.state.Password;

    // TODO: move axios call to ApiCalls/ApiLogin.js
    // I(Blaine) can't get that to work
    const loginUrl = `${BASE_URL}/api/authentication/login/`;

    axios
      .post(
        loginUrl,
        { Username, Password },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              { marginTop: 20, textDecorationLine: "underline", color: "gray" },
            ]}
            onPress={() => this.props.navigation.navigate("Registration")}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(125, 125, 125, 0.10)",
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
    backgroundColor: "rgba(200, 20, 0, 0.60)",
  },
  text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
});
