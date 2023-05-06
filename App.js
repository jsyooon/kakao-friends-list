import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header';
import MyProfile from './src/MyProfile';
import FriendHeader from './src/FriendHeader';
import Profile from './src/Profile';
import Margin from './src/Margin';
import TabBar from './src/TabBar';
import { myProfileData, friendProfilesData } from './data/data';

export default function App() {
  const [isOpen, setOpen] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Header />
        <FlatList
          data={isOpen ? friendProfilesData : []}
          keyExtractor={(item, index) => `friend${index}`}
          renderItem={({ item }) => <Profile uri={item.uri} name={item.name} message={item.message} />}
          ItemSeparatorComponent={() => <Margin height={15} />}
          ListHeaderComponent={
            <View>
              <MyProfile data={myProfileData} />
              <FriendHeader isOpen={isOpen} onPress={() => setOpen(!isOpen)} length={friendProfilesData.length} />
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <TabBar />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
});
