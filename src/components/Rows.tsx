import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiPlayCircleLight } from 'react-icons/pi';
import useHover from '../utils/useHover';
import { TopTracks } from '../interface/artists';

export const RowTable: React.FC<{
  idItem: string;
  typeItem: string;
  indexItem: number;
  img: string;
  name: string;
  artistName: string;
  albumName: string;
  handleClick: (id: string, type: string) => void;
}> = ({ idItem, indexItem, img, name, artistName, albumName, typeItem, handleClick }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  return (
    <tr
      key={idItem}
      className="hover:bg-blue-900 text-left py-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="px-4 text-end py-3">
        {!isHovered ? (
          indexItem + 1
        ) : (
          <PiPlayCircleLight
            size={'18px'}
            className="cursor-pointer"
            onClick={() => {
              handleClick(idItem, typeItem);
            }}
          />
        )}
      </td>
      <td className="flex flex-row gap-4 font-openSans font-semibold text-lg  items-center mr-10 overflow-hidden py-3">
        <img src={img} className="w-12 h-12 rounded-md object-cover" />{' '}
        <p
          className="hover:underline cursor-pointer"
          onClick={() => navigate(`${name_proyect}/${typeItem}/${idItem}`)}
        >
          {name}
        </p>
      </td>
      <td className=" mr-5 text-lg py-3   ">{artistName}</td>
      <td className=" mr-5 text-lg py-3">{albumName}</td>
    </tr>
  );
};

export const AlbumTable: React.FC<{
  idItem: string;
  indexItem: number;
  img: string;
  name: string;
  artistName: string;
  duration: string;
  handleClick: (id: string) => void;
}> = ({ idItem, indexItem, img, name, duration, artistName, handleClick }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <tr
      key={idItem}
      className="hover:bg-blue-900 text-left py-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="px-4 text-end">
        {!isHovered ? (
          indexItem + 1
        ) : (
          <PiPlayCircleLight
            size={'18px'}
            className="cursor-pointer"
            onClick={() => {
              handleClick(idItem);
            }}
          />
        )}
      </td>
      <td className="flex flex-row gap-4 font-openSans font-semibold text-lg items-center mr-10 overflow-hidden">
        <img src={img} className="w-12 h-12 rounded-md object-cover" />
        <p className="truncate max-w-xs font-clashDisplay">{name}</p>
      </td>
      <td className="truncate  mr-5 text-lg font-clashDisplay">{artistName}</td>
      <td className="truncate mr-5 text-lg font-clashDisplay">{duration}</td>
    </tr>
  );
};
