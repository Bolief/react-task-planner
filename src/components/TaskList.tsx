type TaskListProps = {
  tasks: string[];
  deleteTask: (index: number) => void;
};

function TaskList({ tasks, deleteTask }: TaskListProps) {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;