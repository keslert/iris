import React from 'react';


// Use https://css-tricks.com/snippets/css/css-conic-gradient/
function ColorWheel(props) {

  const colors = props.defaultColors;

  return (
    <div>
      <div
        style={{
          width: 400,
          height: 400,
          borderRadius: 9999,
          background: '#f47db2',
        }}
      />
    </div>
  )
}

export default ColorWheel;