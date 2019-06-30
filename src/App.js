import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box } from 'rebass';
import ColorWheel from './components/ColorWheel';
import ColorGradient from './components/ColorGradient';

/* I followed a tutorial to get the color of a pixel on click. 
 * Below is the code from the tutorial. */ 
var canvas = document.getElementById("canvas");
var hex = "#4e73ad";

function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function getEventLocation(element,event){
		var pos = getElementPosition(element);
    
    return {
    		x: (event.pageX - pos.x),
      	y: (event.pageY - pos.y)
    };
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

// colors for gradient bars
var defaultGradients = [
  {start: hex, end: hex},
  {start: hex, end: hex},
  {start: hex, end: hex},
  {start: hex, end: hex},
]

canvas.addEventListener("click",function(e){
	var eventLocation = getEventLocation(this,e);
    var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
    // get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // if transparency on the image
    if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
 				coord += " (Transparent color detected, cannot be converted to HEX)";
    }
    
	// convert to hex
    hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
	// update colors for gradient bars
	// I thought that if this was updated React would automatically update the colors of the gradients since the state changed? 
	defaultGradients = [
		{start: hex, end: hex},
		{start: hex, end: hex},
	    {start: hex, end: hex},
		{start: hex, end: hex},
	]

    // Draw the color and coordinates.
    document.getElementById("hex").innerHTML = hex;
	document.getElementById("hex").style.color = hex; 
	ReactDOM.render(<App />, document.getElementById('root')); // rerender? not sure if this is right
},false);

function App() {
  // const [wheelColors, setWheelColors] = React.useState(defaultWheelColors1);
  const [gradients, setGradients] = React.useState(defaultGradients);

  return (
    <Flex p={3}>
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

export default App;


