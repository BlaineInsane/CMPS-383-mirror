import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Button } from "react-native-elements";
import ApiLogin from "../ApiCalls/ApiLogin";
import { UserContext } from "../Context/UserContext";
import { isLoadingContext } from "../Context/IsLoadingContext";

import { buttonColor, screenBackgroundColor, statusBar } from "./Main";

export function Separator() {
  return <View style={styles.separator} />;
}
//TODO: create frontend stuff if login returns 400

function Login({ navigation }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(isLoadingContext);

  const handleUsernameChange = (event) => {
    setUsername(event);
  };
  const handlePasswordChange = (event) => {
    setPassword(event);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      let res = await ApiLogin(Username, Password);
      if (res.status == "200") {
        const theUser = {
          Username: res.data.username,
          staffId: res.data.staffId,
        };
        setUser(theUser);
        setIsLoading(false);
        navigation.navigate("Staff");
      }
    } catch {
      alert("Invalid username and/or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Separator />
        <Text style={{ fontSize: 18, fontFamily: "serif" }}>
          Staff Member Login Screen:
        </Text>

        <Separator />
        <StatusBar hidden={false} backgroundColor={statusBar}></StatusBar>
        <TextInput
          placeholder="Username"
          style={styles.textBox}
          onChangeText={handleUsernameChange}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.textBox}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        ></TextInput>
        <Button
          buttonStyle={styles.button}
          type="outline"
          title="Log In"
          titleStyle={{ color: "white", fontFamily: "serif" }}
          onPress={handleSubmit}
        ></Button>
      </View>
    </View>
  );
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
  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 230,
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    marginTop: 0,
    borderColor: buttonColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "rgba(110, 170, 0, .50)",
  },
  text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
  separator: {
    marginVertical: 10,
  },
});

export default Login;
