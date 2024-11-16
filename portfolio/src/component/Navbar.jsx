import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="w-full h-16 fixed top-0 left-0 bg-transparent flex justify-between items-center shadow-md shadow-gray-200 px-6 py-8 z-50">
      <div className='flex pl-3 pt-1'>
        <a href="#">
          <img src={logo} alt="Logo" className="hover:scale-105 transition-all" />
        </a>
      </div>
      <div className='text-black text-base font-semibold font-playfair tracking-widest'>
        <a href='#skill' className='p-10'>
          SKILL
        </a>
        <a href='#skill' className='p-10'>
          PROJECTS
        </a>
        <a href="mailto:melikedmrcii11@gmail.com" className='p-10'>
          CONTACT
        </a>
      </div>
      <div className='pr-16'>
        <button className='font-playfair text-md font-bold tracking-wider text-white bg-stone-400 px-5 py-3 rounded-full'>
          RESUME CV
        </button>
      </div>

    </header>
  );
}

export default Navbar;
// #6A1B1B