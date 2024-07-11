import { useEffect, useState } from 'react';
import tokenServices from '../apis/token';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature } from '../components/Carousel';

const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();

  useEffect(() => {
    tokenServices.getToken().then(() => {
      handleClick();
    });
  }, []);

  const handleClick = async () => {
    console.log(localStorage.getItem('token'));
    const result = await playlistServices.getByFeatures();
    setPlaylistFeature(result);
  };

  return (
    <main className=" min-h-[90vh] max-h-[90vh] w-full bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  flex flex-col items-center overflow-y-scroll overflow-x-hidden ">
      <section className="w-3/5 mt-12 ">
        {playlistFeature && (
          <CarouselPlaylistFeature title={'Playlist para ti'} dataCard={playlistFeature} />
        )}
      </section>
      <section className="w-3/5 mt-12 ">
        {playlistFeature && (
          <CarouselPlaylistFeature title={'Otros'} dataCard={playlistFeature} />
        )}
      </section>
    </main>
  );
};

export default Home;
