export default function Task({ task, index, handleClearTask, projectId }) {
  return (
    <div className="flex justify-between bg-gray-200 my-2">
      <p className="p-5  w-full ">{task}</p>
      <button
        className="p-5"
        onClick={() => {
          handleClearTask(index, projectId);
        }}
      >
        Clear
      </button>
    </div>
  );
}
