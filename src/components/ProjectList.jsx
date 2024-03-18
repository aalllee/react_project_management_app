import Project from "./Project";

export default function ProjectList({
  handleAddProjectClick,
  projectList,
  handleProjectClick,
}) {
  let projects = projectList.map((project, index) => (
    <button
      key={index}
      className="text-white bg-gray-800 my-1 py-4 hover:bg-gray-500 rounded"
      onClick={() => {
        handleProjectClick(index);
      }}
    >
      {`${project.id + 1}. ${project.title}`}
    </button>
  ));

  return (
    <div className="w-1/3 bg-black p-8 h-auto">
      <h2 className="text-4xl text-white my-4">YOUR PROJECTS</h2>
      <button
        className="text-white bg-gray-800 text-xl my-4 py-1 px-5 hover:bg-gray-500 rounded"
        onClick={handleAddProjectClick}
      >
        Add Project
      </button>

      <ul className="flex flex-col my-8">{projects}</ul>
    </div>
  );
}
