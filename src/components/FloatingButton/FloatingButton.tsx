import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const FloatingButton = ({toogleFormVisible, changeToogleForm}: any) => {
  return (
    <Pressable onPress={() => changeToogleForm()} style={styles.addTaskButton}>
      <Text style={styles.text}>{toogleFormVisible ? '-' : '+'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addTaskButton: {
    backgroundColor: 'blue',
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FloatingButton;
