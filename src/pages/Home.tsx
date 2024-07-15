import { useEffect, useState } from 'react';
import tokenServices from '../apis/token';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature } from '../components/Carousel';
import { BarSide } from '../components/BarSide';
import useHover from '../utils/useHover';

const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  useEffect(() => {
    tokenServices.getToken();
    handleClick();
  }, []);

  const handleClick = async () => {
    // console.log(localStorage.getItem('token'));
    const result = await playlistServices.getByFeatures();
    setPlaylistFeature(result);
  };

  return (
    <main className=" min-h-[90vh] max-h-[90vh] w-full   flex flex-row  overflow-hidden">
      <BarSide element={1} />

      <div
        className={` bg-transparent w-[65vw] mt-12 flex flex-col px-10 overflow-y-auto overflow-x-hidden custom-scrollbar ${
          isHovered ? 'modify' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className="w-full">
          {playlistFeature && (
            <CarouselPlaylistFeature title={'Playlist para ti'} dataCard={playlistFeature} />
          )}
        </section>
        <section className="w-full">
          {playlistFeature && (
            <CarouselPlaylistFeature title={'Otros'} dataCard={playlistFeature} />
          )}
        </section>
        <section className="w-full">
          {playlistFeature && (
            <CarouselPlaylistFeature title={'Otros'} dataCard={playlistFeature} />
          )}
        </section>
        <section className="w-full">
          {playlistFeature && (
            <CarouselPlaylistFeature title={'Otros'} dataCard={playlistFeature} />
          )}
        </section>
        <section className="w-full">
          {playlistFeature && (
            <CarouselPlaylistFeature title={'Otros'} dataCard={playlistFeature} />
          )}
        </section>
      </div>
      <div className="w-[14vw] min-h-[90vh] "></div>
    </main>
  );
};

export default Home;
