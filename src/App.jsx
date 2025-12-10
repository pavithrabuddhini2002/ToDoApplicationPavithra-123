
import './App.css';

import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 to-blue-700 p-4">

      {/* Card */}
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
          To-Do List 📋
        </h1>

        {/* Input Section */}
        <div className="flex bg-gray-100 p-2 rounded-full items-center">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add your task"
            className="flex-1 bg-transparent px-4 py-2 outline-none text-gray-700 placeholder-gray-500"
          />
          <button
            onClick={addTask}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            ADD
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-6 space-y-4">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-gray-700"
            >
              {/* Checkbox + Text */}
              <div className="flex items-center gap-3">
                
                {/* Custom circle check */}
                <div
                  onClick={() => toggleTask(index)}
                  className={`w-5 h-5 flex items-center justify-center rounded-full border-2 cursor-pointer transition ${
                    item.done
                      ? "bg-red-500 border-red-500"
                      : "border-gray-400"
                  }`}
                >
                  {item.done && (
                    <span className="text-white text-sm">✔</span>
                  )}
                </div>

                <span
                  className={`${
                    item.done
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {item.text}
                </span>
              </div>

              {/* Delete button */}
              <button
                onClick={() => deleteTask(index)}
                className="text-gray-400 hover:text-red-500 text-xl font-bold"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

