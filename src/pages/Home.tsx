import { useEffect, useState } from 'react';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature, CarouselAlbumsFeature } from '../components/Carousel';
import { BarSide } from '../components/BarSide';
import useHover from '../utils/useHover';
import albumService from '../apis/albums';
import { NewReleases } from '../interface/album';
const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();
  const [playlistCategory, setPlaylistCategory] = useState<PlaylistFeatureOrCategory[]>();
  const [newReleases, setNewReleases] = useState<NewReleases>();
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  const getNewReleases = async () => {
    const releases = await albumService.getNewReleases();
    if (releases) {
      setNewReleases(releases);
      return;
    }
    return;
  };

  const handleClick = async () => {
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
  };

  useEffect(() => {
    getNewReleases();
    handleClick();
  }, []);

  return (
    <main className="  min-h-[90vh] max-h-[90vh] w-full flex flex-row overflow-hidden ">
      <BarSide element={1} />
      <div
        className={`bg-transparent w-[67vw] mt-12 flex flex-col px-10 overflow-y-auto overflow-x-hidden custom-scrollbar ${
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

        {playlistCategory &&
          playlistCategory.map((category, index) => (
            <section className="w-full" key={index}>
              <CarouselPlaylistFeature title={category.message} dataCard={category} />
            </section>
          ))}

        <section className="w-full">
          {newReleases && (
            <CarouselAlbumsFeature title={'Nuevos lanzamientos'} dataCard={newReleases} />
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
