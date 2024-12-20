import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const test = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{margin:100}}>
        <Button
          title="Go to Chat"
          onPress={() => {
            navigation.navigate("Hanchat");
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>gfhjnbgwdwbbsbhcj</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>gfhjnbgwdwbbsbhcj</Text>
      </View>
      <View>
        <Button
          title="Go go login"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
      <View>
        <Button
          title="Go to theme costumization"
          onPress={() => {
            navigation.navigate("testing2");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1, // Allow content to grow and scroll
    paddingVertical: 20, // Add space at the top and bottom
  },
  text: {
    fontWeight: 'bold', // Bold text
    fontSize: 20, // Font size
    fontFamily: 'sans-serif', // Custom font family
    marginBottom: 10, // Space between texts
    textAlign: 'center', // Center text horizontally
  },
});


export default test;
