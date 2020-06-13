import React from 'react';

const SomeComponent = (props) => {

  return (
    <div id="newDiv">
      <h1>Can you see me?</h1>
      {props.someProp()}
    </div>
  )
}
export default SomeComponent;