import { useEffect, useState } from 'react';
import tokenServices from '../apis/token';
import playlistServices from '../apis/playlist';
import { PlaylistFeatureOrCategory } from '../interface/playlist';
import { CarouselPlaylistFeature } from '../components/Carousel';
import { BarSide } from '../components/BarSide';
const Home = () => {
  const [playlistFeature, setPlaylistFeature] = useState<PlaylistFeatureOrCategory>();

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
    <main className=" min-h-[90vh] max-h-[90vh] w-full bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  flex flex-row  overflow-hidden ">
      <BarSide element={1} />

      <div className="w-3/5 mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar">
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
      <div className="w-1/5 min-h-[90vh] "></div>
    </main>
  );
};

export default Home;
