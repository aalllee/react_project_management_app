import MainDisplay from "./components/MainDisplay.jsx";
import IdleDisplay from "./components/IdleDisplay.jsx";
import { useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
function App() {
  let [actionState, setActionState] = useState("Idle");
  let [projectList, setProjectList] = useState([]);
  let [displayedProject, setDisplayedProject] = useState({});

  const handleAddTask = (id, task) => {
    console.log("handle add task for ID:", id, " ", task);

    setProjectList((prevList) => {
      let newList = prevList.map((project) => {
        let newTasks = [...project.tasks];

        if (project.id === id) {
          console.log("ID MATCH");
          newTasks.push(task);
        }

        return { ...project, tasks: newTasks };
      });

      setDisplayedProject(newList[id]);

      return newList;
    });
  };

  const handleClearTask = (id, projectId) => {
    console.log("TASK ID", id);
    console.log("Project ID", projectId);
    setProjectList((prevList) => {
      let newList = prevList.map((project) => {
        let newTasks = [...project.tasks];

        if (project.id === projectId) {
          console.log("ID MATCH");
          newTasks.splice(parseInt(id), 1);
        }

        return { ...project, tasks: newTasks };
      });

      setDisplayedProject(newList[projectId]);

      return newList;
    });
  };

  const handleProjectDelete = (id) => {
    setProjectList((prevList) => {
      let newList = [...prevList];

      if (newList.length == 1) {
        newList = [];
      } else {
        newList.splice(parseInt(id), 1);
      }

      setActionState("Idle");

      for (let i = 0; i < newList.length; i++) {
        newList[i].id = i;
      }

      return newList;
    });
  };

  const handleProjectClick = (index) => {
    setActionState("DisplayProject");
    setDisplayedProject(projectList[index]);
  };

  const handleAddProjectClick = () => {
    setActionState("AddingProject");
  };

  const handleCancelClick = () => {
    setActionState("Idle");
  };

  const handleSaveClick = (title, desc, date) => {
    setActionState("Idle");

    let addedProject = {
      title: title,
      description: desc,
      date: date,
      id: -1,
      tasks: [],
    };
    if (title === "" || date === "") {
      console.log("ignore input");
    } else {
      setProjectList((prevList) => {
        let newList = [];
        if (projectList.length === 0) {
        } else {
          newList = [...prevList];
        }
        newList.push(addedProject);

        for (let i = 0; i < newList.length; i++) {
          newList[i].id = i;
        }

        return newList;
      });
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen ">
        <ProjectList
          handleAddProjectClick={handleAddProjectClick}
          projectList={projectList}
          handleProjectClick={handleProjectClick}
          handleProjectDelete={handleProjectDelete}
        />
        <MainDisplay
          actionState={actionState}
          handleCancelClick={handleCancelClick}
          handleAddProjectClick={handleAddProjectClick}
          handleSaveClick={handleSaveClick}
          displayedProject={displayedProject}
          handleProjectDelete={handleProjectDelete}
          handleAddTask={handleAddTask}
          handleClearTask={handleClearTask}
        />
      </div>
    </>
  );
}

export default App;
