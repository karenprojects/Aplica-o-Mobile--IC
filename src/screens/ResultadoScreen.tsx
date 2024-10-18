import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; // Para ícones de verificação

type RootStackParamList = {
  ResultadoVerificacao: { tipoResultado: string };
  ComentarioScreen: undefined; // Definindo a rota ComentarioScreen
  Home: undefined; // Definindo a rota Home
};

type ResultadoVerificacaoProps = NativeStackScreenProps<
  RootStackParamList,
  'ResultadoVerificacao'
>;

const ResultadoVerificacaoScreen: React.FC<ResultadoVerificacaoProps> = ({
  route,
  navigation,
}) => {
  const { tipoResultado } = route.params;

  // Define o ícone com base no tipo de resultado
  const renderIcon = () => {
    switch (tipoResultado) {
      case 'sim':
        return <AntDesign name="checkcircle" size={64} color="green" />;
      case 'falso':
        return <AntDesign name="closecircle" size={64} color="red" />;
      default:
        return <AntDesign name="questioncircle" size={64} color="gray" />;
    }
  };

  // Texto explicativo com base no resultado
  const renderExplanation = () => {
    switch (tipoResultado) {
      case 'sim':
        return 'Explicação sobre por que a notícia é considerada verdadeira, incluindo fontes e evidências.';
      case 'falso':
        return 'Explicação sobre por que a notícia é considerada falsa, incluindo fontes e evidências.';
      default:
        return 'Nenhuma notícia disponível para verificação.';
    }
  };

  const openLink = () => {
    Linking.openURL('https://example.com/fonte-de-verificacao');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chill Tech News</Text>

      <View style={styles.headerLine} />

      <Text style={styles.titleText}>Avaliação de Veracidade</Text>

      <View style={styles.iconContainer}>{renderIcon()}</View>

      <Text style={styles.explanationText}>{renderExplanation()}</Text>

      <TouchableOpacity onPress={openLink}>
        <Text style={styles.linkText}>
          Links para as fontes que confirmam ou desmentem a notícia
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ComentarioScreen')} // Navegando para a tela ComentarioScreen
        >
          <Text style={styles.buttonText}>Faça um comentário</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OU</Text>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]} // Aplique o estilo secundário aqui
          onPress={() => navigation.navigate('Home')} // Navegando para a tela Home
        >
          <Text style={styles.buttonText}>Verificar OUTRA notícia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerText: {
    position: 'absolute',
    top: 40,
    right: 20,
    fontSize: 18,
    color: '#BFAFAF',
    fontWeight: '400',
  },
  headerLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 80,
  },
  titleText: {
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 20,
    color: '#888',
    textAlign: 'center',
    marginTop: 60,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  explanationText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  linkText: {
    fontSize: 14,
    color: '#6A6A6A',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7D5A5A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    width: '18%', // Aumentei a largura para melhor visualização
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: '#BFAFAF', // Cor diferente para o segundo botão
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 20,
  },
});

export default ResultadoVerificacaoScreen;
