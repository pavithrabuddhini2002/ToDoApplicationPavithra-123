import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import bgImage from './assets/istockphoto-826661764-640x640.jpg';


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
    <div
  style={{ backgroundImage: `url(${bgImage})` }}
  className="min-h-screen flex justify-center items-start pt-28 p-4"
>
      <Navbar/>
      {/* NEON Glow Wrapper */}
      <div className="w-full max-w-lg bg-[#0a0a0a] border border-yellow-400/40 shadow-[0_0_25px_5px_rgba(255,255,0,0.25)] rounded-3xl p-8 animate-[float_4s_ease-in-out_infinite]">

        <h1 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-2 tracking-widest">
          TO-DO LIST
        </h1>

        {/* Input Section */}
        <div className="flex bg-black border border-yellow-400 rounded-full p-2 items-center shadow-[0_0_12px_2px_rgba(255,255,0,0.3)]">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Type your next mission…"
            className="flex-1 bg-transparent px-4 py-2 outline-none text-yellow-300 placeholder-yellow-600"
          />

          <button
            onClick={addTask}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition shadow-[0_0_10px_2px_rgba(255,255,0,0.7)] hover:shadow-[0_0_20px_4px_rgba(255,255,0,0.9)]"
          >
            ADD
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-6 space-y-4">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-yellow-300 bg-black/40 border border-yellow-400/40 p-3 rounded-xl shadow-[0_0_15px_3px_rgba(255,255,0,0.15)] hover:shadow-[0_0_25px_4px_rgba(255,255,0,0.3)] transition"
            >
              {/* Checkbox + Text */}
              <div className="flex items-center gap-3">

                {/* Neon Check Circle */}
                <div
                  onClick={() => toggleTask(index)}
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2 cursor-pointer transition shadow-[0_0_10px_rgba(255,255,0,0.4)]
                    ${
                      item.done
                        ? "bg-yellow-400 border-yellow-400"
                        : "border-yellow-600"
                    }
                  `}
                >
                  {item.done && (
                    <span className="text-black font-bold">✔</span>
                  )}
                </div>

                <span
                  className={`transition ${
                    item.done
                      ? "line-through text-yellow-700"
                      : "text-yellow-300"
                  }`}
                >
                  {item.text}
                </span>
              </div>

              {/* Delete button */}
              <button
                onClick={() => deleteTask(index)}
                className="text-yellow-600 hover:text-yellow-400 text-2xl font-extrabold transition"
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
