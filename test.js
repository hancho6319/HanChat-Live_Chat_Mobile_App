import { View, Text, Button } from "react-native";
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
      <View>
        <Button
          title="Go go login"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
      <View>
        <Text> Hello World </Text>
      </View>
    </View>
  );
};

export default test;
