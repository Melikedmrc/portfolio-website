// SkillCard.js
import React from 'react';

function SkillCard({ icon, name }) {
  return (
    <div className="bg-stone-50 shadow-lg p-6 rounded-lg flex items-center transform transition-transform duration-300 hover:scale-110">
      <div className="flex-none w-1/3 flex items-center justify-center">
        <img src={icon} alt={name} className="w-20 h-20 object-contain" />
      </div>
      <div className='flex-grow pl-8'>
        <span className="text-xl font-nunito font-semibold text-left block ">{name}</span>
      </div>
    </div>
  );
}

export default SkillCard;
