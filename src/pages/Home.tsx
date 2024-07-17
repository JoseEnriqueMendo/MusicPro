import { useEffect, useState, useCallback } from 'react';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature } from '../components/Carousel';
import { BarSide } from '../components/BarSide';
import useHover from '../utils/useHover';

const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();
  const [playlistCategory, setPlaylistCategory] = useState<PlaylistFeatureOrCategory[]>([]);

  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  const handleClick = useCallback(async () => {
    // console.log(localStorage.getItem('token'));
    const result = await playlistServices.getByFeatures();
    setPlaylistFeature(result);
    setPlaylistCategory([
      await playlistServices.getByCategory('rock'),
      await playlistServices.getByCategory('dinner'),
      await playlistServices.getByCategory('pop'),
      await playlistServices.getByCategory('metal'),
      await playlistServices.getByCategory('cumbia'),
    ]);
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full flex flex-row overflow-hidden">
      <BarSide element={1} />

      <div
        className={`bg-transparent w-[65vw] mt-12 flex flex-col px-10 overflow-y-auto overflow-x-hidden custom-scrollbar ${
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

        {playlistCategory.map((category, index) => (
          <section className="w-full" key={index}>
            <CarouselPlaylistFeature title={category.message} dataCard={category} />
          </section>
        ))}
      </div>
      <div className="w-[14vw] min-h-[90vh]"></div>
    </main>
  );
};

export default Home;
