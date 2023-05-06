import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabButton = ({ isActive, name, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.container}>
      <Ionicons name={isActive ? name : `${name}-outline`} size={24} color='black' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
});
export default TabButton;
