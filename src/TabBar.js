import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabButton from './TabButton.js';
import { useState } from 'react';

const TabBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {['person', 'chatbubble', 'albums', 'ios-ellipsis-horizontal'].map((name, index) => (
        <TabButton name={name} key={name} isActive={activeIndex === index} onPress={() => setActiveIndex(index)} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
  },
});

export default TabBar;
