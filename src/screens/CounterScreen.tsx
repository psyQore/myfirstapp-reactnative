import React, { useState } from 'react';
import {View, Text, Button } from 'react-native';

const CounterScreen = () => {


    const [counter, setCounter] = useState(0);
    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Counter: {counter}
      </Text>
      <Button
        title="+"
        onPress={() => setCounter(counter + 1)}
      >

      </Button>
    </View>
  );
};

export default CounterScreen;
