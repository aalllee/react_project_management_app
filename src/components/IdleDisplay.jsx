export default function IdleDisplay({ handleAddProjectClick }) {
  return (
    <div className="w-full bg-gray-200 flex flex-col justify-center items-center">
      <h2 className="text-2xl my-1">NO PROJECT SELECTED</h2>
      <p className="text-xl my-1">
        Select a project or get started with a new one
      </p>
      <button
        className="text-white bg-gray-600 my-6 py-2 px-4 hover:bg-gray-500 rounded"
        onClick={handleAddProjectClick}
      >
        {" "}
        Create a new project
      </button>
    </div>
  );
}
