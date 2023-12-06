import { handleCompleted, handleDelete } from "../hooks/useTasks";
import trashIcon from "../assets/trash.ico";

const Task = ({task, setTasks, tasks}) => {
  const {id, name, completed} = task;
  return (
    <li className='flex justify-between items-center px-5 py-2 bg-white rounded bg-cyan-300/75
    hover:bg-[#a8d4ed] transition-all cursor-pointer'
    >

      <div className="flex items-center gap-2">
        <input type="checkbox" onChange={() => handleCompleted(id, setTasks, tasks)} 
          checked={completed} name={id}
          />
        <span className="font-semibold text-[#013C6A] ">{name}</span>
      </div>
      <img className="w-4 h-4 cursor-pointer hover:scale-125 transition-all" src={trashIcon} alt="icon trash" 
        onClick={() => handleDelete(id, setTasks, tasks)} 
      />
    </li>
  )
}

export default Task
