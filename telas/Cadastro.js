import { Text, SafeAreaView, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import globalStyles from '../Styles'; 

export default function Cadastro({ navigation, route }) {
  const pacienteSelecionado = route.params?.pacienteSelecionado;

  const [inputs, setInputs] = useState(() => [
    pacienteSelecionado?.nome || '',
    pacienteSelecionado?.dataNascimento || '',
    pacienteSelecionado?.sexo || '',
    pacienteSelecionado?.endereco || '',
    pacienteSelecionado?.contatoEmergencia || '',
    pacienteSelecionado?.diagnostico || '',
    pacienteSelecionado?.comorbidades || '',
    pacienteSelecionado?.alergias || '',
    pacienteSelecionado?.historicoMedico || '',
    pacienteSelecionado?.medicacoes || '',
    pacienteSelecionado?.sensibilidades || '',
    pacienteSelecionado?.habilidadesComunicacao || '',
    pacienteSelecionado?.habilidadesSociais || '',
  ]);

  const handleInputChange = (text, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = text;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    if (pacienteSelecionado) {
      const updatedPaciente = {
        ...pacienteSelecionado,
        nome: inputs[0],
        dataNascimento: inputs[1],
        sexo: inputs[2],
        endereco: inputs[3],
        contatoEmergencia: inputs[4],
        diagnostico: inputs[5],
        comorbidades: inputs[6],
        alergias: inputs[7],
        historicoMedico: inputs[8],
        medicacoes: inputs[9],
        sensibilidades: inputs[10],
        habilidadesComunicacao: inputs[11],
        habilidadesSociais: inputs[12],
      };

      Alert.alert('Cadastro', `Dados do paciente ${updatedPaciente.nome} atualizados com sucesso!`);
      navigation.navigate('Pacientes', { pacienteAtualizado: updatedPaciente });
    } else {
      const novoPaciente = {
        id: new Date().toISOString(),
        nome: inputs[0],
        dataNascimento: inputs[1],
        sexo: inputs[2],
        endereco: inputs[3],
        contatoEmergencia: inputs[4],
        diagnostico: inputs[5],
        comorbidades: inputs[6],
        alergias: inputs[7],
        historicoMedico: inputs[8],
        medicacoes: inputs[9],
        sensibilidades: inputs[10],
        habilidadesComunicacao: inputs[11],
        habilidadesSociais: inputs[12],
        foto: 'https://via.placeholder.com/100',
      };

      Alert.alert('Cadastro', `Novo paciente ${novoPaciente.nome} cadastrado com sucesso!`);
      navigation.navigate('Pacientes', { novoPaciente });
    }
  };

  const labels = [
    "Nome completo",
    "Data de nascimento",
    "Sexo",
    "Endereço",
    "Contato de emergência",
    "Diagnóstico",
    "Comorbidades",
    "Alergias e restrições alimentares",
    "Histórico médico",
    "Medicações",
    "Sensibilidades",
    "Habilidades de comunicação",
    "Habilidades sociais"
  ];

  return (
    <SafeAreaView style={globalStyles.cadastroContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {labels.map((label, index) => (
          <SafeAreaView key={index} style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>{label}</Text>
            <TextInput
              style={globalStyles.cadastroInput}
              value={inputs[index]}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          </SafeAreaView>
        ))}
        <TouchableOpacity 
          style={globalStyles.cadastroButton} 
          onPress={handleSubmit} 
        >
          <Text style={globalStyles.cadastroButtonText}>
            {pacienteSelecionado ? 'Salvar Alterações' : 'Cadastrar Novo Paciente'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
