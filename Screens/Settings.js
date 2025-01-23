import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

function ProfileLogout() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignIn Screen");
      }}
      style={{
        flexDirection: "row",
        height: 52,
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 26,
        backgroundColor: "#202020",
        marginTop: 40,
      }}
    >
      <FontAwesome
        name="sign-out"
        size={20}
        color="#d0d0d0"
        style={{ marginRight: 12 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          color: "#d0d0d0",
        }}
      >
        Logout
      </Text>
    </TouchableOpacity>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <Image
        source={require("../Images/users.jpeg")}
        style={{
          width: 100, // Set the width of the image
          height: 100, // Set the height of the image (same as width for a perfect circle)
          margin:30,
          borderRadius: 50, // Half of the width/height for a circular shape
          borderWidth: 2, // Optional: Add a border around the circle
          borderColor: "#d0d0d0", // Border color
        }}
      />

      <Text
        style={{
          textAlign: "center",
          color: "#303030",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 6,
        }}
      >
        HARUNA AUWALU
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#606060",
          fontSize: 14,
        }}
      >
        @hancho6319
      </Text>

      <ProfileLogout />
    </View>
  );
}

export default ProfileScreen;
