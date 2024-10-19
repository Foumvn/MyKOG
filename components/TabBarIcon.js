
// /components/TabBarIcon.js
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const TabBarIcon = ({ name, color, size = 30 }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

export default TabBarIcon;