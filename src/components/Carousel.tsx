import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { NewReleases } from '../interface/album';
import { CardMusic } from './Cards';
import { getArtistsNames } from '../utils/artists';

export const CarouselPlaylistFeature: React.FC<{
  title: string;
  dataCard: PlaylistFeatureOrCategory;
}> = ({ title, dataCard }) => {
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 500) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 800) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentIndex < dataCard.playlists.items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleClick = (id: string) => {
    navigate(`${name_proyect}/playlist/${id}`);
  };

  return (
    <div className="w-full min-h-60 flex flex-col gap-2 ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-white font-clashDisplay font-bold text-2xl">{title}</p>
        <div className="flex flex-row gap-3 ">
          <IoArrowBack
            size={'28px'}
            className="text-greenLime cursor-pointer hover:text-lime-400"
            onClick={handlePrev}
          />
          <IoArrowForward
            size={'28px'}
            className="text-greenLime cursor-pointer hover:text-lime-400"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 max-lg:grid-cols-4 max-[800px]:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 gap-2 overflow-x-auto ">
        {dataCard?.playlists.items
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((item, index) => {
            return (
              <CardMusic
                key={index}
                url_img={item.images[0].url}
                name={item.name}
                id={item.id}
                abstract={item.description}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export const CarouselAlbumsFeature: React.FC<{
  title: string;
  dataCard: NewReleases;
}> = ({ title, dataCard }) => {
  const name_proyect = import.meta.env.VITE_NAME_PAGE || '';
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 500) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 800) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentIndex < dataCard.albums.items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClick = (id: string) => {
    navigate(`${name_proyect}/album/${id}`);
  };

  return (
    <div className="w-full min-h-60 flex flex-col gap-2 ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-white font-clashDisplay font-bold text-2xl">{title}</p>
        <div className="flex flex-row gap-3 ">
          <IoArrowBack
            size={'28px'}
            className="text-greenLime cursor-pointer hover:text-lime-400"
            onClick={handlePrev}
          />
          <IoArrowForward
            size={'28px'}
            className="text-greenLime cursor-pointer hover:text-lime-400"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 max-lg:grid-cols-4 max-[800px]:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 gap-2 overflow-x-auto ">
        {dataCard?.albums.items
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((album, index) => {
            return (
              <CardMusic
                key={index}
                url_img={album.images[0].url}
                name={album.name}
                id={album.id}
                abstract={
                  getArtistsNames(album.artists) + ' - ' + album.release_date.substring(0, 4)
                }
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};
