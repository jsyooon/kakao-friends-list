import { View, FlatList } from 'react-native';
import Profile from './Profile';
import Margin from './Margin';

const profile = ({ uri, name, message }) => {
  return <Profile uri={uri} name={name} message={message} />;
};

const FriendList = ({ data }) => {
  return (
    <View>
      <FlatList data={data} keyExtractor={(item) => item.name} ItemSeparatorComponent={() => <Margin height={15} />} renderItem={({ item }) => profile(item)}></FlatList>
    </View>
  );
};

export default FriendList;
