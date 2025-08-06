import React, { useEffect, useState } from 'react';
import { Text, View,FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { loadItems, saveItems } from '../services/storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Item } from '../types/item';
import ItemCard from '../components/ItemCard';

export default function HomeScreen() {
    const [items, setItems] = useState<Item[]>([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            loadItems().then(setItems);
        }
    }, [isFocused]);
    
    const toggleItem = (id: string) => {
        const updated = items.map(item =>
            item.id === id ? { ...item, bought: !item.bought } : item
        );
        setItems(updated);
        saveItems(updated);
    };

    const deleteItem = (id: string) => {
        const filtered = items.filter(item => item.id !== id);
        saveItems(filtered);
        setItems(filtered);
    };

    const handleNavigateToAdd = () => {
        navigation.navigate('Add Item' as never);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ItemCard
                        item={item}
                        onToggle={() => toggleItem(item.id)}
                        onDelete={() => deleteItem(item.id)}
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.empty}>
                        No items found. Add some!
                    </Text>
                }
                contentContainerStyle={styles.list}
             />

             <TouchableOpacity style={styles.button} onPress={handleNavigateToAdd}>
                <Text style={styles.buttonText}>+ Add item</Text>
             </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 100,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 50,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});