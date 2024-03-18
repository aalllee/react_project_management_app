import { useRef } from "react";
import ProjectDisplay from "./ProjectDisplay";
import IdleDisplay from "./IdleDisplay";
import AddProjectDisplay from "./AddProjectDisplay";
export default function MainDisplay({
  actionState,
  handleCancelClick,
  handleAddProjectClick,
  handleSaveClick,
  displayedProject,
  handleProjectDelete,
  handleAddTask,
}) {
  const title = useRef(0);
  const description = useRef(0);
  const date = useRef(0);

  let mainWindow = {};
  if (actionState === "Idle") {
    mainWindow = <IdleDisplay handleAddProjectClick={handleAddProjectClick} />;
  } else if (actionState === "AddingProject") {
    mainWindow = (
      <AddProjectDisplay
        handleCancelClick={handleCancelClick}
        handleSaveClick={handleSaveClick}
      />
    );
  } else if (actionState === "DisplayProject") {
    mainWindow = (
      <ProjectDisplay
        project={displayedProject}
        handleProjectDelete={handleProjectDelete}
        handleAddTask={handleAddTask}
      />
    );
  }

  return mainWindow;
}
