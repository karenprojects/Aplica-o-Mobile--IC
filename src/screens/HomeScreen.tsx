import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet 
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

// Tipo para as propriedades da tela
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [newsText, setNewsText] = useState('');

  // Função para navegação para a tela de resultado
  const verifyNews = () => {
    navigation.navigate('ResultadoScreen', { newsText });
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={styles.container}>
          {/* Texto no canto superior direito */}
          <Text style={styles.headerText}>Chill Tech News</Text>

          {/* Linha horizontal abaixo do cabeçalho */}
          <View style={styles.headerLine} />

          {/* Corpo com input e botão */}
          <View style={styles.body}>
            <TextInput
              style={styles.input}
              placeholder="Insira o texto ou o link da notícia que desejam verificar"
              placeholderTextColor="#C4C4C4"
              value={newsText}
              onChangeText={(text) => setNewsText(text)}
              underlineColorAndroid="transparent"
              autoCorrect={false}
              autoCapitalize="none"
              selectionColor="#7D5A5A"
              editable={true}
            />

            <TouchableOpacity style={styles.button} onPress={verifyNews}>
              <Text style={styles.buttonText}>Verificar notícia</Text>
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
    width: '80%', // Defina uma largura máxima ou porcentagem
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    fontSize: 16,
    height: 50,
    color: '#000',
    marginBottom: 30, // Aumente a margem inferior para afastar do botão
    paddingHorizontal: 10,
    textAlign: 'center', // Centraliza o texto no campo de entrada
  },
  button: {
    backgroundColor: '#7D5A5A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    width: '18%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto do botão
    fontWeight: 'bold',
  },
  orText: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 20,
  },
});
export default HomeScreen;
