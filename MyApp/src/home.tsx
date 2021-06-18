import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
