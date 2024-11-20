import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/LoginStyles'; // Importando os estilos

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para validar o login
  const handleLogin = () => {
    const email = 'teste@gmail.com';
    const senha = '1234';

    // Verificando se o email e a senha estão corretos
    if (username === email && password === senha) {
      // Se as credenciais estiverem corretas, redireciona para a tela principal
      navigation.navigate('Home');
    } else {
      // Caso contrário, exibe uma mensagem de erro
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>CanideStorange</Text>
      <Text style={styles.subtitle}>Seja bem vindo !</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

