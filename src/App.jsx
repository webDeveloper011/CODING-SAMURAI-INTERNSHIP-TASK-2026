import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Task with time
  const addTodo = (text, time) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      time,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete Task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Task
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Filtered Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Progress Calculation
  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="container">
      <h1>📝 My To-Do List📝</h1>
      <TodoForm addTodo={addTodo} />

      <div className="filters">
        <button
          className={`all ${filter === "all" ? "selected" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`active ${filter === "active" ? "selected" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`completed ${filter === "completed" ? "selected" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />

      <p className="counter">
        Total: {totalCount} | Completed: {completedCount}
      </p>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}

export default App;
