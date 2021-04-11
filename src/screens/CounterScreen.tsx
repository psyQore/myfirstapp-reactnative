import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  // Destructuring de styles
  const {container, title} = styles;

  // state del contador
  const [counter, setCounter] = useState(0);

  return (
    <View style={container}>
      <Text style={title}>Counter: {counter}</Text>
      <Fab position="br" onPress={() => setCounter(counter + 1)} title="+1" />
      <Fab position="bl" onPress={() => setCounter(counter - 1)} title="-1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -1,
  },
});

export default CounterScreen;
