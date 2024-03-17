import Idle from "./components/Idle";
import ProjectList from "./components/ProjectList";
import { useState } from "react";

function App() {
  let [actionState, setActionState] = useState("Idle");
  let [projectList, setProjectList] = useState([]);

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

    let addedProject = { title: title, description: desc, date: date };
    if (title === "" || date === "") {
      console.log("ignore input");
    } else {
      let proj = 4;
      setProjectList((prevList) => {
        let newList = [];
        if (projectList.length === 0) {
        } else {
          newList = [...prevList];
        }
        newList.push(addedProject);
        console.log("prev", prevList);
        //let newList = [2, 5, 6];
        return newList;
      });
    }
  };

  console.log(projectList);

  return (
    <>
      <div className="flex flex-row h-96">
        <ProjectList
          handleAddProjectClick={handleAddProjectClick}
          projectList={projectList}
        />
        <Idle
          actionState={actionState}
          handleCancelClick={handleCancelClick}
          handleSaveClick={handleSaveClick}
        />
      </div>
    </>
  );
}

export default App;
