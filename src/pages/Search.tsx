/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import LayoutIntern from '../layout/LayoutIntern';
import { SearchResponse } from '../interface/search';
import searchServices from '../apis/search';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import { useParams } from 'react-router-dom';
import { CarouselDefault } from '../components/Carousel';

const ArtistShow = () => {
  const [searchArray, setSearchArray] = useState<SearchResponse>();
  const navigate = useNavigate();
  const { url_search } = useParams();
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const callSearch = async () => {
    const res = await searchServices.get(url_search || ' ', 10);
    setSearchArray(res);
  };

  useEffect(() => {
    callSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url_search]);

  const hasItems = (items?: any[]) => (items?.length || 0) > 0;

  return (
    <LayoutIntern idBarside={-1}>
      <section className="w-full flex flex-col gap-1  overflow-hidden">
        <div className="flex flex-col ">
          <Return route="none" />
        </div>
        {hasItems(searchArray?.artists?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-end pr-10 max-sm:pr-5">
            Artistas
          </p>
        )}
        <CarouselDefault
          children={searchArray?.artists?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/artist/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-full object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
        {hasItems(searchArray?.albums?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-start pr-10 max-sm:pr-5 mt-1">
            Álbumes
          </p>
        )}
        <CarouselDefault
          children={searchArray?.albums?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/album/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-md object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
        {hasItems(searchArray?.playlists?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-end pr-10 max-sm:pr-5 mt-1">
            Playlist
          </p>
        )}
        <CarouselDefault
          children={searchArray?.playlists?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/playlist/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-md object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
        {hasItems(searchArray?.tracks?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-start pr-10 max-sm:pr-5 mt-1">
            Canciones
          </p>
        )}
        <CarouselDefault
          children={searchArray?.tracks?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/track/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.album.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-md object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
        {hasItems(searchArray?.episodes?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-end pr-10 max-sm:pr-5 mt-1">
            Episodios
          </p>
        )}
        <CarouselDefault
          children={searchArray?.episodes?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/episode/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-md object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
        {hasItems(searchArray?.shows?.items) && (
          <p className="text-white font-clashDisplay font-bold text-4xl w-full text-start pr-10 max-sm:pr-5 mt-1">
            Shows
          </p>
        )}
        <CarouselDefault
          children={searchArray?.shows?.items.map((item) => (
            <div
              className="flex flex-col items-center text-center gap-1 hover:opacity-80 cursor-pointer max-w-40"
              onClick={() => navigate(`${name_proyect}/show/${item.id}`)}
              key={item.id}
            >
              <img
                src={item.images[0]?.url}
                className="min-w-40 w-40 min-h-40 h-40 rounded-md object-cover"
                alt={item.name}
              />
              <p className="font-bold truncate w-[80%]">{item.name}</p>
            </div>
          ))}
        />
      </section>
    </LayoutIntern>
  );
};

export default ArtistShow;
