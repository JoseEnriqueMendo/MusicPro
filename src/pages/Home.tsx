import { useEffect, useState } from 'react';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature, CarouselAlbumsFeature } from '../components/Carousel';
import albumService from '../apis/albums';
import { NewReleases } from '../interface/album';
import LayoutIntern from '../layout/LayoutIntern';
import { InputSecundary } from '../components/Input';
const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();
  const [playlistCategory, setPlaylistCategory] = useState<PlaylistFeatureOrCategory[]>();
  const [newReleases, setNewReleases] = useState<NewReleases>();

  const getNewReleases = async () => {
    const releases = await albumService.getNewReleases();
    if (releases) {
      setNewReleases(releases);
      return;
    }
    return;
  };

  const handleClick = async () => {
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
    <LayoutIntern idBarside={1}>
      {/* <InputSecundary text="Buscar música, álbum, artista..." /> */}

      <section className="w-full mt-5">
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
    </LayoutIntern>
  );
};

export default Home;
