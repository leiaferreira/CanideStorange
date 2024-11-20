import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddProductScreen from './screens/AddProductScreen';
import OutOfStockScreen from './screens/OutOfStockScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        name="AddProduct" 
        component={AddProductScreen} 
        options={{ 
          title: 'Adicionar produtos', 
          headerTitleAlign: 'center', 
        }} />

        <Stack.Screen 
        name="OutOfStockScreen" 
        component={OutOfStockScreen} 
        options={{ 
          title: 'Lista de compras', 
          headerTitleAlign: 'center', 
        }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
