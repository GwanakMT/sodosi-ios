import React from 'react';
import LottieView from 'lottie-react-native';

function Marker() {
  return (
    <LottieView
      source={require('../../assets/animations/marker.json')}
      autoPlay
      loop
    />
  );
}

export default Marker;
