import { useLayoutEffect, useState } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Input from "../constants/Inputs";
import PhoneNumber from "../constants/Phonenumber";
import Button from "../constants/Button";

// import api from "../Core/api";
// import utils from "../Core/utilities";
// import useGlobal from "../Core/global";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [phoneNumber, setphoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  // const login = useGlobal((state) => state.login);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function onSignUpClick() {
    // Check Phone nummber
    const failPhoneNumber = !phoneNumber || phoneNumber.length < 10;
    if (failPhoneNumber) {
      setPhoneNumberError("Invalid Phone Number");
    }
    // Check username
    const failUsername = !username || username.length < 10;
    if (failUsername) {
      setUsernameError("Invalid Username");
    }
    // Check firstName
    const failFirstName = !firstName;
    if (failFirstName) {
      setFirstNameError("Please Enter First Name");
    }
    // Check last Name
    const failLastName = !lastName;
    if (failLastName) {
      setLastNameError("Please Enter Last Name");
    }
    // Check password1
    const failPassword1 = !password1 || password1 < 8;
    if (failPassword1) {
      setPassword1Error("Invalid Password");
    }
    // Check password2
    const failPassword2 = password1 !== password2;
    if (failPassword2) {
      setPassword2Error("Password doesn't match");
    }
    // Break out of the fucntion if there were any issues
    if (
      failPhoneNumber ||
      failUsername ||
      failFirstName ||
      failLastName ||
      failPassword1 ||
      failPassword2
    ) {
      return;
    }

    console.log("Sending request...");
    fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: "1234567890",
        username: "testuser",
        firstName: "John",
        lastName: "Doe",
        password1: "password123",
      }),
    })
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    navigation.navigate("Hanchat")

  }

  return (
    <LinearGradient colors={["#00009c", "#a4a4ff"]} style={styles.gradient}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 16,
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
              Sign Up
            </Text>

            <PhoneNumber
              title="Phone Number"
              value={phoneNumber}
              error={phoneNumberError}
              setValue={setphoneNumber}
              setError={setPhoneNumberError}
            />

            <Input
              title="Username"
              value={username}
              error={usernameError}
              setValue={setUsername}
              setError={setUsernameError}
            />

            <Input
              title="First Name"
              value={firstName}
              error={firstNameError}
              setValue={setFirstName}
              setError={setFirstNameError}
            />

            <Input
              title="Last Name"
              value={lastName}
              error={lastNameError}
              setValue={setLastName}
              setError={setLastNameError}
            />

            <Input
              title="Password"
              value={password1}
              error={password1Error}
              setValue={setPassword1}
              setError={setPassword1Error}
              secureTextEntry={true}
            />

            <Input
              title="Confirm The Password"
              value={password2}
              error={password2Error}
              setValue={setPassword2}
              setError={setPassword2Error}
              secureTextEntry={true}
            />

            <Button title="Sign Up" onPress={onSignUpClick} />

            <Text style={{ textAlign: "center", marginTop: 40 }}>
              Already have an account?{" "}
              <Text
                style={{ color: "blue" }}
                onPress={() => navigation.goBack()}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  p: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
  contain1: {
    height: 50,
    margin: 22,
  },
  contain2: {
    flex: 1,
    //backgroundColor:"green"
  },
  heading4: {
    color: "white",
    marginHorizontal: 10,
    marginTop: 30,
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    height: 300,
    width: "100%",
    padding: 50,
  },
  heading5: {
    marginTop: 30,
  },
});
