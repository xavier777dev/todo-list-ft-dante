import { handleChecked } from "../services/getForm";

export function ListTasks({task, handleChecked}) {
  return (<ul className='flex flex-col gap-3 px-4 pt-4'>
    {
      tasks.map(task => {
        return <Task key={task.id} task={task} />
      })
    } 
  </ul>
  )
}

const  ({task, handleChecked}) => {
  const {id, name, completed} = task;
  return (
    <li key={id} className='flex justify-between px-5 py-2 bg-white rounded bg-cyan-300/75 '>
      <span>{name}</span>
      <input type="checkbox" onChange={() => handleChecked(id)} checked={completed} />
    </li>
  )
}

export default Task
