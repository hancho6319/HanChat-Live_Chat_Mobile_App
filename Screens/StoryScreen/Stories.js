import { ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';

const Story = () => {
  const stories = Array.from({ length: 100 });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stories.map((_, i) => (
          <Text
            key={i}
            style={[
              styles.text,
              { color: i % 2 === 0 ? 'green' : 'red' }, // Green for even, Red for odd
            ]}
          >
          Story {i + 1}
          </Text>
      ))}
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
    paddingVertical: 30, // Space from the top and bottom
  },
  text: {
    fontWeight: 'bold', // Bold text
    fontSize: 20, // Font size
    fontFamily: 'sans-serif', // Custom font family
    marginBottom: 10, // Space between texts
  },
});

export default Story;
