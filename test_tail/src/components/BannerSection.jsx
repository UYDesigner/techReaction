import React from 'react';

export const BannerSection = () => {
  return (
    <div className="w-full   bg-[#1e1812] flex items-center justify-center">
      <div className="max-w-[1260px] w-full h-full ">
        <img
          className="w-full h-full object-cover"
          src="/Images/Banner.png"
          alt="logo"
        />
      </div>
    </div>
  );
};
