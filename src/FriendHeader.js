import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import Margin from './Margin';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: #555;
`;

const FriendHeader = ({ isOpen, onPress, length }) => {
  return (
    <View>
      <Container>
        <Title>친구 {length}</Title>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={`chevron-${isOpen ? 'up' : 'down'}-sharp`} size={20} color='#ddd' />
        </TouchableOpacity>
      </Container>
      <Margin height={15} />
    </View>
  );
};

export default FriendHeader;
