import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  const {title, container} = styles;

  return (
    <View style={container}>
      <Text style={title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 30,
    //width: 150,
    borderWidth: 10,
    //backgroundColor: 'purple'
  },
});

export default BoxObjectModelScreen;
