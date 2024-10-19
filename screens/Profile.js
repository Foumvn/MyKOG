
// /screens/Profile.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
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

export default Profile;