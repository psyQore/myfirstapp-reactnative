import React from 'react';
import {SafeAreaView} from 'react-native';
import TareaScreen from './src/screens/TareaScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import PositionScreen from './src/screens/PositionScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import CounterScreen from './src/screens/CounterScreen'
// import  HelloWorldScreen  from './src/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TareaScreen/>
    </SafeAreaView>
  );
};

export default App;
