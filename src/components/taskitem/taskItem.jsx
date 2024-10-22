const taskItem = ({ task, editTask, deleteTask }) => {
  console.log(task);
  return (
    <li
      onClick={() => editTask(task.id, !task.isDone)}
      className={`${task?.isDone ? "bg-green-700" : "bg-stone-800"}`}
    >
      <div className="flex items-center justify-between w-full p-10 mb-10 ring-1 ring-stone-700 rounded-md shadow-xl shadow-stone-900">
        <div className="flex items-center gap-5">
          <div
            className={` ${
              task?.isDone
                ? "text-green-600 bg-green-900"
                : "text-blue-600 bg-blue-900"
            } text-xl p-2 rounded-sm font-bold  bg-opacity-60`}
          >
            {task.id}
          </div>
          <div className="text-xl">{task.title} </div>
        </div>
        <button
          className="text-xl px-4 py-2 rounded-sm font-bold text-blue-600 bg-blue-900 bg-opacity-60 "
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default taskItem;
