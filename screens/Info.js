// /screens/Info.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Annonce from './Annonce';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text>Info</Text>
      <Annonce />
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

export default Info;