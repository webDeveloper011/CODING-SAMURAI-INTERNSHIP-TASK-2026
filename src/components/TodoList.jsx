function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="delete-btn"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
