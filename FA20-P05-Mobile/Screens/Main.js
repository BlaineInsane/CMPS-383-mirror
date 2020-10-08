import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const buttonColor = 'rgba(200, 20, 0, 0.60)';
export default class Main extends React.Component {

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.text}>Welcome to our mobile app:</Text>
            <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('PublicData')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]}>View Public Data</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('PersonalData')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]}>View Personal Data</Text></TouchableOpacity>

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

  button: {
    height: 40,
    width: 120,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 200,
    marginBottom: 10,
    backgroundColor: buttonColor,
    justifyContent: "center"
  },
  
  buttonWide: {
    height: 35,
    width: 180,
    padding: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    backgroundColor: buttonColor,
    justifyContent: "center"
  },

  text: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
