import React from 'react';

function ColorGradient(props) {

  const gradient = props.defaultGradient;

  return (
    <div>
      <div 
        style={{
          width: 300,
          height: 50,
          borderRadius: 9999,
          background: '#f0a447',
        }}
      />
    </div>
  )
}

export default ColorGradient;