export default function ProjectDisplay({ project, handleProjectDelete }) {
  return (
    <div className="bg-white  p-10 flex flex-col justify-start items-start w-full">
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
          <input></input>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
