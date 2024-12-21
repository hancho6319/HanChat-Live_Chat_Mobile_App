import {
  TextInput,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#00009c", "#a4a4ff"]} style={styles.gradient}>
        <View style={styles.contain1}>
          <Text style={styles.heading}>Create Accout</Text>
          <Text style={styles.p}>
            Start connecting with your friends today!!
          </Text>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Email</Text>
          <View style={styles.input}>
            <TextInput placeholder="Enter your email..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Full name</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Enter your full name..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Date of birth</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Enter your date of birth..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>State of origin</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Enter your state..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Nationality</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Enter your country..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Create password</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Enter a new password..."></TextInput>
          </View>
        </View>
        <View style={styles.contain2}>
          <Text style={styles.heading4}>Confirm password</Text>
          <View style={styles.input}>
            <TextInput  placeholder="Repeat the password..."></TextInput>
          </View>
        </View>
        <View style={styles.footer}>
          <Button title="Sign up" color={"#00009c"} onPress={ () => {
            navigation.navigate('Hanchat')
          }}></Button>
          <Text style={styles.heading5}> Already have account? </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
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
    flex:1,
    height:300,
    width:"100%",
    padding:50
  },
  heading5: {
    marginTop:30
  }
});
