import React from 'react';
import styled from 'styled-components';
import Box from './components/Box';

type ActiveType = {
  active: boolean;
};

const CustomContainer = styled.div<ActiveType>`
  background: ${(props) => {
    return props.theme.color.black;
  }};

  color: ${(props) => {
    if (props.active) {
      return 'white';
    }
    return '#eee';
  }};
`;

const App: React.FC = () => {
  return (
    <CustomContainer active={false}>
      <span>styled-components css test</span>
      <Box></Box>
    </CustomContainer>
  );
};

export default App;
