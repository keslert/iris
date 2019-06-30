import React from 'react';
// Use https://css-tricks.com/snippets/css/css-conic-gradient/

function ColorWheel(props) {

  const colors = props.defaultColors;
  const radius = props.radius; 
  const off = props.off; 

  const angle = 360 * 1.0/colors.length;
  let angleCount = angle;

  // for loop to create conic gradient
  let back = 'conic-gradient(' + colors[0] + " " + angle.toString() + 'deg'; 
  for (var i = 1; i < colors.length; i++) {
	back += ', ' + colors[i] + ' ' + angleCount.toString() + 'deg '; 
	angleCount += angle;  
	back += angleCount.toString() + 'deg';
  }
  back += ', ' + colors[colors.length - 1] + ' ' + (angleCount).toString() + 'deg)'


  return (
    <div>
      <div className = "wheel" 
        style={{
          width: radius,
          height: radius,
          borderRadius: 9999, 
		  background: back,
		  position: 'absolute',
		  left: off,
		  top: off,
	  }}
      />
    </div>
  )
}

export default ColorWheel;

