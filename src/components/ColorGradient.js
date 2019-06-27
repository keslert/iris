import React from 'react';

function ColorGradient(props) {

  const gradient = props.defaultGradient;
  const angle = props.angle;
  let grad =  'linear-gradient(' + angle + 'deg, ' + gradient.start + ', ' + gradient.end + ')'; //linear gradient 
  return (
    <div>
      <div className = "bar"
        style={{
          width: 300,
          height: 50,
          borderRadius: 9999,
		  background: grad,
		  position: 'relative',
		  left: '600px',
		  top: '50px'
        }}
      />
    </div>
  )
}

export default ColorGradient;

