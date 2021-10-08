import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button, Platform, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './client/screens/WelcomeScreen';
import SelectGameScreen from './client/screens/SelectGameScreen';
import Card from './client/components/Card';
import { characters } from './client/config/GG_loader.js'
import GGSTScreen from './client/screens/GGSTScreen';
import CharacterScreen from './client/screens/CharacterScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    // <SelectGameScreen />
    // <Card title={characters.sol.charName} subtitle={characters.sol.type} image={characters.sol.icon} />
    // <GGSTScreen />
    <CharacterScreen />
  );
}