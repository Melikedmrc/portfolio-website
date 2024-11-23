import React from 'react';
import SkillCard from './SkillCard';

function Skill() {
  // Skill verilerini dizi olarak tanımlayalım
  const skills = [
    { icon: "https://img.icons8.com/color/144/html-5--v1.png", name: 'HTML5' },
    { icon: "https://img.icons8.com/color/144/css3.png", name: 'CSS3' },
    { icon: "https://img.icons8.com/color/144/bootstrap--v1.png", name: 'Bootstrap' },
    { icon: "https://img.icons8.com/color/144/sass.png", name: 'Sass' },
    { icon: "https://img.icons8.com/color/144/javascript--v1.png", name: 'JavaScript' },
    { icon: "https://img.icons8.com/office/144/react.png", name: 'React' },
    { icon: "https://img.icons8.com/color/144/tailwindcss.png", name: 'TailwindCSS' },
    { icon: "https://img.icons8.com/nolan/144/c-sharp-logo.png", name: 'C#' },
    { icon: "https://img.icons8.com/color/144/microsoft-sql-server.png", name: 'SQL Server' },
    { icon: "https://img.icons8.com/color/144/git.png", name: 'Git' },
    { icon: "https://img.icons8.com/color/144/firebase.png", name: 'Firebase' },
  ];

  return (
    <div id="skill" className="min-h-screen bg-[#FDFBF9] flex items-center justify-center">
      <div className="text-center mb-20">
        {/* <h2 className="text-5xl font-yeseva font-light text-gray-900">My Skills</h2> */}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 ">
        {/* SkillCard componentini döngü ile render ediyoruz */}
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Skill;

