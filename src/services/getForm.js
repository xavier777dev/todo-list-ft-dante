export function handleSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.inputTask.value;
  e.target.inputTask.value = ''; 
  const newTasks = [...tasks, {id: crypto.randomUUID(), name: inputValue, completed: false} ]
  setTasks(newTasks);
}

export function handleChecked (id) {
  const newTasks = tasks.map(task => (id == task.id) ? {...task, completed: !task.completed} : task);
  setTasks(newTasks);
}
