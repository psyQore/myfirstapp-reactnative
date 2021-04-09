import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
}

const Fab = ({ title }: Props) => {
    // Destucturing de styles
  const {fabLocaltionRB, fab, fabText} = styles;

  return (
    <TouchableOpacity
      onPress={() => console.log('Click')}
      style={fabLocaltionRB}>
      <View style={fab}>
        <Text style={fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Fab;
