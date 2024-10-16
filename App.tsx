import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Avaliação de Veracidade">
        <Stack.Screen name="Avaliação de Veracidade" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}