import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
import { BASE_URL } from '../env.js';

export default class Registration extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.textBox}></TextInput>
        <TextInput placeholder="Email" style={styles.textBox}></TextInput>
        <TextInput placeholder="Password" style={styles.textBox} ></TextInput>
        <TextInput placeholder="Confirm Password" style={styles.textBox}></TextInput>

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]} onPress={() => this.props.navigation.navigate('Main')}>Create Account</Text>
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
    borderBottomColor: 'rgba(125, 125, 125, 0.60)',
    borderBottomWidth: 1
  },
  button: {
    height: 55,
    width: 120,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(200, 20, 0, 0.60)",
  },
});
