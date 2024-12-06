import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 

export default function Menu({ navigation, route }) {
  const { selectedPatient } = route.params;

  return (
    <View style={globalStyles.menuContainer}>
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('GerarCenario', { paciente: selectedPatient })}  
      >
        <Text style={globalStyles.menuButtonText}>GERAR CENÁRIO</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('Relatorio', { paciente: selectedPatient })}  
      >
        <Text style={globalStyles.menuButtonText}>EDITAR CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}
