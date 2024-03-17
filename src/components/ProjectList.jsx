import Project from "./Project";

export default function ProjectList({
  handleAddProjectClick,
  projectList,
  handleProjectClick,
}) {
  let projects = projectList.map((project, index) => (
    <button
      key={index}
      className="text-white bg-gray-500"
      onClick={() => {
        handleProjectClick(index);
      }}
    >
      {`${project.id + 1}. ${project.title}`}
    </button>
  ));

  console.log(projectList);
  console.log("mapped", projects);
  return (
    <div className="w-1/3 bg-black p-8">
      <h2 className="text-2xl text-white">YOUR PROJECTS</h2>
      <button
        className="text-white bg-gray-500 "
        onClick={handleAddProjectClick}
      >
        Add Project
      </button>

      <ul className="flex flex-col ">{projects}</ul>
    </div>
  );
}
