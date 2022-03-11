import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  const date = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 25,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
