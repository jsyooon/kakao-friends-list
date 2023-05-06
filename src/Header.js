import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const Util = styled.View`
  flex-direction: row;
`;

const Header = () => {
  return (
    <Container>
      <Title>친구</Title>
      <Util>
        <Ionicons name='ios-settings-outline' size={24} color='#000' />
      </Util>
    </Container>
  );
};

export default Header;
