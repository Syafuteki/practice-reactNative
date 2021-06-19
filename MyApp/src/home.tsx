import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <Text>ABCDEFG</Text>
      </View>
      <View style={styles.containerr}>
        <Text>abcdefg</Text>
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
    backgroundColor: 'gray',
  },
  container: {
    //flex: 1,
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    backgroundColor: 'red',
    padding: 20,
  },
  containerr: {
    //flex: 1,
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    backgroundColor: 'blue',
    padding: 20,
  },
});
