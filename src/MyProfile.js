import { View } from 'react-native';
import Margin from './Margin';
import Division from './Division';
import Profile from './Profile';

const MyProfile = ({ data }) => {
  return (
    <View>
      <Profile uri={data.uri} name={data.name} message={data.message} isMine={true} />
      <Margin height={15} />
      <Division />
      <Margin height={15} />
    </View>
  );
};

export default MyProfile;
