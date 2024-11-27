import React, { useState } from 'react';
import { Text, SafeAreaView, Image, Button, View, Alert, ScrollView } from 'react-native';
import globalStyles from '../Styles';

export default function Historia({ route, navigation }) {
  const { historia } = route.params; // Recebe a história selecionada
  const [currentPart, setCurrentPart] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChoice = (choice) => {
    if (choice === 'correct') {
      setIsCorrect(true);
      if (currentPart < historia.partes.length - 1) {
        setCurrentPart(currentPart + 1);
      } else {
        Alert.alert('Fim da História', 'Você completou a história!');
        navigation.goBack(); // Retorna à lista de cenários
      }
    } else {
      setIsCorrect(false);
      Alert.alert('Escolha Incorreta', 'Tente novamente!');
    }
  };

  return (
    <SafeAreaView style={globalStyles.historiaContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <Text style={globalStyles.historiaParagraph}>{historia.partes[currentPart].text}</Text>
        <Image
          source={{ uri: historia.partes[currentPart].image }}
          style={globalStyles.historiaImage}
        />

        <View style={globalStyles.historiaButtonContainer}>
          <Button
            title={historia.partes[currentPart].choices.correct}
            onPress={() => handleChoice('correct')}
            color="#28A745"
          />
          <Button
            title={historia.partes[currentPart].choices.incorrect}
            onPress={() => handleChoice('incorrect')}
            color="#FF5733"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
