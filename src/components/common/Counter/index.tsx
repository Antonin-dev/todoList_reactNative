import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export interface Props {
  title: string;
  number: number;
}

function Counter({title, number}: Props) {
  return (
    <View>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  number: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
});
