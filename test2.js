import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function MyButton() {
  // Provide your custom theme colors directly
  const colors = {
    card: '#6200ee', // Background color of the button
    text: '#ffffff', // Text color of the button
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors.card }]}>
      <Text style={[styles.text, { color: colors.text }]}>Button 1</Text>
      <Text style={[styles.text, { color: colors.text }]}>Button 2</Text>
      <Text style={[styles.text, { color: colors.text }]}>Button 3</Text>
      <Text style={[styles.text, { color: colors.text }]}>Button 4</Text>
      <Text style={[styles.text, { color: colors.text }]}>Button 5</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 30
  },
});

export default MyButton;
