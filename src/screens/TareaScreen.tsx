import React from 'react';
import {StyleSheet, View} from 'react-native';

const TareaScreen = () => {
  const {container, boxAzul, boxMorada, boxNaranja} = styles;

  return (
    <View style={container}>
      <View style={boxMorada} />
      <View style={boxNaranja} />
      <View style={boxAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column'
  },
  boxMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  boxNaranja: {
    width: 100,
    // height: 100,
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  boxAzul: {
    width: 100,
    height: 100,

    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});

export default TareaScreen;
