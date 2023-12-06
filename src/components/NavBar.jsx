const NavBar = () => {
  return (
    <header className='h-[60px] bg-[#0173B7] flex justify-between px-10 items-center'>
      <div className="flex gap-10">
        <button><i className="fa-solid fa-check p-2 bg-white rounded-full"></i></button>
        <h1 className="font-bold text-2xl uppercase text-white">all list</h1>
      </div>

      <div className="flex gap-10">
        <button><i className="fa-solid fa-magnifying-glass text-3xl text-white"></i></button>
        <button>
          <i className="fa-solid fa-bars text-3xl text-white"></i>
        </button>
      </div>
    </header>
  )
}

export default NavBar