import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultadoScreen from './src/screens/ResultadoScreen';

type RootStackParamList = {
  Home: undefined;
  ResultadoScreen: { newsText: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Desativando o cabeçalho para a tela Home */}
        <Stack.Screen name= "Home" component={HomeScreen} options={{ headerShown: false }}
        />
        <Stack.Screen name="ResultadoScreen" component={ResultadoScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
