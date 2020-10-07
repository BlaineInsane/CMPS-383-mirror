import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class PublicData extends React.Component {

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.text}>Public Data:</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')}><Text style={[{ color: "white", textAlign: "center", textAlignVertical: 'center', fontSize: 18 }]}>Back to Main</Text></TouchableOpacity>
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
    width: 130,
    padding: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    backgroundColor: "rgba(200, 20, 0, 0.60)",
    justifyContent: "center"
  },
  text: {
      fontSize: 18
  }
});
