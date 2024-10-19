// /screens/Annonce.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// Importer les images locales
const localImage = require('../assets/images/test.jpeg'); // Remplacez par le nom de votre image

// Données des annonces
const annoncesData = [
  {
    id: '1',
    message: 'Annonce 1: Bienvenue à tous!',
    date: '2024-10-18',
    time: '10:00 AM',
    image: localImage, // Utiliser l'image locale
  },
  {
    id: '2',
    message: 'Annonce 2: Ne manquez pas notre événement!',
    date: '2024-10-17',
    time: '09:00 AM',
    image: localImage, // Utiliser l'image locale
  },
  {
    id: '3',
    message: 'Annonce 3: Mise à jour importante!',
    date: '2024-10-16',
    time: '08:00 AM',
    image: localImage, // Utiliser l'image locale
  },
];

const Annonce = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={annoncesData}
        renderItem={({ item }) => (
          <View style={styles.annonceItem}>
            {item.image && (
              <Image source={item.image} style={styles.image} />
            )}
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.meta}>
              {item.time} | {item.date}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false} // Masquer la barre de défilement
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#282c34', // Couleur de fond
  },
  annonceItem: {
    backgroundColor: '#ffffff', // Couleur de fond blanche pour les annonces
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    width: '100%', // Prendre toute la largeur de l'écran
    alignSelf: 'center',
    
    // Effet d'ombre
    shadowColor: '#000', // Couleur de l'ombre
    shadowOffset: { width: 0, height: 2 }, // Déplacement de l'ombre
    shadowOpacity: 0.3, // Opacité de l'ombre
    shadowRadius: 4, // Rayon de l'ombre
    elevation: 5, // Élévation pour Android
  },
  image: {
    width: '100%', // Prendre toute la largeur disponible
    height: 250,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  meta: {
    fontSize: 12,
    color: '#888',
  },
  flatListContent: {
    paddingBottom: 10, // Ajouter un padding en bas si nécessaire
  },
});

export default Annonce; 