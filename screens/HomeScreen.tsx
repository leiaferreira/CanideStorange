import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/HomeStyles'; // Importando os estilos

const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<any[]>([]);
  const [outOfStockProducts, setOutOfStockProducts] = useState<any[]>([]);

  // Função para carregar os produtos do AsyncStorage
  const loadProducts = async () => {
    const productsData = await AsyncStorage.getItem('products');
    if (productsData) {
      const productsList = JSON.parse(productsData);
      setProducts(productsList);

      // Verificar se algum produto está com estoque zero
      const outOfStock = productsList.filter((product: { quantity: number }) => product.quantity === 0);
      setOutOfStockProducts(outOfStock);

      // Emitir alerta se algum produto estiver com estoque zero
      outOfStock.forEach((product: { name: string }) => {
        Alert.alert('Produto em Falta', `${product.name} precisa ser reposto na prateleira.`);
      });
    }
  };

  // Carregar os produtos assim que a tela for carregada ou ao voltar para a tela
  useEffect(() => {
    loadProducts();
  }, []);

  // Função para editar um produto
  const handleEditProduct = (product: any) => {
    navigation.navigate('AddProduct', { product });
  };

  // Função para excluir um produto
  const handleDeleteProduct = async (productName: string) => {
    const productsData = await AsyncStorage.getItem('products');
    let productsList = productsData ? JSON.parse(productsData) : [];
    const updatedProducts = productsList.filter((product: { name: string }) => product.name !== productName);

    await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
    Alert.alert('Produto excluído', 'O produto foi removido com sucesso!');
    loadProducts(); // Recarregar os produtos após a exclusão
  };

  // Função para exibir a lista de produtos faltando
  const navigateToOutOfStock = () => {
    navigation.navigate('OutOfStockScreen', { outOfStockProducts });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item: any) => item.name}
        renderItem={({ item }: any) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productQuantity}>Quantidade: {item.quantity}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleEditProduct(item)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleDeleteProduct(item.name)}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.addButton} onPress={navigateToOutOfStock}>
        <Text style={styles.buttonText}>
          {outOfStockProducts.length > 0 ? 'Ver Produtos Faltando' : 'Não tem produtos faltando'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
