import { useRef } from "react";
import ProjectDisplay from "./ProjectDisplay";

export default function Idle({
  actionState,
  handleCancelClick,
  handleAddProjectClick,
  handleSaveClick,
  displayedProject,
  handleProjectDelete,
}) {
  const title = useRef(0);
  const description = useRef(0);
  const date = useRef(0);

  let mainWindow = {};
  if (actionState === "Idle") {
    mainWindow = (
      <div className="w-2/3 bg-cyan-500 flex flex-col justify-center items-center">
        <h2>NO PROJECT SELECTED</h2>
        <p>Select a project or get started with a new one</p>
        <button className="bg-gray-500" onClick={handleAddProjectClick}>
          {" "}
          Create a new project
        </button>
      </div>
    );
  } else if (actionState === "AddingProject") {
    mainWindow = (
      <div className="bg-gray-500 flex flex-col justify-center items-center">
        <div className="w-10/12">
          <div className="flex justify-end bg-gray-300">
            <button
              className="p-10"
              onClick={() =>
                handleSaveClick(
                  title.current.value,
                  description.current.value,
                  date.current.value
                )
              }
            >
              SAVE
            </button>
            <button onClick={handleCancelClick}>CANCEL</button>
          </div>
          <form action="submit.php" method="post">
            <label>LABEL1</label>
            <input ref={title} type="text" className="w-full"></input>
            <label>Description</label>
            <input ref={description} type="text" className="w-full"></input>
            <label>DATE</label>
            <input ref={date} type="date" className="w-full"></input>
          </form>
        </div>
      </div>
    );
  } else if (actionState === "DisplayProject") {
    mainWindow = (
      <ProjectDisplay
        project={displayedProject}
        handleProjectDelete={handleProjectDelete}
      />
    );
  }

  return mainWindow;
}
