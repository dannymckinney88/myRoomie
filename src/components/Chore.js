import React, {useState} from "react";
import useDropdown from '../useDropdown'

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>✅</button>
        <button onClick={() => removeTask(index)}>🗑️</button>
      </div>
    </div>
  );
}

function TaskForm({ addTask }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Chore</label>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default function Chore() {
  const [task, setTask] = useState([
    {
      text: "Clean the garage",
      isCompleted: false
    },
    {
      text: "do the dishes",
      isCompleted: false
    },
    {
      text: "walk the dogs",
      isCompleted: false
    }
  ]);

  const addTask = text => {
    const newTask = [...task, { text }];
    setTask(newTask);
  };

  const completeTask = index => {
    const newTask = [...task];
    newTask[index].isCompleted = true;
    setTask(newTask);
  };

  const removeTask = index => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <div className="task">
      <div className="task-list">
        {task.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}