import React, {SetStateAction, useState} from 'react';
import Header from '../../components/Header';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import {Task} from '../../types/task';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Counter from '../../components/common/Counter';

export default function TaskScreen() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Hello world!',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Hello world 2!',
      isCompleted: false,
    },
  ]);
  const [toogleFormVisible, setToogleFormVisible] = useState(false);

  const onAddTask = (title: string) => {
    setTasks([...tasks, {id: Date.now(), title, isCompleted: false}]);
  };

  const onUpdateTask = (id: number) => {
    const newTasks: SetStateAction<Task[]> = [];
    tasks.forEach(task => {
      if (task.id !== id) {
        newTasks.push(task);
        return;
      } else {
        newTasks.push({
          id,
          title: task.title,
          isCompleted: !task.isCompleted,
        });
      }
    });
    setTasks(newTasks);
  };

  const onDeleteTask = (id: number) => {
    const newTasks: Task[] = [];
    tasks.forEach(({id: taskId, title, isCompleted}) => {
      if (id !== taskId) {
        newTasks.push({id: taskId, title, isCompleted});
      } else {
        return;
      }
    });
    setTasks(newTasks);
  };

  const changeToogleForm = () => setToogleFormVisible(!toogleFormVisible);

  const renderItem = ({item}: any) => (
    <TaskTile
      task={item}
      onUpdateTask={onUpdateTask}
      onDeleteTask={onDeleteTask}
    />
  );

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {toogleFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCounter}>
              <Counter title="taches" number={tasks.length} />
              <Counter
                title="tache effectués"
                number={tasks.filter(task => task.isCompleted === true).length}
              />
            </View>
          </>
        }
        data={tasks}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <FloatingButton
        toogleFormVisible={toogleFormVisible}
        changeToogleForm={changeToogleForm}
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
