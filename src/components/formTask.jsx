import { handleSubmit } from "../services/getForm";

export function FormTask({tasks, setTasks}) {
  return (
    <form onSubmit={(e) => handleSubmit(e, setTasks, tasks)} 
      className='absolute px-10 w-full h-[50px] bottom-0 flex flex-col gap-3 
        justify-center items-center bg-[#0173B7]'>
      <input type="text" name='inputTask' className='w-full px-4 py-1 outline-none border-none 
        rounded text-xl' placeholder='New task...' 
      />
    </form>
  )
}