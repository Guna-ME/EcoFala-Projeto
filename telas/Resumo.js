import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Resumo({ route, navigation }) {
  const { respostas, imagem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo da História</Text>
      <Image source={{ uri: imagem }} style={styles.image} />
      <View style={styles.answers}>
        {respostas.map((resposta, index) => (
          <Text key={index} style={styles.answerText}>
            Etapa {index + 1}: {resposta.etapa} - Sua escolha: {resposta.escolha}
          </Text>
        ))}
      </View>
      <Button
        title="Voltar ao Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  answers: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  answerText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
