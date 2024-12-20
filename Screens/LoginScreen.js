import { TextInput, ScrollView, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export default function LoginScreen() {

   // Provide your custom theme colors directly
   const colors = {
    card: '#000000', // Background color of the button
    text: '#33ba2b', // Text color of the button
  };

  return (
    <View>
      <View>
      <Text style={[styles.text, { color: colors.text }]}>First Name</Text>
      <TextInput style={[styles.input]}></TextInput>
      <Text style={[styles.text, { color: colors.text }]}>Last Name</Text>
      <TextInput style={[styles.input]}></TextInput>
      <Text style={[styles.text, { color: colors.text }]}>Date of birth</Text>
      <TextInput style={[styles.input]}></TextInput>
      <Text style={[styles.text, { color: colors.text }]}>Email address</Text>
      <TextInput style={[styles.input]}></TextInput>
      <View style={[styles.forgot]}>
        <Text style={{color: '#ffffff'}}> If you forgot your password click</Text>
          <Pressable style={[styles.button, { backgroundColor: colors.card }]}>
            <Text style={[styles.text, { color: colors.text }]}>here</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 10,
    fontSize: 15,
    marginLeft:10,
    paddingBottom: 0,
    paddingTop:0,
    borderColor: '#d4e6d3',
    borderRadius: 20,
    color: '#ffffff',
    backgroundColor: '#9c9e9c',
    height: 40,
    width: 200,
  },
  forgot: {
    
  }
});