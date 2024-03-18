import Task from "./Task";

export default function TaskList({ project }) {
  return (
    <div className="max-h-96 overflow-scroll">
      {project.tasks.map((task, index) => (
        <Task task={task} key={index} index={index} />
      ))}
    </div>
  );
}
