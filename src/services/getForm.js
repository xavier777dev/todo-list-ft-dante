export function handleSubmit(e, setTasks, tasks) {
  e.preventDefault();
  const inputValue = e.target.inputTask.value;
  e.target.inputTask.value = ''; 
  const newTasks = [...tasks, {id: crypto.randomUUID(), name: inputValue, completed: false} ]
  setTasks(newTasks);
}

