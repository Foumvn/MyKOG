// /screens/Enseignement.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Audio from './Audio';
import TextContent from './TextContent';

const Tab = createMaterialTopTabNavigator();

const Enseignement = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          elevation: 5,
        },
       
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#8e8e8e',
        tabBarIndicatorStyle: {
          backgroundColor: '#FFD700',
        },
      }}
    >
      <Tab.Screen name="Audio" component={Audio} />
      <Tab.Screen name="Texte" component={TextContent} />
    </Tab.Navigator>
  );
};

export default Enseignement;