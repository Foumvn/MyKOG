
// /screens/Sermon.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sermon = () => {
  return (
    <View style={styles.container}>
      <Text>Sermon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Sermon;