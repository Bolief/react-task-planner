import { useState } from "react";

type TaskFormProps = {
  addTask: (task: string) => void;
};

function TaskForm({ addTask }: TaskFormProps) {
  const [task, setTask] = useState("");
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;