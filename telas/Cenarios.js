import React, { useState } from 'react';
import { Text, SafeAreaView, Image, Button, View, Alert, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import globalStyles from '../Styles';

// Lista de histórias
const historias = [
  {
    id: '1',
    titulo: 'O Leão e o Ratinho',
    partes: [
      {
        text: "Era uma vez, em uma floresta, um leão adormeceu à sombra de uma árvore. Um ratinho curioso passou correndo pelo rabo do leão e o acordou.",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Pedir desculpas.",
          incorrect: "Correr sem olhar para trás.",
        },
      },
      {
        text: "O leão segurou o ratinho com sua grande pata. O que o ratinho deveria fazer?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Prometer ajudar o leão no futuro.",
          incorrect: "Pedir para ser comido.",
        },
      },
      {
        text: "Alguns dias depois, o leão ficou preso em uma rede. O que o ratinho fez?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Roer a rede para salvar o leão.",
          incorrect: "Fugir e ignorar o leão.",
        },
      },
    ],
  },
  {
    id: '2',
    titulo: 'A Tartaruga e a Lebre',
    partes: [
      {
        text: "Um dia, uma lebre desafiou uma tartaruga para uma corrida. A lebre achava que venceria facilmente.",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Aceitar o desafio.",
          incorrect: "Recusar a corrida.",
        },
      },
      {
        text: "No meio da corrida, a lebre decidiu descansar. O que a tartaruga deveria fazer?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Continuar correndo sem parar.",
          incorrect: "Esperar a lebre.",
        },
      },
      {
        text: "A tartaruga cruzou a linha de chegada enquanto a lebre ainda dormia. Qual é a lição?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Devagar e sempre vence a corrida.",
          incorrect: "Não desafiar os mais rápidos.",
        },
      },
    ],
  },
  {
    id: '3',
    titulo: 'Os Três Porquinhos',
    partes: [
      {
        text: "Três porquinhos decidiram construir suas casas. O primeiro fez sua casa de palha. O que o segundo deveria usar?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Madeira.",
          incorrect: "Papel.",
        },
      },
      {
        text: "O terceiro porquinho fez sua casa de tijolos. O lobo veio e tentou derrubá-la. O que ele deveria fazer?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Ficar dentro da casa e esperar.",
          incorrect: "Sair correndo.",
        },
      },
      {
        text: "O lobo tentou entrar pela chaminé. O que os porquinhos deveriam fazer?",
        image: "https://via.placeholder.com/150",
        choices: {
          correct: "Acender o fogo na lareira.",
          incorrect: "Abrir a porta.",
        },
      },
    ],
  },
];

export default function Cenarios({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.cenariosContainer}>
      <Text style={globalStyles.titulo}>Escolha um Cenário</Text>
      <FlatList
        data={historias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.cenarioItem}
            onPress={() => navigation.navigate('Historia', { historia: item })}
          >
            <Text style={globalStyles.cenarioTitulo}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
