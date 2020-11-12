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
import ApiGetUserSchools from "../ApiCalls/ApiGetUserSchools";
import { UserContext } from "../Context/UserContext";
import { isLoadingContext } from "../Context/IsLoadingContext";
import { userSchoolsContext } from "../Context/UserSchoolsContext";
import { Separator } from "../Components/Separator";
import {
  buttonColor,
  buttonOutlineColor,
  screenBackgroundColor,
  statusBar,
} from "../Styles/Colors";

//TODO: create frontend stuff if login returns 400

function Login({ navigation }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(isLoadingContext);
  const { setUserSchools } = useContext(userSchoolsContext);

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

        // gets array of schools the user is employed at and puts in userSchoolsContext
        let schools = await ApiGetUserSchools();
        setUserSchools(schools.data);

        setIsLoading(false);
        navigation.navigate("Main");
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
          autoCapitalize={"none"}
          onChangeText={handleUsernameChange}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.textBox}
          autoCapitalize={"none"}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        ></TextInput>
        <Button
          buttonStyle={styles.button}
          type="outline"
          title="Log In"
          titleStyle={{ color: "white", fontFamily: "serif" }} //add back button later
          onPress={handleSubmit}
        ></Button>
        <Separator />
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

  box: {
    backgroundColor: "rgba(200, 200, 200, 1.0)",
    width: 340,
    height: 250,
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    marginTop: 0,
    borderColor: buttonOutlineColor,
    width: 150,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: buttonColor,
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
