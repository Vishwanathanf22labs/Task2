Task Management App 📝
This is a simple Task Management web application built using React with a Node.js backend. It allows users to manage their daily tasks effectively with essential features like creating, updating, deleting, and filtering tasks.
🔧 Features

✅ Add new tasks with title, description, due date, and status.
📝 Edit existing tasks to update their details.
❌ Delete tasks from the list.
🔍 Search tasks by title or description.
📅 Filter tasks by due date.
📊 Filter tasks by status (Pending or Completed).
📋 Tasks are displayed in a clean, tabular format.
💾 Data is persisted using a tasks.json file via a Node.js backend.

🚀 Technologies Used

React
Tailwind CSS
React Router
JavaScript (ES6)
Node.js
Express.js
Axios (for API requests)
JSON file (tasks.json) for data persistence

📁 Project Structure
<pre>
  ```
task-management-app/
├── backend/
│   ├── server.js       # Node.js/Express server
│
├── src/
│   ├── components/
│   │   ├── Add.jsx     # Add task form
│   │   ├── Edit.jsx    # Edit task form
│   │   ├── List.jsx    # Display task list with filter/search
│   ├── data.js         # Handles API operations
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # React root entry
├── package.json        # Project dependencies
  ```
</pre>
📦 How to Run

Clone this repo:
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app


Install dependencies:

For the frontend:npm install


For the backend (in the backend folder, if structured separately):cd backend
npm install

Start the backend server:

In the backend folder (or root if server.js is there):node server.js


The server runs on http://localhost:5000. Ensure a tasks.json file is created in the same directory as server.js.


Start the frontend development server:

In the project root:npm run dev


The app typically runs on http://localhost:5173 (or check the terminal for the exact port).


Access the app:

Open your browser and navigate to http://localhost:5173 (or the port shown in the terminal).



💡 Future Improvements

Add user authentication for secure task management.
Connect to a backend database (e.g., MongoDB, Firebase) for scalable data storage.
Implement notifications or reminders for task due dates.
Enhance UI with animations or a dark mode option.
Add task categories or priority levels.
