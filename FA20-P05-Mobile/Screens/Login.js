import React, { Component } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.textBox}></TextInput>
        <TextInput placeholder="Password" style={styles.textBox}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity><Text style={[{marginTop: 20, textDecorationLine: 'underline', color: 'gray'}]}>Create an account</Text></TouchableOpacity>
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
    borderBottomColor: 'rgba(125, 125, 125, 0.60)',
    borderBottomWidth: 1
    
  },
  button: {
    height: 35,
    width: 100,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(200, 20, 0, 0.60)",
  },
});
