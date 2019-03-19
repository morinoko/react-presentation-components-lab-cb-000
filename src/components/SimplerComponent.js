// Code SimplerComponent Here
import React from 'react';

// A stateless functional component. Only changes via props from parent.
const SimplerComponent = (props) => 
  <div onClick={props.handleClick}> I am just happy.</div>;

export default SimplerComponent;