import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  styles,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import flags from "../Images/flags";

export default function Phonenumber({
  title,
  value,
  error,
  setValue,
  setError,
}) {
  const [modalVisible, setModelVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View >
      <Text
        style={{
          color: error ? "#ff5555" : "#ffffff",
          marginTop: 50,
          marginVertical: 6,
          paddingLeft: 16,
        }}
      >
        {error ? error : title}
      </Text>

      {/* <Text
        style={{
          paddingHorizontal: 70,
          color: "white",
          textAlign: "center",
        }}
      >
        Please Confirm Your Country Code and Enter Your Phone Number
      </Text> */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10
        }}
      >
        <View
          style={
            {
              flex:1
              //alignItems: "center",
              //marginBottom: 84,
            }
          }
        >
          <TouchableOpacity
            style={{
              width: "90%",
              height: 52,
              marginHorizontal: 5,
              borderBottomLeftRadius: 20,
              borderStartStartRadius: 20,
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "#e1e2e4",
              flexDirection: "row",
              fontSize: 32,
            }}
            onPress={() => {
              setModelVisible(true);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginLeft: 10,
                flexDirection: "row",
              }}
            >
              <Entypo
                name="chevron-thin-down"
                size={24}
                color="black"
                style={{
                  marginHorizontal: 2,
                  marginVertical: 8,
                }}
              />
              <Image
                source={flags.nigeria}
                style={{
                  height: 30,
                  width: 45,
                  marginHorizontal: 2,
                  marginVertical: 8,
                }}
              />
              <Text
                style={{
                  marginHorizontal: 5,
                  marginVertical: 8,
                }}
              >
                +234
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => {
            setValue(text);
            if (error) {
              setError("");
            }
          }}
          style={{
            backgroundColor: "#e1e2e4",
            borderWidth: 1,
            borderColor: error ? "#ff5555" : "transparent",
            borderTopRightRadius: 26,
            borderBottomRightRadius: 26,
            height: 52,
            width: "61%",
            paddingHorizontal: 16,
            fontSize: 16,
          }}
          value={value}
        />
      </View>
    </View>
  );
}
