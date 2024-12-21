import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function App() {
    const navigation = useNavigation();
  return (
    <LinearGradient colors={["#00009c", "#a4a4ff"]} style={styles.gradient}>
      <View
        style={{
          left: -100,
          padding: 50,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          Welcome to Hanchat
        </Text>
      </View>
      <Image
        source={require("../Images/44gtghbr4.png")}
        style={styles.image1}
      ></Image>
      <Image
        source={require("../Images/54tgfd5rt5.png")}
        style={styles.image2}
      ></Image>
      <Image
        source={require("../Images/8rfufhdt5.png")}
        style={styles.image3}
      ></Image>
      <Image
        source={require("../Images/823ghhd3.png")}
        style={styles.image4}
      ></Image>
      <Image
        source={require("../Images/4r6tfd7t7.png")}
        style={styles.image5}
      ></Image>
      <View
        style={{
          flex: 1,
          top: 300,
        }}
      >
        <Text
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          Let's get started
        </Text>
        <Text
          style={{
            color: "#ffffff",
            margin: 10,
          }}
        >
          Connect with different people around the world!
        </Text>
        <View
          style={{
            marginTop: 40,
            width: 200,
            height: 40,
            borderRadius: 50,
          }}
        >
          <Button
            title="Join now"
            color={"#000059"}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  image1: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: "absolute",
    top: 20,
    left: 20,
    transform: [{ translateX: 10 }, { translateY: 30 }, { rotate: "-15deg" }],
  },
  image2: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: "absolute",
    top: 50,
    right: 30,
    transform: [{ translateX: 10 }, { translateY: 30 }, { rotate: "30deg" }],
  },
  image3: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: "absolute",
    top: 10,
    left: 170,
    transform: [{ translateX: 10 }, { translateY: 30 }, { rotate: "-5deg" }],
  },
  image4: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: "absolute",
    top: 150,
    left: 70,
    transform: [{ translateX: 10 }, { translateY: 30 }, { rotate: "-5deg" }],
  },
  image5: {
    width: 170,
    height: 170,
    borderRadius: 15,
    position: "absolute",
    top: 160,
    right: 40,
    transform: [{ translateX: 10 }, { translateY: 30 }, { rotate: "-5deg" }],
  },
});
