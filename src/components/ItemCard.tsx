import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Item } from '../types/item';

type Props = {
  item: Item;
  onToggle: () => void;
  onDelete: () => void;
};

export default function ItemCard({ item, onToggle, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Checkbox value={item.bought} onValueChange={onToggle} />
      <Text style={[styles.text, item.bought && styles.checked]}>
        {item.name} - {item.quantity}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  text: {
    flex: 1,
    marginLeft: 12,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  delete: {
    marginLeft: 10,
    fontSize: 18,
  },
});
