import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Margin from './Margin';

const FriendHeader = ({ isOpen, onPress, length }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>친구 {length}</Text>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={`chevron-${isOpen ? 'up' : 'down'}-sharp`} size={20} color='#ddd' />
        </TouchableOpacity>
      </View>
      <Margin height={15} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#555',
  },
});

export default FriendHeader;
