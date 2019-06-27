import React from 'react';
import { Flex, Box } from 'rebass';
import ColorWheel from './components/ColorWheel';
import ColorGradient from './components/ColorGradient';

// colors for each color circle (from outer to inner)
const defaultWheelColors1 = [
  '#F6A72F',
  '#F17AAF',
  '#897AB9',
  '#47B1E4',
  '#87D4EB',
  '#91D0B4',
  '#F5D379',
  '#0B3243',
  '#B8C4CC',
  '#E5E5E5',
  '#989798',
  '#4D4D4D'
]

const defaultWheelColors2 = [
  '#F9BD65',
  '#F89CC5',
  '#B39CF7',
  '#65C7F8',
  '#9CE5F8',
  '#9CF8D3',
  '#F9E09D', 
  '#4A6471', 
  '#CBD4D9', 
  '#ECECEC',
  '#B3B3B3', 
  '#7A7A7A', 
]

const defaultWheelColors3 = [
  '#FACE8D',
  '#FAB5D4',
  '#C6B5FB',
  '#A8E1FE',
  '#B4ECFB',
  '#B5FBDF',
  '#FBE7B4',
  '#788C95',
  '#D7DFE2',
  '#F1F1F1',
  '#C6C6C6',
  '#9B9B9B',
]

const defaultWheelColors4 = [
  '#FCDAAC',
  '#FCC8DF',
  '#D5C8FD',
  '#A9E1F8',
  '#C8F3FC',
  '#C7FBE5', 
  '#FCEEC7',
  '#99AAB4',
  '#E3E8EC',
  '#F5F5F5',
  '#D4D4D4',
  '#B4B4B4',
]

const defaultWheelColors5 = [
  '#FAE5B8',
  '#FCD6E5',
  '#E0D6FB',
  '#C1E7FC',
  '#D8F6FE',
  '#D5FEEC', 
  '#FCF3D6',
  '#B4BFC5',
  '#E9EDEE',
  '#F8F8F8',
  '#DFDFDF',
  '#C7C7C7',
]


// colors for gradient bars
const defaultGradients = [
  {start: defaultWheelColors1[1], end: defaultWheelColors1[0]},
  {start: defaultWheelColors1[2], end: defaultWheelColors1[3]},
  {start: defaultWheelColors1[1], end: defaultWheelColors1[2]},
  {start: defaultWheelColors1[5], end: defaultWheelColors1[4]},
]

function App() {
  const [wheelColors, setWheelColors] = React.useState(defaultWheelColors1)
  const [gradients, setGradients] = React.useState(defaultGradients);

  return (
    <Flex p={3}>
	  <Box>
        <ColorWheel 
          defaultColors={defaultWheelColors1}
		  radius={500}
		  color={true}
		  off={'50px'}
        />
      </Box>
	  <Box>
        <ColorWheel 
          defaultColors={defaultWheelColors2}
		  radius={400}
		  color={false}
		  off={'100px'}
        />
      </Box>

	  <Box>
        <ColorWheel 
          defaultColors={defaultWheelColors3}
		  radius={300}
		  color={false}
		  off={'150px'}
        />
      </Box>

	  <Box>
        <ColorWheel 
          defaultColors={defaultWheelColors4}
		  radius={200}
		  color={false}
		  off={'200px'}
        />
      </Box>

	  <Box>
        <ColorWheel 
          defaultColors={defaultWheelColors5}
		  radius={100}
		  color={false}
		  off={'250px'}
        />
      </Box>



      <Flex flexDirection="column">
        {gradients.map(gradient => (
          <Box p={2}>
            <ColorGradient
              defaultGradient={gradient}
			  angle = {90}
            />
          </Box>
        ))}
      </Flex>

    </Flex>
  );
}

/*
	  <div className="angled">
	  <Flex flexDirection="column">
        {gradients.map(gradient => (
          <Box p={2}>
            <ColorGradient 
              defaultGradient={gradient}
			  angle = {75}
            />
          </Box>
        ))}
      </Flex>
	  </div>
*/ 

export default App;


