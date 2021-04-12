import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PositionScreen = () => {
  const {container, boxMorada, boxGreen, boxBlue} = styles;

  return (
    <View style={container}>
      <View style={boxBlue} />
      <View style={boxMorada} />
      <View style={boxGreen} />

    </View>
  );
};

// Las posiciones son relativas al padre, cada elemento viene en position: relative,
// Pero se puede cambiar a absoluta para mover a nuestro antojo los elementos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 400,
    //width: 400,
    //justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: 'orange',
  },
  boxMorada: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right:0,
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  boxBlue: {
    //width: 100,
    //height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'white',
    //position: 'absolute',
    //left: 0,
    //bottom: 0
    ...StyleSheet.absoluteFillObject
  },
});

export default PositionScreen;
