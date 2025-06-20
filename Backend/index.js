import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 5000

const DATA_FILE = path.join(__dirname, "tasks.json")

app.use(cors())
app.use(express.json())

let tasks = []

const loadTasks = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8")
    tasks = JSON.parse(data)
  } catch (error) {
    tasks = []
  }
}

// Save tasks
const saveTasks = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2))
}

// ⬇ Initial load
loadTasks()

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks)
})

// Add a task
app.post("/api/tasks", (req, res) => {
  const newTask = { ...req.body, id: Date.now() }
  tasks.push(newTask)
  saveTasks()
  res.status(201).json(newTask)
})

// Update a task
app.put("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id)
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...req.body, id: taskId } : task
  )
  saveTasks()
  res.json({ message: "Task updated" })
})

// Delete a task
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id)
  tasks = tasks.filter((task) => task.id !== taskId)
  saveTasks()
  res.json({ message: "Task deleted" })
})

// Server 
try {
  app.listen(PORT, () => {
    console.log(`Server started...`)
  })
} catch (error) {
  console.error("Failed ", error)
}
