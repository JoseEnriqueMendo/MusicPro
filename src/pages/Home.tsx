import { useEffect, useState } from 'react';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature, CarouselAlbumsFeature } from '../components/Carousel';
import albumService from '../apis/albums';
import { NewReleases } from '../interface/album';
import LayoutIntern from '../layout/LayoutIntern';
const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();

  const [newReleases, setNewReleases] = useState<NewReleases>();
  const [rockCategory, setRockCategory] = useState<PlaylistFeatureOrCategory>();
  const [dinnerCategory, setDinnerCategory] = useState<PlaylistFeatureOrCategory>();
  const [popCategory, setPopCategory] = useState<PlaylistFeatureOrCategory>();
  const [metalCategory, setMetalCategory] = useState<PlaylistFeatureOrCategory>();
  const [cumbiaCategory, setCumbiaCategory] = useState<PlaylistFeatureOrCategory>();

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

    setRockCategory(await playlistServices.getByCategory('rock'));
    setDinnerCategory(await playlistServices.getByCategory('dinner'));
    setPopCategory(await playlistServices.getByCategory('pop'));
    setMetalCategory(await playlistServices.getByCategory('metal'));
    setCumbiaCategory(await playlistServices.getByCategory('cumbia'));
  };

  useEffect(() => {
    getNewReleases();
    handleClick();
  }, []);

  return (
    <LayoutIntern idBarside={1}>
      <section className="w-full mt-5">
        {playlistFeature && (
          <CarouselPlaylistFeature title={'Playlist para ti'} dataCard={playlistFeature} />
        )}
      </section>

      <section className="w-full">
        {newReleases && (
          <CarouselAlbumsFeature title={'Nuevos lanzamientos'} dataCard={newReleases} />
        )}
      </section>

      {rockCategory && (
        <section className="w-full">
          <CarouselPlaylistFeature title={'Rock'} dataCard={rockCategory} />
        </section>
      )}

      {dinnerCategory && (
        <section className="w-full">
          <CarouselPlaylistFeature title={'Dinner'} dataCard={dinnerCategory} />
        </section>
      )}

      {popCategory && (
        <section className="w-full">
          <CarouselPlaylistFeature title={'Pop'} dataCard={popCategory} />
        </section>
      )}

      {metalCategory && (
        <section className="w-full">
          <CarouselPlaylistFeature title={'Metal'} dataCard={metalCategory} />
        </section>
      )}

      {cumbiaCategory && (
        <section className="w-full">
          <CarouselPlaylistFeature title={'Cumbia'} dataCard={cumbiaCategory} />
        </section>
      )}
    </LayoutIntern>
  );
};

export default Home;
