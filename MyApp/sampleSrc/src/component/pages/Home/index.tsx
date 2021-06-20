import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'gray',
  },
  container: {
    backgroundColor: 'red',
    borderWidth: 1,
    padding: 20,
  },
});
