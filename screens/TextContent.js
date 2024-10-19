import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const textData = [
  { id: '3', title: 'La force dans l\'âme', profileImage: require('../assets/images/redemption.jpeg'), saison: 'Mois de la foi grandissante', date: '10-08-2024' },
  { id: '1', title: 'La réalité de l\'identité en CHRIST', profileImage: require('../assets/images/test1.jpeg'), saison: 'Mois de l\'accélération divine', date: '10-08-2024' },
  { id: '2', title: 'Comment enfanter sa destinée', profileImage: require('../assets/images/grandissante.jpeg'), saison: 'Mois de l\'accélération divine', date: '10-08-2024' },
];



const TextContent = () => {

  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('TextReader', { text: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={textData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.textItem} onPress={() => handlePress(item)}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{item.title}  📖</Text>
              <Text style={styles.textDetails}>{item.saison} | {item.date}</Text>

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
  textItem: {
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
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDetails: {
    fontSize: 12,
    color: '#666',
  },
});

export default TextContent;