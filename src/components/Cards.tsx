import React from 'react';
import useHover from '../utils/useHover';
import { FaPlay } from 'react-icons/fa';
import { Episode } from '../interface/episode';
import { flipDate, formatDurationExplicit } from '../utils/time';
import { useNavigate } from 'react-router-dom';

import { useTrack } from '../hooks/trackHook';

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
      className=" text-white flex flex-col gap-1 max-h-56 overflow-hidden cursor-pointer hover:bg-[#1b345a] p-2 rounded-md relative"
      onClick={() => {
        handleClick(id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={url_img} className={'h-3/5 rounded-lg object-cover'} />
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

//    navigate(`${name_proyect}/album/${id}`);

export const CardEpisode: React.FC<{
  dataEpisode: Episode;
}> = ({ dataEpisode }) => {
  const { playTrack, idTrack } = useTrack();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  return (
    <div
      className={
        ' text-white flex flex-row gap-8 px-4  max-h-36 items-center overflow-hidden  hover:bg-[#1b345a]  rounded-md relative ' +
        (idTrack === dataEpisode.id ? 'bg-lightPurple' : '')
      }
    >
      <img src={dataEpisode.images[0].url} className="h-4/5 rounded-lg object-cover" />

      <div className="flex flex-col h-4/5 gap-1 ">
        <p
          className="font-semibold cursor-pointer hover:underline w-fit"
          onClick={() => navigate(`${name_proyect}/episode/${dataEpisode.id}`)}
        >{`${dataEpisode.name}`}</p>
        <p className="opacity-50   text-[12px] font-openSans  line-clamp-3 text-ellipsis">
          {`${dataEpisode.description}`}
        </p>
        <span className="flex flex-row gap-3  text-[11px] font-openSans mt-1">
          <p>{`${flipDate(dataEpisode.release_date)}`}</p>
          <p>{`${formatDurationExplicit(dataEpisode.duration_ms)}`}</p>
        </span>
        <div
          className={
            'bg-greenLime rounded-full  left-[95%] top-[68%] flex items-center justify-center p-2.5 absolute  cursor-pointer hover:p-[11px]'
          }
          onClick={() => playTrack(dataEpisode.id, 'episode')}
        >
          <FaPlay className="text-darkPurple" size={'12px'} />
        </div>
      </div>
    </div>
  );
};
