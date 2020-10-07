import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Main extends React.Component {

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.text}>Welcome to our mobile app: This is Main</Text>
            <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('PublicData')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 15 }]}>View Public Data</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('PersonalData')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 15 }]}>View Personal Data</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]}>Log in here</Text></TouchableOpacity>
           
      </View>
    )
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
    height: 40,
    width: 150,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 200,
    marginBottom: 10,
    backgroundColor: "rgba(200, 20, 0, 0.60)",
    justifyContent: "center"
  },
  
  buttonWide: {
    height: 35,
    width: 175,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    backgroundColor: "rgba(200, 20, 0, 0.60)",
    justifyContent: "center"
  },

  text: {
      fontSize: 16
  }
});
