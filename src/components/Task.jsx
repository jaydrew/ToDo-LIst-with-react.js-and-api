import React, { useState } from "react";
import { ring2 } from "ldrs";
import { hourglass } from 'ldrs'


ring2.register();

hourglass.register();




const Task = ({
  job: { id, task, isDone, },
  removeTask,
  doneTask,
  
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleRemoveTaskBtn = async () => {
    if (confirm("Are you sure to delete?")) {
      setIsDeleting(true);
      await removeTask(id);
      setIsDeleting(false);
    }
  };

  const handleOnChange = async () => {
    setIsChecking(true);
    ring2.register();
    await doneTask(id, isDone);
    setIsChecking(false);
  };
  return (
    <div className=" flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <div className=" flex items-center gap-3">
        {isChecking ? (
           <l-line-spinner
           size="20"
           stroke="3"
           speed="1"
           color="black"
         ></l-line-spinner>
        ) : (
          <input
            type="checkbox"
            onChange={handleOnChange}
            checked={isDone}
            className="size-4"
          />
        )}
      
        <p className={isDone ? "line-through" : ""}>{task}
        </p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-red-100 border-2 border-red-100  rounded-lg py-2 text-red-700 px-4"
      >
        {isDeleting ? (
          <l-hourglass
          size="20"
          bg-opacity="0.1"
          speed="1.75" 
          color="black" 
        ></l-hourglass> 
        ) : (
          "Delete"
        )}
      </button>
    </div>
  );
};

export default Task;
