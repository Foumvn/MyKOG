import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const AudioPlayer = ({ route }) => {
  const { audio } = route.params; // Récupérer les données audio passées

  return (
    <ScrollView style={styles.container}>
      <Image source={audio.profileImage} style={styles.profileImage} />
      <Text style={styles.title}>{audio.title}</Text>
      <Text style={styles.details}>{audio.saison} | {audio.date}</Text>
      {/* Ajoutez votre logique de lecteur audio ici */}
      <Text style={styles.description}>
        {/* Ajoutez une description ou d'autres détails sur l'audio ici */}
        Ceci est une description de l'audio. Vous pouvez ajouter plus de contenu ici pour tester le défilement.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileImage: {
    width: '100%', // Ajustez la largeur selon vos besoins
    height: 200, // Ajustez la hauteur selon vos besoins
    borderRadius: 10, // Pour arrondir les coins de l'image
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 22,
  },
});

export default AudioPlayer;