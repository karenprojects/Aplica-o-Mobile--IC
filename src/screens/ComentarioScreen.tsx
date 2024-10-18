import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

// Tipo para as propriedades da tela
type ComentarioScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const ComentarioScreen: React.FC<ComentarioScreenProps> = ({ navigation }) => {
  const [commentText, setCommentText] = useState('');
  const [commentSent, setCommentSent] = useState(false); // Estado para controlar se o comentário foi enviado

  // Função para enviar o comentário
  const sendComment = () => {
    if (commentText.trim()) {
      setCommentSent(true); // Altera o estado para indicar que o comentário foi enviado
    }
  };

  // Função para verificar outra notícia
  const verifyAnotherNews = () => {
    navigation.navigate('Home'); // Navega de volta para a tela HomeScreen
    setCommentText(''); // Limpa o texto do comentário ao voltar
    setCommentSent(false); // Reseta o estado de envio do comentário
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={styles.container}>
          {/* Texto no canto superior direito */}
          <Text style={styles.headerText}>Comentários</Text>

          {/* Linha horizontal abaixo do cabeçalho */}
          <View style={styles.headerLine} />

          {/* Corpo com input e botões */}
          <View style={styles.body}>
            {!commentSent ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Deixe seu comentário para ajudar a aprimorar o programa.o"
                  placeholderTextColor="#C4C4C4"
                  value={commentText}
                  onChangeText={(text) => setCommentText(text)}
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  autoCapitalize="none"
                  selectionColor="#7D5A5A"
                  editable={true}
                />

                <TouchableOpacity style={styles.button} onPress={sendComment}>
                  <Text style={styles.buttonText}>Enviar comentário</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.successText}>Comentário enviado com sucesso!</Text>
            )}

            {/* Botão para verificar outra notícia */}
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={verifyAnotherNews}>
              <Text style={styles.buttonText}>Verificar outra notícia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    fontSize: 16,
    height: 50,
    color: '#000',
    marginBottom: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7D5A5A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    width: '17%',
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: '#BFAFAF', // Cor diferente para o segundo botão
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto do botão
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#7D5A5A',
  },
});

export default ComentarioScreen;
