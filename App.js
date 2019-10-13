import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Open up App.js to start working on your app!</Text>
      <Button title='Ha clic' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 