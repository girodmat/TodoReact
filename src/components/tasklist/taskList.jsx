import TaskItem from "../taskitem/taskItem";
const taskList = ({ taskList, incompletedTasks, editTask, deleteTask }) => {
  const taskList2 = taskList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  if (taskList.length > 0 && taskList)
    return (
      <div className="w-full flex flex-col p-10 mb-20 bg-800 ring-1 ring-stone-700 rounded-md shadow-xl shadow-stone-900 ">
        <h2 className="text-2xl font-bold text-left mb-4">
          📝 Il te reste encore{" "}
          <span className="px-2 rounded-sm font-bold text-blue-600 bg-blue-900 bg-opacity-60 h-10">
            {incompletedTasks}
          </span>{" "}
          tâches à accomplir !
        </h2>
        {taskList2 && taskList2.length > 0 && (
          <ul className="text-left">{taskList2}</ul>
        )}
      </div>
    );
  else
    return (
      <div className="w-full flex justify-center items-center p-10 mb-20 bg-800 ring-1 ring-stone-700 rounded-md shadow-xl shadow-stone-900 ">
        <h2 className="text-2xl font-bold text-center">
          🫡 Tu n'as rien à faire tu peux aller te reposer ! 🫡
        </h2>
      </div>
    );
};

export default taskList;
