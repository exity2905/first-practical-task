import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]); // Храним список задач
  const [text, setText] = useState("");  // Храним текст из input

  const addTask = () => {
    if (text.trim() === "") return; // Проверка на пустой ввод
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText(""); // Очищаем input
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
