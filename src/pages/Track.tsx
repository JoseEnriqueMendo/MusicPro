import { useEffect, useState } from 'react';
import { BarSide } from '../components/BarSide';
import { useParams } from 'react-router-dom';
import musicServices from '../apis/track';
import { Track } from '../interface/track';
//43DeSV93pJPT4lCZaWZ6b1

import { HeadBoardDefault } from '../components/HeadBoard';
import Return from '../components/Return';
import { useTrack } from '../hooks/trackHook';
import { flipDate } from '../utils/time';

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState<Track>();
  const { playTrack } = useTrack();

  useEffect(() => {
    const callTrack = async (id: string) => {
      const res = await musicServices.get(id);
      setTrack(res);
    };
    callTrack(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full   flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-[84vw] mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <Return route="home" />
        <HeadBoardDefault
          img={track?.album.images[0].url || ''}
          description={''}
          name={track?.name || ''}
          owner_name={track?.album.artists[0].name || ''}
          type={'Canción'}
          onhandleClick={() => playTrack(id || '', 'track')}
        />

        <div className="w-full">
          <p className=" opacity-50   text-[13px] font-openSans  line-clamp-5 text-ellipsis">
            {`Fecha de lanzamiento: ${flipDate(track?.album.release_date || '')}`}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TrackPage;
