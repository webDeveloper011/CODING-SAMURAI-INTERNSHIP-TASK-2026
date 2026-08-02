import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text, time);
    setText("");
    setTime("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="todo-input"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="todo-time"
      />
      <button type="submit" className="todo-btn">Add</button>
    </form>
  );
}

export default TodoForm;
