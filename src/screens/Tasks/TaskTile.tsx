import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

export default function TaskTile({task}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.check}
          source={require('../../../assets/icons/circle.png')}
        />
        <Text>{task.title}</Text>
      </View>
      <Image
        style={styles.check}
        source={require('../../../assets/icons/bin.png')}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
  },
  check: {
    width: 30,
    height: 30,
  },
});
