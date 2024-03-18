import { useRef } from "react";

export default function AddProjectDisplay({
  handleCancelClick,
  handleSaveClick,
}) {
  const title = useRef(0);
  const description = useRef(0);
  const date = useRef(0);

  return (
    <div className="w-full bg-gray-200 flex flex-col justify-center items-center">
      <div className="w-10/12">
        <div className="flex justify-end ">
          <button
            className="px-4 py-2 mx-4 bg-gray-800 rounded-lg text-white"
            onClick={() =>
              handleSaveClick(
                title.current.value,
                description.current.value,
                date.current.value
              )
            }
          >
            SAVE
          </button>
          <button onClick={handleCancelClick}>CANCEL</button>
        </div>
        <form action="submit.php" method="post">
          <label className="text-2xl text-black py-5">Title</label>
          <input
            ref={title}
            type="text"
            className="text-2xl w-full h-14 mb-5 mt-2 px-5"
          ></input>
          <label className="text-2xl text-black py-5">Description</label>
          <textarea
            ref={description}
            name="Text1"
            cols="40"
            rows="5"
            className="text-2xl w-full h-30 mb-5 mt-2 px-5"
          ></textarea>

          <label className="text-2xl text-black my-5">Date</label>
          <input
            ref={date}
            type="date"
            className="text-2xl w-full py-15 h-14 mb-5 mt-2"
          ></input>
        </form>
      </div>
    </div>
  );
}
