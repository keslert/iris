import React from 'react';
import { Flex, Box } from 'rebass';
import ColorWheel from './components/ColorWheel';
import ColorGradient from './components/ColorGradient';

const defaultWheelColors = [
  '#f5a63d',
  '#f17eb2',
  '#997ff2',
]
//test 
const defaultGradients = [
  {start: '#f283aa', end: '#f4a246', angle: 90},
  {start: '#f283aa', end: '#f4a246', angle: 90},
  {start: '#f283aa', end: '#f4a246', angle: 90},
]

function App() {
  const [wheelColors, setWheelColors] = React.useState(defaultWheelColors)
  const [gradients, setGradients] = React.useState(defaultGradients);

  return (
    <Flex p={3}>
      <Box>
        <ColorWheel 
          defaultColors={wheelColors}
        />
      </Box>
      <Flex flexDirection="column">
        {gradients.map(gradient => (
          <Box p={2}>
            <ColorGradient
              defaultGradient={gradient}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
