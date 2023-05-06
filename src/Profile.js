import styled, { css } from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.Image`
  ${(props) => {
    const size = props.isMine ? 60 : 50;
    return css`
      width: ${size}px;
      height: ${size}px;
      border-radius: ${size * 0.4}px;
    `;
  }}
`;

const TextContainer = styled.View`
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.isMine ? 17 : 15)}px;
`;

const Message = styled.Text`
  color: #888;
  font-size: ${(props) => (props.isMine ? 15 : 13)}px;
  margin-top: ${(props) => (props.isMine ? 8 : 6)}px;
`;

const Profile = ({ uri, name, message = '', isMine = false }) => {
  return (
    <Container>
      <ImageContainer source={{ uri }} isMine={isMine} />
      <TextContainer>
        <Name isMine={isMine}>{name}</Name>
        {message && <Message size={isMine ? 15 : 13}>{message}</Message>}
      </TextContainer>
    </Container>
  );
};

export default Profile;
