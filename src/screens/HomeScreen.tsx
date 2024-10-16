import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [verifiedMessage, setVerifiedMessage] = useState(null);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText,
        isUser: true,
        isVerified: null, // Inicia como não verificado
      };

      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, newMessage];

        // Simulando verificação
        setTimeout(() => {
          const isCorrect = Math.random() > 0.5; // Simula a verificação (correto ou incorreto)
          const responseMessage = {
            id: Math.random().toString(),
            text: `Verificação: ${isCorrect ? 'Notícia correta' : 'Notícia incorreta'}`,
            isUser: false,
            isVerified: isCorrect,
          };
          setMessages(prevMessages => [...prevMessages, responseMessage]);
          setVerifiedMessage(responseMessage.isVerified);
        }, 1000);

        return updatedMessages;
      });

      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Chill Tech</Text>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <View style={styles.innerContainer}>
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.message,
                  item.isUser ? styles.userMessage : styles.botMessage,
                  item.isVerified === true ? styles.verifiedCorrect : item.isVerified === false ? styles.verifiedIncorrect : null,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.isUser && styles.userMessageText,
                    item.isVerified === true ? styles.correctText : item.isVerified === false ? styles.incorrectText : null,
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.messageList}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a notícia que desejam verificar"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
              placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  header: {
    fontSize: 16,
    color: '#888',
    textAlign: 'right',
    marginVertical: 10,
    marginRight: 10,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageList: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  message: {
    padding: 12,
    borderRadius: 20,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8B4513', // Marrom para mensagens do usuário
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  verifiedCorrect: {
    backgroundColor: '#d4edda', // Fundo verde para verificado como correto
  },
  verifiedIncorrect: {
    backgroundColor: '#f8d7da', // Fundo vermelho para verificado como incorreto
  },
  messageText: {
    color: '#fff',
  },
  userMessageText: {
    color: '#fff',
  },
  correctText: {
    color: '#155724', // Texto verde para correto
  },
  incorrectText: {
    color: '#721c24', // Texto vermelho para incorreto
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  sendButton: {
    backgroundColor: '#8B4513', // Marrom para o botão de enviar
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
