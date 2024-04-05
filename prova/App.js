// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import EscolhaScreen from './EscolhaScreen';
import SwitchScreen from './SwitchScreen';
import JurosScreen from './JurosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Escolha" component={EscolhaScreen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Juros" component={JurosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}