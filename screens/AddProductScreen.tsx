import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/AddProductStyles'; // Importando os estilos

const AddProductScreen = ({ route, navigation }: any) => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // Verificar se estamos editando um produto
  useEffect(() => {
    if (route.params?.product) {
      const { name, quantity } = route.params.product;
      setProductName(name);
      setProductQuantity(quantity);
      setIsEditing(true);
    }
  }, [route.params]);

  // Função para salvar ou editar o produto
  const handleSaveProduct = async () => {
    const products = await AsyncStorage.getItem('products');
    let productsList = products ? JSON.parse(products) : [];

    if (isEditing) {
      // Editar o produto existente
      const updatedProducts = productsList.map((product: { name: string }) =>
        product.name === productName ? { ...product, quantity: productQuantity } : product
      );

      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
    } else {
      // Adicionar um novo produto
      const newProduct = { name: productName, quantity: productQuantity };
      productsList.push(newProduct);
      await AsyncStorage.setItem('products', JSON.stringify(productsList));
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
    }
  };

  // Função para editar a quantidade do produto
  const handleEditQuantity = (operation: 'increase' | 'decrease') => {
    if (operation === 'increase') {
      setProductQuantity(productQuantity + 1);
    } else if (operation === 'decrease' && productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEditing ? 'Editar Produto' : 'Adicionar Produto'}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#f44336' }]}
          onPress={() => handleEditQuantity('decrease')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{productQuantity}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={() => handleEditQuantity('increase')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProduct}>
        <Text style={styles.buttonText}>{isEditing ? 'Salvar Alterações' : 'Adicionar Produto'}</Text>
      </TouchableOpacity>
      
      {/* Botão de Voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProductScreen;
