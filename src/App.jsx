import { useState } from 'react';
import NavBar from './components/NavBar';
import Task from './components/Task';
import { FormTask } from './components/formTask';
import { handleSubmit } from './services/getForm';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <NavBar/>
      <main className="w-full mx-auto relative bg-cover" 
        style={
        {backgroundImage: "url('https://th.bing.com/th/id/R.8807b8a6b98ccd3fae4a91b4ac323a39?rik=j0eh2u16%2fyaG3A&pid=ImgRaw&r=0')",
          height: "calc(100vh - 60px)"
        }}
      >
        <button className='w-[50px] h-[50px] rounded-full bg-white absolute bottom-24 right-4 text-4xl'><i className="fa-solid fa-plus"></i></button>
        <FormTask handleSubmit={handleSubmit}/>
      </main>
    </>
  )
}

export default App
