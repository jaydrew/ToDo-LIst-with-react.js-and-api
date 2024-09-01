import React, { useState } from "react";
import { lineSpinner } from 'ldrs'




const CreateTask = ({ addTask, sending }) => {
  const [job, setJob] = useState("");

lineSpinner.register()


  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    if (job.trim()) {
      const newTask = {
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
    } else {
      alert("Please enter task");
    }
  };
  return (
    <div className="flex mb-5">
      <input
        type="text"
        className="flex-grow  border-2 border-slate-300 rounded-l-lg p-2 disabled:opacity-50"
        onChange={handleOnChange}
        value={job}
        placeholder="Enter task here..."
        disabled={sending}
      />
      <button
        onClick={handleAddTaskBtn}
        disabled={sending}
        className="bg-slate-300 border-2 disabled:opacity-50 border-slate-300 rounded-r-lg px-4 py-2 font-medium "
      >
        {sending 
        ? (
  
          <l-line-spinner
            size="20"
            stroke="3"
            speed="1" 
            color="black" 
          ></l-line-spinner>
            )  : (
          "Add Task" )}
      </button>
    </div>
  );
};

export default CreateTask;
