import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 

const Pacientes = ({ navigation, route }) => {
  const [pacientes, setPacientes] = useState([
    { id: '1', nome: 'Paciente 1', foto: 'https://via.placeholder.com/100' },
    { id: '2', nome: 'Paciente 2', foto: 'https://via.placeholder.com/100' },
    { id: '3', nome: 'Paciente 3', foto: 'https://via.placeholder.com/100' },
  ]);

  // Verifica se um paciente foi atualizado ou um novo paciente foi adicionado
  useEffect(() => {
    if (route.params?.pacienteAtualizado) {
      const pacienteAtualizado = route.params.pacienteAtualizado;
      setPacientes((prevPacientes) =>
        prevPacientes.map((paciente) =>
          paciente.id === pacienteAtualizado.id ? pacienteAtualizado : paciente
        )
      );
    }
    if (route.params?.novoPaciente) {
      const novoPaciente = route.params.novoPaciente;
      setPacientes((prevPacientes) => [...prevPacientes, novoPaciente]);
    }
  }, [route.params?.pacienteAtualizado, route.params?.novoPaciente]);

  const handleSelectPaciente = (paciente) => {
    navigation.navigate('Menu', { pacienteSelecionado: paciente });
  };

  const handleAddPaciente = () => {
    navigation.navigate('Cadastro'); // Navega para a tela de Cadastro
  };

  return (
    <View style={globalStyles.pacientesContainer}>
      <Text style={globalStyles.pacientesTitulo}>Selecionar Pacientes</Text>
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectPaciente(item)}>
            <View style={globalStyles.pacienteContainer}>
              <Image source={{ uri: item.foto }} style={globalStyles.pacienteFoto} />
              <Text style={globalStyles.pacienteNome}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Botão para adicionar paciente */}
      <TouchableOpacity 
        style={globalStyles.pacienteButton} 
        onPress={handleAddPaciente}
      >
        <Text style={globalStyles.menuButtonText}>ADICIONAR PACIENTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pacientes;
