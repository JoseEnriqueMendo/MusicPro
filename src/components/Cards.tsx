import React from 'react';
import useHover from '../utils/useHover';
import { FaPlay } from 'react-icons/fa';

export const CardMusic: React.FC<{
  url_img: string;
  name: string;
  id: string;
  abstract: string;
  handleClick: (id: string) => void;
}> = ({ url_img, name, id, abstract, handleClick }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <div
      className=" text-white flex flex-col gap-1 max-h-56 overflow-hidden cursor-pointer hover:bg-[#05208a] px-2 py-01 rounded-md relative"
      onClick={() => {
        handleClick(id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={url_img} className="h-3/5 rounded-lg object-cover" />
      <p className="font-bold text-[16px] font-openSans truncate">{name}</p>
      <p className="  opacity-50   text-[13px] font-openSans  line-clamp-2 text-ellipsis ">
        {abstract}
      </p>
      <div
        className={`bg-greenLime rounded-full  left-[70%] top-[40%] flex items-center justify-center p-3 absolute ${
          isHovered ? 'visible' : 'invisible'
        }`}
      >
        <FaPlay className="text-darkPurple" />
      </div>
    </div>
  );
};
