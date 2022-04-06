import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TaskScreen from './src/screens/Tasks';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TaskScreen />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
