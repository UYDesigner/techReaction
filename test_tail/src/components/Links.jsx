import React, { useState } from 'react';

const Links = () => {
  const link = ['individual', 'business', 'investor'];
  const [visible, setVisible] = useState(null);

  return (
    <div className='flex justify-between w-[350px] text-[12px] mx-1 font-[650] uppercase text-gray-700 items-center cursor-pointer pb-2'>
      {link.map((l, idx) => (
        <div
          key={idx}
          className='hover:text-red-500 text-center'
          onMouseEnter={() => setVisible(idx)}
          onMouseLeave={() => setVisible(null)}
          onClick={() => setVisible(idx)}
        >
          <div className={`h-[2px] transition-all duration-300 ease-in-out  mb-1 ${visible === idx ? 'bg-red-500 w-full' : 'bg-transparent w-0'}`} />
          {l}
        </div>
      ))}
    </div>
  );
};

export default Links;
