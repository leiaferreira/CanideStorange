import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/OutOfStockStyles'; // Importando os estilos

const OutOfStockScreen = ({ route, navigation }: any) => {
  const { outOfStockProducts } = route.params;

  const [products, setProducts] = useState(outOfStockProducts);

  // Função para remover o produto da lista de produtos faltando
  const removeProductFromList = (productName: string) => {
    const updatedProducts = products.filter((product: { name: string }) => product.name !== productName);
    setProducts(updatedProducts);

    // Emitir alerta de sucesso
    Alert.alert('Produto removido', `${productName} foi removido da lista de produtos faltando.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Faltando</Text>
      {products.length === 0 ? (
        <Text style={styles.noProductsText}>Não tem produtos faltando</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item: any) => item.name}
          renderItem={({ item }: any) => (
            <View style={styles.productContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productQuantity}>Quantidade: {item.quantity}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeProductFromList(item.name)}
              >
                <Text style={styles.buttonText}>Remover da lista</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default OutOfStockScreen;
