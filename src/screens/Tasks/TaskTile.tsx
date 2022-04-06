import React from 'react';
import {Image, Text, StyleSheet, View, Pressable} from 'react-native';

export default function TaskTile({task, onUpdateTask, onDeleteTask}: any) {
  const {id, title, isCompleted} = task;
  const onChangeStatus = () => {
    onUpdateTask(id);
  };
  const onChangeIsCompleted = () => {
    onDeleteTask(id);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} style={styles.subContainer}>
        <Image
          style={styles.check}
          source={
            isCompleted
              ? require('../../../assets/icons/checkCircle.png')
              : require('../../../assets/icons/circle.png')
          }
        />
        <Text style={isCompleted ? styles.textDisabled : styles.text}>
          {title}
        </Text>
      </Pressable>
      <Pressable onPress={onChangeIsCompleted}>
        <Image
          style={styles.check}
          source={require('../../../assets/icons/bin.png')}
        />
      </Pressable>
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
  text: {
    color: 'black',
  },
  textDisabled: {
    color: 'grey',
  },
});
