import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Episode } from '../interface/episode';
import Return from '../components/Return';
import { HeadBoardDefault } from '../components/HeadBoard';
import { useTrack } from '../hooks/trackHook';
import episodeServices from '../apis/episode';
import { Input } from '../components/Input';
import LayoutIntern from '../layout/LayoutIntern';
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
    <LayoutIntern idBarside={-1}>
      <div className="flex flex-col gap-5 border-b-2 border-lightPurple">
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
    </LayoutIntern>
  );
};

export default EpisodePage;
