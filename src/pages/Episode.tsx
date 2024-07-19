//  BORRAR SI ES NECESARIO
//
//

import { useState, useEffect } from 'react';
import { BarSide } from '../components/BarSide';
import { useParams } from 'react-router-dom';
import { Episode } from '../interface/episode';
import Return from '../components/Return';
import { HeadBoardDefault } from '../components/HeadBoard';
import { useTrack } from '../hooks/trackHook';
import episodeServices from '../apis/episode';
const EpisodePage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Episode>();
  const { playTrack } = useTrack();

  useEffect(() => {
    const callEpisode = async (id: string) => {
      const res = await episodeServices.get(id);
      setEpisode(res);
    };
    callEpisode(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full   flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-[65vw] mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <Return route="home" />
        <HeadBoardDefault
          img={episode?.images[0].url || ''}
          description={episode?.description || ''}
          name={episode?.name || ''}
          owner_name={episode?.show?.name || ''}
          type={'Episodio de podcast'}
          onhandleClick={() => playTrack(id || '', 'episode')}
        />

        <div className="w-full">
          <p className=" opacity-50   text-[13px] font-openSans  line-clamp-5 text-ellipsis">
            {/* {`Fecha de lanzamiento: ${flipDate(track?.album.release_date || '')}`} */}
          </p>
        </div>
      </div>
    </main>
  );
};

export default EpisodePage;
