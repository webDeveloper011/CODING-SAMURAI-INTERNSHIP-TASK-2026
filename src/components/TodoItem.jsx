function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />

      <div className="todo-content">
        <span className="todo-text">{todo.text}</span>
        {todo.time && <span className="todo-time-display">⏰ {todo.time}</span>}
      </div>

      <div className="actions">
        <button onClick={() => editTodo(todo.id, prompt("Edit task:", todo.text))} className="edit-btn">✏️ Edit</button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">🗑️ Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
