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
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'center',
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-start'
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-end'
  },
});

export default FlexScreen;
