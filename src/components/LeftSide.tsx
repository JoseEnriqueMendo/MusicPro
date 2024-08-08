import React, { useState, useEffect } from 'react';
//import hooks
import musicServices from '../apis/track';
import { Track } from '../interface/track';
import useHover from '../utils/useHover';
import { useTrack } from '../hooks/trackHook';
import { Episode } from '../interface/episode';
import episodeServices from '../apis/episode';
import artistsService from '../apis/artist';
import { useNavigate } from 'react-router-dom';
import { ArtistObject } from '../interface/artists';

const LeftSide: React.FC = () => {
  const { idTrack, type } = useTrack();
  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const [dataT, setDataT] = useState<Track>();
  const [dataE, setDataE] = useState<Episode>();
  const navigate = useNavigate();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  const callTrack = async (id: string) => {
    const res = await musicServices.get(id);
    setDataT(res);
  };

  const callEpisode = async (id: string) => {
    const res = await episodeServices.get(id);
    setDataE(res);
  };

  const callArtist = async (id: string) => {
    const res = await artistsService.getArtist(id);
    setArtist(res);
  };

  useEffect(() => {
    if (type === 'track') {
      callTrack(idTrack || '');
    }
    if (type === 'episode') {
      callEpisode(idTrack || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (type === 'track') {
      callTrack(idTrack || '');
    }
    if (type === 'episode') {
      callEpisode(idTrack || '');
    }
  }, [idTrack, type]);

  useEffect(() => {
    if (dataT && dataT.artists.length > 0) {
      callArtist(dataT.artists[0].id);
    }
  }, [dataT]);

  const ShowDataTrack = () => {
    return (
      <div className="px-4 py-4  w-[100%]   h-full mx-auto  flex flex-col  gap-2">
        <figure className="overflow-hidden w-full flex items-center justify-center rounded-md min-h-48">
          <img className="object-cover w-full min-h-48 " src={dataT?.album.images[0].url} />
        </figure>
        <div className="w-full overflow-hidden min-h-8">
          <p
            className="text-white font-openSans font-bold text-2xl cursor-pointer hover:underline  whitespace-nowrap  animate-marquee"
            onClick={() => navigate(name_proyect + '/track/' + dataT?.id)}
          >
            {dataT?.name}
          </p>
        </div>
        <p className="text-white text-[18px]">{dataT?.album.artists[0].name}</p>
        <div className="w-full flex flex-col gap-1 p-4 rounded-md bg-[#22395f9a]">
          <p className="text-white font-semibold">Acerca del artista</p>
          <img src={artist?.images[0].url} />
          <p className="font-bold text-white">{artist?.name}</p>
          {/* <p className="text-white font-semibold text-xs">Generos</p> */}
          <p className="text-white opacity-50 text-sm">{artist?.genres.join(' ')}</p>
          {/* <p className="text-white">{artist?.followers.total}</p> */}
        </div>
      </div>
    );
  };

  const ShowDataEpisode = () => {
    return (
      <div className="px-4 py-4  w-[100%]    mx-auto  flex flex-col  gap-3">
        <figure className="overflow-hidden w-full flex items-center justify-center rounded-md">
          <img className="object-cover w-full" src={dataE?.images[0].url} />
        </figure>
        <div className="w-full overflow-hidden ">
          <p
            className="text-white font-openSans text-2xl cursor-pointer hover:underline  whitespace-nowrap  animate-marquee"
            onClick={() => navigate(name_proyect + '/episode/' + dataE?.id)}
          >
            {dataE?.name}
          </p>
        </div>

        <p
          className="text-white font-openSans text-sm opacity-50 cursor-pointer hover:underline"
          onClick={() => navigate(name_proyect + '/show/' + dataE?.show?.id)}
        >
          {dataE?.show?.name}
        </p>
        <div className="w-full flex flex-col gap-2 p-4 rounded-md bg-[#1b345a]">
          <p className="text-white font-semibold">Acerca del podcast</p>
          <p className="text-white line-clamp-3 text-ellipsis opacity-50 text-[12px]">
            {dataE?.show?.description}
          </p>

          <div className="flex flex-row gap-2 w-full   mt-3 ">
            <img src={dataE?.show?.images[0].url} className="w-12 h-12" />
            <span className="flex flex-col  text-white">
              <p className="truncate text-sm">{dataE?.show?.name}</p>
              <p className="truncate text-sm">{dataE?.show?.publisher}</p>
            </span>
            <p></p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={
        'mi-w-[20vw]  w-[20vw]  min-h-[90vh]  max-h-[90vh] mediaHeight   max-[900px]:hidden    bg-darkPurple overflow-y-auto  overflow-x-hidden custom-scrollbar border-l-2 border-l-[#1a3050] ' +
        (isHovered ? 'modify' : '')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {type === 'track' && ShowDataTrack()}
      {type === 'episode' && ShowDataEpisode()}
    </div>
  );
};

export default LeftSide;
