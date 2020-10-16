<script src="http://localhost:8097"></script>;
import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Button } from "react-native-elements";

export const buttonColor = "rgba(200, 20, 0, 0.60)";
export const screenBackgroundColor = "rgba(125, 125, 125, 0.10)";
export const headerColor = "rgba(50, 120, 150, 1.0)";

function Separator() {
  return <View style={styles.separator} />;
}

export default class Main extends React.Component {
  render() {
    let user = this.context;

    return (
      <View style={styles.container}>
        <View style={styles.boxColor}>
          <Text style={styles.text}>Welcome to our mobile app:</Text>
        </View>
        <Separator />
        <Button
          title="View Public Data"
          type="outline"
          raised
          titleStyle={{ color: "white" }}
          buttonStyle={{
            backgroundColor: buttonColor,
            borderColor: "black",
          }}
          onPress={() => this.props.navigation.navigate("PublicData")}
        ></Button>
        <Separator />
        <Button
          title="View Personal Data"
          type="outline"
          raised
          titleStyle={{ color: "white" }}
          buttonStyle={{
            backgroundColor: buttonColor,
            borderColor: "black",
          }}
          onPress={() => this.props.navigation.navigate("PersonalData")}
<<<<<<< Updated upstream
        >
          <Text
            style={[
              {
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 18,
              },
            ]}
          >
            View Personal Data
          </Text>
        </TouchableOpacity>

        {/*changes button and it's navigation depending on whether the user is logged in */}
        {user ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Staff")}
          >
            <Text
              style={[
                {
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                },
              ]}
            >
              Record temps
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text
              style={[
                {
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 18,
                },
              ]}
            >
              Log in here
            </Text>
          </TouchableOpacity>
        )}
=======
        ></Button>
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <Button
          title="Log In"
          type="outline"
          raised
          titleStyle={{ color: "white" }}
          buttonStyle={{
            backgroundColor: buttonColor,
            outline: buttonColor,
            borderColor: "black",
          }}
          onPress={() => this.props.navigation.navigate("Login")}
        ></Button>
>>>>>>> Stashed changes
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

  button: {
    height: 40,
    width: 120,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 200,
    marginBottom: 10,
    backgroundColor: buttonColor,
    justifyContent: "center",
  },

  buttonWide: {
    height: 35,
    width: 180,
    padding: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    backgroundColor: buttonColor,
    justifyContent: "center",
  },

  boxColor: {
    backgroundColor: headerColor,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },

  separator: {
    marginVertical: 10,
  },

  text: {
    fontSize: 18,
    color: "white",
  },
});
