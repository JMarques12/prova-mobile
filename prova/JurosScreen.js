import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function JurosScreen() {
  const [valorProduto, setValorProduto] = useState('');
  const [porcentagemJuros, setPorcentagemJuros] = useState('');
  const [totalPagamento, setTotalPagamento] = useState('');

  const calcularPagamento = () => {
    const valor = parseFloat(valorProduto);
    const juros = parseFloat(porcentagemJuros);

    if (!isNaN(valor) && !isNaN(juros)) {
      const total = valor * (1 + juros / 100);
      setTotalPagamento(total.toFixed(2));
    } else {
      setTotalPagamento('Valor inválido');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Valor do Produto"
        value={valorProduto}
        onChangeText={setValorProduto}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Porcentagem de Juros"
        value={porcentagemJuros}
        onChangeText={setPorcentagemJuros}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Calcular Pagamento" onPress={calcularPagamento} />
      <Text>Total do Pagamento: {totalPagamento}</Text>
    </View>
  );
}