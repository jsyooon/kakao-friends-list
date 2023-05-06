import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding-top: 15px;
`;

const TabButton = ({ isActive, name, onPress }) => {
  return (
    <Container activeOpacity={1} onPress={onPress}>
      <Ionicons name={isActive ? name : `${name}-outline`} size={24} color='black' />
    </Container>
  );
};

export default TabButton;
