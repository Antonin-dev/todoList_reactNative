import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TaskScreen from './src/screens/Tasks';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TaskScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
