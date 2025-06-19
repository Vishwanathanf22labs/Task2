import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTasks, updateTask } from "../data";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const allTasks = await getTasks();
      const target = allTasks.find((t) => t.id === Number(id));
      setTask(target);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(task.id, task);
    navigate("/");
  };

  if (!task) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
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
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;
