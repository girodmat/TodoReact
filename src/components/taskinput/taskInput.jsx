import { useState } from "react";
import taskList from "../tasklist/taskList";

const taskInput = ({ addTask }) => {
  const [TaskTitle, setTaskTitle] = useState("");
  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
    console.log(TaskTitle);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    addTask(TaskTitle);
    setTaskTitle("");
  };

  return (
    <div className="w-full flex flex-col p-10 mb-20 ring-1 ring-stone-700 rounded-md shadow-xl shadow-stone-900   ">
      <h2 className="text-2xl font-bold text-left mb-4">
        {" "}
        🎯 Ajoute ta tache !{" "}
      </h2>
      <form className="flex gap-3" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Indiquez un titre de tâche"
          className="px-6 rounded-md text-xl text-gray-500 bg-stone-900 h-10 w-full ring-1 ring-slate-800"
          onChange={handleInputChange}
          value={TaskTitle}
          required
        ></input>
        <button
          type="submit"
          className="text-xl px-6 rounded-sm font-bold text-blue-600 bg-blue-900 bg-opacity-60 h-10"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default taskInput;
