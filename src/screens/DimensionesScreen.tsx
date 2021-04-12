import React from 'react';
import {View, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionesScreen = () => {
  const {container, boxMorada, boxNaranja, title} = styles;

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={container}>
        <View style={{
            ...boxMorada,
            width: width * 0.6
        }} />
        <View style={boxNaranja} />
      </View>
      <Text style={title}>W: {width}, H: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'green',
  },
  boxMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  boxNaranja: {
    backgroundColor: 'orange',
  },
  title :{
      fontSize: 20,
      textAlign: 'center'
  }
});

export default DimensionesScreen;
