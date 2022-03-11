import React, {useState} from 'react';
import Header from '../../components/Header';
import {FlatList, Text} from 'react-native';
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';

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

  const onAddTask = (title: string) => {
    setTasks([...tasks, {id: Date.now(), title, isCompleted: false}]);
  };

  const renderItem = ({item}: any) => <TaskTile task={item} />;

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <TaskForm onAddTask={onAddTask} />
        </>
      }
      data={tasks}
      contentContainerStyle={{flexGrow: 1}}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
