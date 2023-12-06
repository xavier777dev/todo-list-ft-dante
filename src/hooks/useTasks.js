export function handleCompleted (id, setTasks, tasks) {
  const newTasks = tasks.map(task => (id == task.id) ? {...task, completed: !task.completed} : task);
  setTasks(newTasks);
}

export const handleDelete = (id, setTasks, tasks) => {
  const newTasks = tasks.filter(task => (task.id !== id) && task);
  setTasks(newTasks);
}
