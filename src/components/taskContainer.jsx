import { useState } from "react";
import Header from "./header/header";
import TaskInput from "./taskinput/taskInput";
import TaskList from "./tasklist/taskList";

const TaskContainer = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Trouver une mission React !", isDone: false },
    {
      id: 2,
      title: "Finir le developpement de la fusée SpaceX !",
      isDone: false,
    },
    { id: 3, title: "Donner à manger au chien", isDone: false },
  ]);
  const addTask = (title) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      isDone: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const editTask = (id, completedNew) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isDone: completedNew } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const taskRemaining = () => {
    const taskCompleted = taskList.filter(
      (task) => task.completed === true
    ).length;
    const incompleted = taskList.length - taskCompleted;
    return {
      taskCompleted,
      incompleted,
    };
  };

  const { taskCompleted, incompleted } = taskRemaining();
  console.log(taskCompleted, incompleted);
  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompleted}
      />
    </main>
  );
};

export default TaskContainer;
