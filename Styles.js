import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

  // Estilos da tela de login
  loginContainer: {
    flex: 1,
    backgroundColor: '#72C3B2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
  },
  logoImage: {
    width: 300, // Defina a largura desejada
    height: 300, // Defina a altura desejada
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#72C3B2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5,
  },

  // Estilos do menu
  menuContainer: {
    flex: 1,
    backgroundColor: '#FFF', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#72C3B2', 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, 
  },
  menuButtonText: {
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilos da tela de seleção de pacientes
  pacientesContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  pacientesTitulo: {
    fontSize: 36,
    color: '#72C3B2',
    marginTop: 80,
    marginBottom: 80,
    textAlign: 'center',
  },
  pacienteContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  pacienteFoto: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  pacienteNome: {
    color: '#72C3B2',
    marginTop: 5,
  },
  pacienteButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#72C3B2', 
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center',
    marginVertical: 10, 
  },

  // Estilos da tela de cadastro
  cadastroContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 8,
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 12,
    width: '90%',
  },
  label: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#72C3B2',
  },
  cadastroInput: {
    height: 40,
    borderColor: '#72C3B2',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 25,
  },
  cadastroButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#72C3B2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cadastroButtonText: {
    color: 'WHITE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Estilos da tela de Listar Cenário
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitulo: {
    marginLeft: 12,
    marginBottom: 8,
    fontWeight: '600', // Alterado para '600' para um estilo correto
    fontSize: 16,
  },
  cardDescricao: {
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 5,
    fontSize: 14,
  },
  
  // Estilo da tela de gerar cenário
  inputCenario: {
    width: '90%', 
    height: 50,
    borderColor: '#165C4D',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textAreaCenario: {
    width: '90%', 
    height: 200,
    borderColor: '#165C4D',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cenarioContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 0.5,
  },
  cenarioText: {
    fontSize: 16,
    color: '#333',
  },
  headerGerar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#72C3B2',
    textAlign: 'center',
    marginBottom: 36,
  },
  
  // Estilo da tela de feedback
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "white",
    padding: 20,
  },
  feedbackScrollContainer: {
    padding: 8,
    alignItems: 'center',
  },
  feedbackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    textAlign: 'center',
  },
  feedbackInputContainer: {
    marginBottom: 15,
    width: '90%',
  },
  feedbackLabel: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#72C3B2',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#72C3B2',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },

  // Estilo tela de relatório

  relatorioContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    backgroundColor: "white",
    padding: 20, 
  },
  relatorioLabel: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600', 
    marginBottom: 10,
    textAlign: 'left',
    width: '100%', 
  },
  relatorioTextInput: {
    height: 150,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top', 
    width: '100%',
  },
  relatorioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%', 
    marginTop: 30, 
  },

  // Estilos tela de cenario
  historiaContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  historiaScrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  historiaParagraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  historiaImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  historiaButtonContainer: {
    marginTop: 20,
    borderRadius: 25,
    width: '90%',
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // Estilo para a tela de cenários
  cenariosContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f4f8',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e88e5',
  },
  cenarioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cenarioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
  },
  cenarioImagem: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginLeft: 10,
  },

  // Estilo para os cards
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444444',
  },
  cardDescricao: {
    fontSize: 16,
    color: '#666666',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#777777',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1e88e5',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estilo para a tela de história
  historiaContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
  },
  historiaImagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  historiaTexto: {
    fontSize: 18,
    color: '#72C3B2',
    marginBottom: 50,
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  opcaoButton: {
    backgroundColor: '#72C3B2',
    borderRadius: 8,
    padding: 15,
    width: '45%',
    alignItems: 'center',
  },
  opcaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });

  export default globalStyles;
