import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTask } from "../data";

const Add = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveTask(task);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default Add;
