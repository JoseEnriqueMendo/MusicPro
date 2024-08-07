import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiPlayCircleLight } from 'react-icons/pi';
import useHover from '../utils/useHover';
// import { TopTracks } from '../interface/artists';
import { useTrack } from '../hooks/trackHook';

export const RowTable: React.FC<{
  idItem: string;
  typeItem: string;
  indexItem: number;
  img: string;
  name: string;
  artistName: string;
  idArtist: string;
  albumName: string;
  idAlbum: string;
  handleClick: (id: string, type: string) => void;
}> = ({
  idItem,
  indexItem,
  img,
  name,
  artistName,
  idArtist,
  albumName,
  idAlbum,
  typeItem,
  handleClick,
}) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();
  const navigate = useNavigate();
  const { idTrack } = useTrack();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  return (
    <tr
      key={idItem}
      className={
        'hover:bg-lightPurple  py-3 w-full ' + (idTrack === idItem ? 'bg-lightPurple' : '')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="px-4  py-3">
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
      <td className="flex flex-row gap-4 font-openSans font-semibold text-[16px] items-center mr-5  overflow-hidden py-3 max-w-80 ">
        <img src={img} className="w-11 h-11 rounded-md object-cover" />
        <p
          className="hover:underline cursor-pointer line-clamp-2 text-ellipsis"
          onClick={() => navigate(`${name_proyect}/${typeItem}/${idItem}`)}
        >
          {name}
        </p>
      </td>
      <td className=" mr-2 text-[16px] py-3  pr-5  max-w-24 max-[420px]:hidden">
        <a
          className=" hover:underline cursor-pointer line-clamp-2 text-ellipsis"
          onClick={() => navigate(`${name_proyect}/artist/${idArtist}`)}
        >
          {artistName}
        </a>
      </td>
      <td className="  text-[16px] py-3 hover:underline cursor-pointer  overflow-hidden max-w-72 max-sm:hidden ">
        <a
          className=" hover:underline cursor-pointer line-clamp-2 text-ellipsis"
          onClick={() => navigate(`${name_proyect}/album/${idAlbum}`)}
        >
          {albumName}
        </a>
      </td>
    </tr>
  );
};

export const AlbumTable: React.FC<{
  idItem: string;
  indexItem: number;
  img: string;
  name: string;
  artistName: string;
  idArtist: string;
  duration: string;
  handleClick: (id: string) => void;
}> = ({ idItem, indexItem, img, name, duration, artistName, idArtist, handleClick }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();
  const { idTrack } = useTrack();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  const navigate = useNavigate();

  return (
    <tr
      key={idItem}
      className={
        'hover:bg-lightPurple text-left py-3 ' + (idTrack === idItem ? 'bg-lightPurple' : '')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td className="px-2 w-10 text-center  py-3 ">
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
      <td className="flex flex-row gap-4 font-openSans font-semibold text-[16px] items-center mr-5  overflow-hidden py-3 max-w-80 ">
        <img src={img} className="w-11 h-11 rounded-md object-cover" />
        <p
          className="hover:underline cursor-pointer font-light  line-clamp-2 text-ellipsis"
          onClick={() => navigate(`${name_proyect}/track/${idItem}`)}
        >
          {name}
        </p>
      </td>
      <td className=" text-[16px] py-3 hover:underline cursor-pointer  overflow-hidden max-w-24 max-[420px]:hidden  ">
        <a
          className=" hover:underline cursor-pointer line-clamp-2 text-ellipsis"
          onClick={() => navigate(`${name_proyect}/artist/${idArtist}`)}
        >
          {artistName}
        </a>
      </td>
      <td className="truncate  text-[16px] py-3  line-clamp-2 text-ellipsis max-sm:hidden ">
        {duration}
      </td>
    </tr>
  );
};
