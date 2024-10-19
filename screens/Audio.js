import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const audioData = [
  { id: '1', title: 'La réalité de l\'identité en CHRIST', profileImage: require('../assets/images/test1.jpeg'), saison: 'Mois de l\'accélération divine', date: '10-08-2024' },
  { id: '2', title: 'Comment enfanter sa destinée', profileImage: require('../assets/images/grandissante.jpeg'), saison: 'Mois de l\'accélération divine', date: '10-08-2024' },
  { id: '3', title: 'La force dans l\'âme', profileImage: require('../assets/images/redemption.jpeg'), saison: 'Mois de la foi grandissante', date: '10-08-2024' },
];

const Audio = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('AudioPlayer', { audio: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={audioData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.audioItem} onPress={() => handlePress(item)}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.audioTitle}>{item.title}</Text>
              <Text style={styles.audioDetails}>{item.saison} | {item.date}</Text>
              <Text style={styles.audioDetails}>🔊</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  audioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  audioDetails: {
    fontSize: 12,
    color: '#666',
  },
});

export default Audio;