export default function Task({ task, index }) {
  return (
    <div className="flex justify-between bg-gray-200 ">
      <p className="p-5 my-2 w-full ">{task}</p>
      <button className="p-5">Clear</button>
    </div>
  );
}
