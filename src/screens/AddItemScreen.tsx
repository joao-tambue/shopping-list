import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { loadItems, saveItems } from '../services/storage';
import { Item } from '../types/item';

export default function AddItemScreen() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation();

  const handleAdd = async () => {
    if (!name.trim() || !quantity.trim()) {
      return  Alert.alert('Required fields', 'Fill in name and quantity.');  
    }

    const newItem: Item = {
      id: String(uuid.v4()),
      name,
      quantity: Number(quantity),
      bought: false,
    };

    const currentItems = await loadItems();
    const updatedItems = [...currentItems, newItem];
    await saveItems(updatedItems);

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.label}> Product Name </Text>
      <TextInput
        style={styles.input}
        placeholder='Ex: Mouse'
        value={name}
        onChangeText={setName}
       />

      <Text style={styles.label}> Quantity </Text>
      <TextInput
        style={styles.input}
        placeholder='Ex: 2'
        keyboardType='numeric'
        value={quantity}
        onChangeText={setQuantity}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Save Item</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
