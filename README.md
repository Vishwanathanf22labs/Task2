# Task Management App 📝

This is a simple Task Management web application built using **React**. It allows users to manage their daily tasks effectively with essential features like creating, updating, deleting, and filtering tasks.

## 🔧 Features

- ✅ Add new tasks with title, description, due date, and status.
- 📝 Edit existing tasks to update their details.
- ❌ Delete tasks from the list.
- 🔍 Search tasks by title or description.
- 📅 Filter tasks by due date.
- 📊 Filter tasks by status (Pending or Completed).
- 📋 Tasks are displayed in a clean, tabular format.
- 💾 Data is persisted using `localStorage`.

## 🚀 Technologies Used

- React
- Tailwind CSS
- React Router
- JavaScript (ES6)
- localStorage (for saving tasks locally)

## 📁 Project Structure

<pre>
  ```
  src/
│
├── components/
│ ├── Add.jsx # Add task form
│ ├── Edit.jsx # Edit task form
│ ├── List.jsx # Display task list with filter/search
│
├── data.js # Handles localStorage operations
├── App.jsx # Main app with routing
└── main.jsx # React root entry
  ```
</pre>


## 📦 How to Run

1. Clone this repo:
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
2.Install dependencies:
  npm install
3.Start the development server:
  npm run dev

💡 Future Improvements
Add authentication

Connect to backend database (MongoDB, Firebase, etc.)

Add notifications or reminders
