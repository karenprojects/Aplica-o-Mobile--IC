import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; // Para ícones de verificação

type RootStackParamList = {
  ResultadoVerificacao: { tipoResultado: string };
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
    if (tipoResultado === 'sim') {
      return <AntDesign name="checkcircle" size={64} color="green" />;
    } else if (tipoResultado === 'falso') {
      return <AntDesign name="closecircle" size={64} color="red" />;
    } else {
      return <AntDesign name="questioncircle" size={64} color="gray" />;
    }
  };

  // Texto explicativo com base no resultado
  const renderExplanation = () => {
    if (tipoResultado === 'sim') {
      return 'Explicação sobre por que a notícia é considerada verdadeira, incluindo fontes e evidências.';
    } else if (tipoResultado === 'falso') {
      return 'Explicação sobre por que a notícia é considerada falsa, incluindo fontes e evidências.';
    } else {
      return 'Nenhuma notícia disponível para verificação.';
    }
  };

  const openLink = () => {
    // Substitua a URL pelo link desejado
    Linking.openURL('https://example.com/fonte-de-verificacao');
  };

  return (
    <View style={styles.container}>
      {/* Texto no canto superior direito */}
      <Text style={styles.headerText}>Chill Tech News</Text>

      {/* Linha horizontal abaixo do cabeçalho */}
      <View style={styles.headerLine} />

      {/* Centraliza o título */}
      <Text style={styles.titleText}>Avaliação de Veracidade</Text>

      <View style={styles.iconContainer}>{renderIcon()}</View>

      <Text style={styles.explanationText}>{renderExplanation()}</Text>

      {/* Link para fontes */}
      <TouchableOpacity onPress={openLink}>
        <Text style={styles.linkText}>
          Links para as fontes que confirmam ou desmentem a notícia
        </Text>
      </TouchableOpacity>

      {/* Botões de ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Faça um comentário</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OU</Text>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.goBack()}
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
    fontSize: 25, // Tamanho da fonte
    fontWeight: '400',
    marginBottom: 20,
    color: '#888',
    textAlign: 'center',
    marginTop: 60, // Mantendo a margem superior para espaçamento
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
    marginBottom: 60, // Aumentando a margem inferior para afastar os botões
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center', // Alinha os botões ao centro
  },
  button: {
    backgroundColor: '#7D5A5A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 20,
    width: '30%', // Definindo a largura para 30%
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
  secondaryButton: {
    backgroundColor: '#A88F8F', // Cor alterada para um marrom mais claro
  },
});

export default ResultadoVerificacaoScreen;
