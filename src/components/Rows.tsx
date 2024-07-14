import React, { useState } from 'react';
import { PiPlayCircleLight } from 'react-icons/pi';

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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <tr
      key={idItem}
      className="hover:bg-blue-900 text-left  py-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="px-4 text-end  ">
        {!isHovered ? (
          indexItem + 1
        ) : (
          <PiPlayCircleLight
            size={'135%'}
            className="cursor-pointer "
            onClick={() => {
              handleClick(idItem, typeItem);
            }}
          />
        )}
      </td>
      <td className="flex   flex-row gap-3 font-openSans font-semibold text-sm truncate items-center mr-10 overflow-hidden ">
        <img src={img} className="w-8" />
        <p>{name}</p>
      </td>
      <td className="truncate mr-5 ">{artistName}</td>
      <td className="truncate  ">{albumName}</td>
    </tr>
  );
};
