import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="w-full h-16 px-64 fixed top-0 left-0 bg-[#FDFBF9] flex justify-between items-center shadow-md shadow-stone-200 py-9 z-50">
      <div className='flex pl-3 pt-2'>
      <Link
          to="about"  // Sayfa başındaki AboutMe bölümüne kaydırma
          smooth={true}  // Düzgün bir geçiş yapılacak
          duration={500}  // 500ms süresince kayacak
          className="hover:scale-105 transition-all"  // Logo stilini ekle
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className='text-black text-lg font-semibold font-playfair tracking-widest'>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          className="p-10 cursor-pointer hover:text-stone-400"
        >
          SKILL
        </Link>
        <a href='https://github.com/Melikedmrc?tab=repositories' target="blank" className='p-10 hover:text-stone-400'>
          PROJECTS
        </a>
        <a href="mailto:melikedmrcii11@gmail.com" className='p-10 hover:text-stone-400'>
          CONTACT
        </a>
      </div>
      {/* <div className='pr-16'>
        <button className='font-playfair text-md font-bold tracking-wider text-white bg-stone-400 hover:bg-stone-500  px-5 py-3 rounded-full'>
          RESUME CV
        </button>
      </div> */}

    </header>
  );
}

export default Navbar;
// #6A1B1B