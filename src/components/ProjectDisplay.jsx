import { useState } from "react";
import { useRef } from "react";
import Task from "./Task";
import TaskList from "./TaskList";
export default function ProjectDisplay({
  project,
  handleProjectDelete,
  handleAddTask,
}) {
  const [taskList, setTaskList] = useState([]);
  const task = useRef("");
  const handleAddClick = () => {
    if (task.current.value !== "") {
      handleAddTask(project.id, task.current.value);
    }
    task.current.value = "";
  };

  return (
    <div className="bg-white  p-10 flex flex-col justify-start items-start w-full ">
      <div className="flex justify-between w-full h-100 ">
        <h1 className="text-2xl text-black">{project.title}</h1>
        <button
          onClick={() => {
            handleProjectDelete(project.id);
          }}
        >
          Delete
        </button>
      </div>
      <div className="h-full w-full">
        <p>{project.date}</p>
        <p>{project.description}</p>
        <hr className="h-1 bg-gray-500 w-full my-5" />
        <h2 className="text-2xl text-black">Tasks</h2>
        <form>
          <input ref={task} className="bg-gray-200"></input>
          <button type="button" className="p-5 " onClick={handleAddClick}>
            Add
          </button>
        </form>
        <TaskList project={project} />
      </div>
    </div>
  );
}
