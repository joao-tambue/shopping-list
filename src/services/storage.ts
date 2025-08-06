import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from '../types/item';

const STORAGE_KEY = '@shopping_list';

export const saveItems = async (items: Item[]) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const loadItems = async (): Promise<Item[]> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};