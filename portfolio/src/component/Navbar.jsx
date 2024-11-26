import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // İkonlar için react-icons kullanıyoruz
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 justify-center lg:px-0 xl:px-32 fixed top-0 left-0 bg-[#FDFBF9] flex lg:justify-between items-center shadow-md shadow-stone-200 py-9 z-50">
      {/* Logo */}
      <div className="hidden md:block pt-2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:scale-105 transition-all"
        >
          <img src={logo} alt="Logo" className="cursor-pointer" />
        </Link>
      </div>

      {/* Menü Butonu (Mobil) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-2xl ml-auto mr-6 focus:outline-none"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>


      {/* Menü (Büyük Ekran) */}
      <div className="hidden lg:flex text-black md:text-base lg:text-lg font-semibold font-playfair tracking-widest">
        <Link
          to="skill"
          smooth={true}
          duration={500}
          className="p-10 cursor-pointer hover:text-stone-400"
        >
          SKILL
        </Link>
        <a
          href="https://github.com/Melikedmrc?tab=repositories"
          target="blank"
          className="p-10 hover:text-stone-400"
        >
          PROJECTS
        </a>
        <a
          href="mailto:melikedmrcii11@gmail.com"
          className="p-10 hover:text-stone-400"
        >
          CONTACT
        </a>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FDFBF9] flex flex-col items-center  font-semibold font-playfair tracking-widest lg:hidden shadow-md z-50">
          <Link
            to="skill"
            smooth={true}
            duration={500}
            className="py-3 cursor-pointer hover:text-stone-400"
            onClick={() => setIsMenuOpen(false)}
          >
            SKILL
          </Link>
          <a
            href="https://github.com/Melikedmrc?tab=repositories"
            target="blank"
            className="py-3 hover:text-stone-400"
            onClick={() => setIsMenuOpen(false)}
          >
            PROJECTS
          </a>
          <a
            href="mailto:melikedmrcii11@gmail.com"
            className="py-3 hover:text-stone-400"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
