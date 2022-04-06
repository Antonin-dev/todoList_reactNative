import React, {SetStateAction, useState} from 'react';
import Header from '../../components/Header';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import {Task} from '../../types/task';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Counter from '../../components/common/Counter';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {addTask, deleteTask, updateTask} from './slice/TasksSlice';

export default function TaskScreen() {
  /*const [tasks, setTasks] = useState([
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
  ]);*/
  const {tasks} = useSelector((state: RootState) => state.tasksList);
  const tasksDispatch = useDispatch();
  const [toogleFormVisible, setToogleFormVisible] = useState(false);

  const onAddTask = (title: string) => {
    tasksDispatch(addTask(title));
  };
  const onUpdateTask = (id: number) => {
    tasksDispatch(updateTask(id));
  };

  const onDeleteTask = (id: number) => {
    tasksDispatch(deleteTask(id));
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
