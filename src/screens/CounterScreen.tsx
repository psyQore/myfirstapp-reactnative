import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
  // Destructuring de styles
  const {container, title, fabLocaltionRB, fabLocaltionLB, fab, fabText} = styles;

  const [counter, setCounter] = useState(0);

  return (
    <View style={container}>
      <Text style={title}>Counter: {counter}</Text>
      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={fabLocaltionRB}>
        <View style={fab}>
          <Text style={fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCounter(counter - 1)}
        style={fabLocaltionLB}>
        <View style={fab}>
          <Text style={fabText}>-1</Text>
        </View>
      </TouchableOpacity>
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
  fabLocaltionRB: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocaltionLB: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default CounterScreen;
