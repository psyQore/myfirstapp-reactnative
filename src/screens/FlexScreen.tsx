import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexScreen = () => {
  const {box1, box2, box3, container} = styles;

  return (
    <View style={container}>
      <Text style={box1}>Box 1</Text>
      <Text style={box2}>Box 2</Text>
      <Text style={box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});

export default FlexScreen;
