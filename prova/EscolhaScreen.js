import React from 'react';
import { View, Button } from 'react-native';

export default function EscolhaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Tela de Switch" onPress={() => navigation.navigate('Switch')} />
      <Button title="Tela de Juros" onPress={() => navigation.navigate('Juros')} />
    </View>
  );
}