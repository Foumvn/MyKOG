import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Enseignement from './screens/Enseignement';
import Sermon from './screens/Sermon';
import Info from './screens/Info'; // Ou Annonce
import TabBarIcon from './components/TabBarIcon';
import Audio from './screens/Audio'; // Composant pour la liste audio
import AudioPlayer from './screens/AudioPlayer'; // Composant pour le lecteur audio

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AudioStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Audio" component={Audio} options={{ title: 'Liste des Audios' }} />
    <Stack.Screen name="AudioPlayer" component={AudioPlayer} options={{ title: 'Lecteur Audio' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            height: 70,
          },
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: '#8e8e8e',
        }}
      >
        <Tab.Screen 
          name="Enseignement" 
          component={Enseignement} 
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="school" color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Sermon" 
          component={Sermon} 
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="speaker" color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Annonce" 
          component={Info} // Renommez ce fichier si nécessaire
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="announcement" color={color} />,
          }} 
        />
        <Tab.Screen 
          name="Audio" 
          component={AudioStack} // Utilisez le Stack pour la navigation audio
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="music-note" color={color} />,
          }} 
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}