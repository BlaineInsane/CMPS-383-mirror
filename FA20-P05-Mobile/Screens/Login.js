import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ApiLogin from "../ApiCalls/ApiLogin";
import { UserContext } from "../Context/UserContext";
import { isLoadingContext } from "../Context/IsLoadingContext";

import { buttonColor, screenBackgroundColor, statusBar } from "./Main";

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
      alert("please check email and password");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
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
  text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
});

export default Login;
