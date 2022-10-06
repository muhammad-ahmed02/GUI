import React from 'react';
import { ReactComponent as SVG404 } from '../assets/404.svg';// This svg has color #71ACD4

const divStyle = {
  paddingTop: '20vh',
  marginBottom: '0px',
  height: '80vh', // paddingTop + height == 100vh
  width: '100vw',
  backgroundColor: '#71ACD4',
  textAlign: 'center',
  color: 'white',
  fontSize: '6vh',
};

function Error404() {
  return (
    <div style={divStyle}>
      <h1 style={{ fontSize: '30vh' }}>404</h1>
      <h6>Sorry, the page not found</h6>
      <SVG404 style={{ height: '10vh', marginTop: '5vh' }} />
    </div>
  );
}

export default Error404;
