import Typewriter from 'typewriter-effect'; 
import img from "../assets/img.jpg"; // Resmin doğru importu

function AboutMe() {
  return (
    <div id="about" className="flex flex-col-reverse lg:flex-row lg:mt-0 md:mt-44 sm:mt-28 items-center justify-center h-screen">
      {/* İçerik bölümü */}
      <div className="flex flex-col w-full max-w-3xl gap-6 lg:gap-9 p-8 md:p-12 lg:p-16 lg:mt-8 md:mt-0 items-center lg:items-start ">
        <h1 className="font-yeseva text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Melike Demirci
        </h1>
        <div className="text-[#5a0202] text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-nunito font-semibold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-End Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              autoStart: true,
            }}
          />
        </div>
        <p className="text-center lg:text-left font-nunito text-sm sm:text-base md:text-lg text-stone-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore cumque aliquid expedita
          pariatur iste deleniti provident optio repellendus velit.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <a href="http://www.linkedin.com/in/melike-demirci-790324202" target="_blank" rel="noopener noreferrer">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/ios-glyphs/60/linkedin.png"
              alt="LinkedIn"
              className='-ml-2'
            />
          </a>
          <a href="https://github.com/Melikedmrc" target="_blank" rel="noopener noreferrer">
            <img
              width="46"
              height="46"
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/46/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png"
              alt="GitHub"
              className='-ml-2'
            />
          </a>
          <a href="http://discordapp.com/users/790198314921885727" target="_blank" rel="noopener noreferrer">
            <img 
              width="39" 
              height="39" 
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/39/external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo.png" 
              alt="Discord" />
          </a>
          <button className="font-playfair text-sm font-bold tracking-wider text-white bg-stone-400 hover:bg-stone-500 px-4 py-2 rounded-md md:w-36 md:h-10 ml-2">
            RESUME CV
          </button>
        </div>
      </div>

      {/* Resim bölümü */}
      <div className="flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0 ">
        <img className="rounded-full w-full h-full animate-smoothBounce" src={img} alt="About Me" />
      </div>
    </div>
  );
}

export default AboutMe;
