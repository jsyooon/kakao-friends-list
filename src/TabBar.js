import { useState } from 'react';
import styled from 'styled-components';
import TabButton from './TabButton.js';

const Container = styled.SafeAreaView`
  border-top: 0.5px solid #ddd;
  flex-direction: row;
  background: #eee;
  align-items: center;
`;

const TabBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container edges={['bottom']}>
      {['person', 'chatbubble', 'albums', 'ios-ellipsis-horizontal'].map((name, index) => (
        <TabButton name={name} key={name} isActive={activeIndex === index} onPress={() => setActiveIndex(index)} />
      ))}
    </Container>
  );
};

export default TabBar;
