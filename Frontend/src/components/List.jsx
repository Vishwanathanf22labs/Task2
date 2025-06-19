import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, deleteTask } from "../data";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const storedTasks = await getTasks();
      setTasks(
        storedTasks.map((task) => ({
          ...task,
          status: task.status || "Pending",
        }))
      );
    };
    fetchData();
  }, []);

  const handleAddTask = () => navigate("/add");
  const handleEdit = (id) => navigate(`/edit/${id}`);
  const handleDelete = async (id) => {
    await deleteTask(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate ? task.dueDate === filterDate : true;
    const matchesStatus = filterStatus ? task.status === filterStatus : true;
    return matchesSearch && matchesDate && matchesStatus;
  });

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Task List</h1>

      <button
        onClick={handleAddTask}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-300 transition mb-6 cursor-pointer"
      >
        Add Task
      </button>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No tasks found</div>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Due: <span className="font-medium">{task.dueDate}</span>
                </p>
                <p className="text-sm mt-1">
                  Status:{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </p>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition w-full md:w-auto cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition w-full md:w-auto cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
