import Typewriter from 'typewriter-effect';
import img from "../assets/img.jpg"; // Resmin doğru importu

function AboutMe() {
  return (
    <div className="flex items-center justify-center mx-80 my-72 gap-16 ">
      {/* İçerik bölümü: %75 genişlik */}
      <div className="flex flex-col p-16 w-3/4 gap-9">
        <h1 className="font-yeseva text-8xl">Melike Demirci</h1>
        <div className='text-[#5a0202] text-2xl font-nunito font-semibold'>
          <Typewriter
            className="font-nunito text-3xl"
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

        <p className='font-nunito text-base text-stone-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore cumque aliquid expedita
          pariatur iste deleniti provident optio repellendus velit.
        </p>
        <div className='flex flex-row items-center justify-start -ml-2 gap-2'>
          <a href="http://www.linkedin.com/in/melike-demirci-790324202" target="_blank" rel="noopener noreferrer" className='-mr-2'>
            <img
              width="54"
              height="54"
              src="https://img.icons8.com/ios-glyphs/54/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/Melikedmrc" target="_blank" rel="noopener noreferrer">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/40/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png"
              alt="GitHub"
            />
          </a>
          {/* <a href="https://github.com/Melikedmrc" target="_blank" rel="noopener noreferrer">
            <img 
              width="40" 
              height="40"
              src="https://img.icons8.com/ios-filled/40/twitterx--v1.png" 
              alt="Twitter" />
          </a> */}

          {/** linki düzelt */}
          <a href="http://discordapp.com/users/790198314921885727"  target="_blank" rel="noopener noreferrer">
            <img 
              width="40" 
              height="40" 
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/40/external-discord-chat-for-social-gaming-between-peers-logo-bold-tal-revivo.png" 
              alt="Discord" />
          </a>
        </div>
      </div>

      {/* Resim bölümü: %25 genişlik */}
      <div className="flex w-1/4 flex-shrink-0">
        <img className="rounded-full w-full h-full animate-smoothBounce" src={img} alt="About Me" />
      </div>
    </div>
  );
}

export default AboutMe;
