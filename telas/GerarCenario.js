import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, ScrollView, Alert } from 'react-native';
import { gerarCenarioIA } from '../services/gerarCenarioIA'; // Certifique-se de que o caminho está correto
import globalStyles from '../Styles';

export default function GerarCenario({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [etapas, setEtapas] = useState([]);
  const [imagem, setImagem] = useState('');

  const handleGerar = async () => {
    if (!descricao) {
      Alert.alert('Erro', 'Por favor, descreva o cenário!');
      return;
    }

    try {
      const { etapas, imagem } = await gerarCenarioIA(descricao);
      setEtapas(etapas);
      setImagem(imagem);

      // Navegar para a tela de História com as etapas e imagem
      navigation.navigate('Historia', { etapas, imagem });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível gerar o cenário. Tente novamente.');
    }
  };

  return (
    <View style={globalStyles.cenarioContainer}>
      <Text style={globalStyles.headerGerar}>GERAR CENÁRIO</Text>

      {/* Input de descrição */}
      <TextInput
        style={globalStyles.inputCenario}
        placeholder="Descrição do cenário"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      {/* Botão para gerar o cenário */}
      <Button title="Gerar" onPress={handleGerar} />

      {/* Exibir a imagem gerada */}
      {imagem ? (
        <Image
          source={{ uri: imagem }}
          style={{ width: 256, height: 256, marginTop: 20 }}
        />
      ) : null}

      {/* Exibir as etapas da história */}
      <ScrollView style={{ marginTop: 20 }}>
        {etapas.map((etapa, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Etapa {etapa.etapa}:
            </Text>
            <Text>{etapa.texto}</Text>

            <Text style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Opções:</Text>
              {"\n"}
              {etapa.opcoes.correta && (
                <Text style={{ color: 'green' }}>Correta: {etapa.opcoes.correta}</Text>
              )}
              {"\n"}
              {etapa.opcoes.incorreta && (
                <Text style={{ color: 'red' }}>Incorreta: {etapa.opcoes.incorreta}</Text>
              )}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
