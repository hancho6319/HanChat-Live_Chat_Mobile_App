import { useLayoutEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  styles,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../constants/Title";
import Input from "../constants/Inputs";
import Button from "../constants/Button";
// import api from "../core/api";
// import utils from "../core/utils";
// import useGlobal from "../core/global";

function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

//  const login = useGlobal((state) => state.login);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function onSignIn() {
    console.log("onSignIn:", username, password);

    // Check username
    const failUsername = !username;
    if (failUsername) {
      setUsernameError("Please Enter Your Username");
    }
    // Check password
    const failPassword = !password;
    if (failPassword) {
      setPasswordError("Please Enter Your Password");
    }
    // Break out of this function if there were any issues
    if (failUsername || failPassword) {
      return;
    }
    // Make signin request
    // api({
    // 	method: 'POST',
    // 	url: '/chat/signin/',
    // 	data: {
    // 		username: username,
    // 		password: password
    // 	}
    // })
    // .then(response => {
    // 	utils.log('Sign In:', response.data)

    // 	const credentials = {
    // 		username: username,
    // 		password: password
    // 	}
    // 	login(
    // 		credentials,
    // 		response.data.user,
    // 		response.data.tokens
    // 	)
    // })
    // .catch(error => {
    // 	if (error.response) {
    // 		console.log(error.response.data);
    // 		console.log(error.response.status);
    // 		console.log(error.response.headers);
    // 	} else if (error.request) {
    // 		console.log(error.request);
    // 	} else {
    // 		console.log('Error', error.message);
    // 	}
    // 	console.log(error.config);
    // })
    navigation.navigate("Hanchat")
  }

  return (
    <LinearGradient colors={["#00009c", "#a4a4ff"]} style={{flex: 1}}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
                style={{
                  paddingTop: 40,
                  color: "#ffffff",
                  textAlign: "center",
                  marginBottom: 24,
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                Welcome Back To Hanchat
              </Text>
			<Text style={{
				alignSelf: "center",
				fontSize: 22,
				color: "#ffffff",
				margin: 30
			}}> Sign In</Text>

            <Input
              title="Username"
              value={username}
              error={usernameError}
              setValue={setUsername}
              setError={setUsernameError}
            />

            <Input
              title="Password"
              value={password}
              error={passwordError}
              setValue={setPassword}
              setError={setPasswordError}
              secureTextEntry={true}
            />

            <Button title="Sign In" onPress={onSignIn} />

            <Text style={{ textAlign: "center", marginTop: 40 }}>
              Don't have an account?{" "}
              <Text
                style={{ color: "blue" }}
                onPress={() => navigation.navigate("Sign Up")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

export default SignInScreen;
