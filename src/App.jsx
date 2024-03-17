import Idle from "./components/Idle";

import { useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
function App() {
  let [actionState, setActionState] = useState("Idle");
  let [projectList, setProjectList] = useState([]);
  let [displayedProject, setDisplayedProject] = useState({});

  const handleProjectDelete = (id) => {
    setProjectList((prevList) => {
      let newList = [...prevList];
      console.log("OLD LIST", prevList);
      console.log("ID To remOVE", id);

      console.log("NEW LIST", newList);
      if (newList.length == 1) {
        newList = [];
      } else {
        newList.splice(parseInt(id), 1);
      }

      console.log("NEW LIST SPLICED", newList);

      setActionState("Idle");

      for (let i = 0; i < newList.length; i++) {
        newList[i].id = i;
      }

      return newList;
    });
  };

  const handleProjectClick = (index) => {
    console.log("viewing project");
    setActionState("DisplayProject");
    setDisplayedProject(projectList[index]);
    console.log(index);
  };

  const handleAddProjectClick = () => {
    console.log("add project clicked");
    setActionState("AddingProject");
  };

  const handleCancelClick = () => {
    console.log("add action cancelled");
    setActionState("Idle");
  };

  const handleSaveClick = (title, desc, date) => {
    console.log("Save Project");
    setActionState("Idle");

    let addedProject = { title: title, description: desc, date: date, id: -1 };
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
      <div className="flex flex-row h-96">
        <ProjectList
          handleAddProjectClick={handleAddProjectClick}
          projectList={projectList}
          handleProjectClick={handleProjectClick}
          handleProjectDelete={handleProjectDelete}
        />
        <Idle
          actionState={actionState}
          handleCancelClick={handleCancelClick}
          handleAddProjectClick={handleAddProjectClick}
          handleSaveClick={handleSaveClick}
          displayedProject={displayedProject}
          handleProjectDelete={handleProjectDelete}
        />
      </div>
    </>
  );
}

export default App;
