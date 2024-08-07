import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import musicServices from '../apis/track';
import { Track } from '../interface/track';
import { TopTracks } from '../interface/artists';
import artistsService from '../apis/artist';
import { HeadBoardDefault } from '../components/HeadBoard';
import Return from '../components/Return';
import { useTrack } from '../hooks/trackHook';
import { flipDate } from '../utils/time';
import { RowTable } from '../components/Rows';
import LayoutIntern from '../layout/LayoutIntern';

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState<Track>();
  const { playTrack } = useTrack();
  const [topTracks, setTopTracks] = useState<TopTracks | null>(null);

  const callTopTracks = async (artistID: string) => {
    const res = await artistsService.getTopTracks(artistID);
    setTopTracks(res);
  };

  useEffect(() => {
    const callTrack = async (id: string) => {
      const res = await musicServices.get(id);
      setTrack(res);
    };
    callTrack(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (track && track?.album.artists.length > 0) {
      callTopTracks(track?.album.artists[0].id);
    }
  }, [track]);

  return (
    <LayoutIntern idBarside={-1}>
      <div className="flex flex-col gap-5">
        <Return route="home" />
        <HeadBoardDefault
          img={track?.album.images[0].url || ''}
          description={''}
          name={track?.name || ''}
          owner_name={track?.album.artists[0].name || ''}
          type={'Canción'}
          onhandleClick={() => playTrack(id || '', 'track')}
        />
        <div className="w-full flex flex-col ">
          <p className=" opacity-50   text-[13px] font-openSans  line-clamp-5 text-ellipsis">
            {`Fecha de lanzamiento: ${flipDate(track?.album.release_date || '')}`}
          </p>
        </div>
        <div className="w-full">
          <p className=" -mt-2    text-[17px] font-openSans  line-clamp-5 text-ellipsis font-bold">
            {`Canciones Populares de ${track?.album.artists[0].name}`}
          </p>
          <div className="w-full mt-2 ">
            <table className=" w-full">
              <thead>
                <tr className="border-b border-[#3566C7] ">
                  <th className=" py-1 ">#</th>
                  <th className="text-left py-1">Canción</th>
                  <th className="text-left py-1 max-[420px]:hidden">Artista</th>
                  <th className="text-left py-1 max-sm:hidden">Album</th>
                </tr>
              </thead>
              <tbody>
                {topTracks?.tracks.map((item, index) => (
                  <RowTable
                    idItem={item.id}
                    typeItem={'track'}
                    albumName={item.album.name}
                    artistName={item.artists[0].name}
                    name={item.name}
                    indexItem={index}
                    img={item.album.images[0].url}
                    handleClick={() => playTrack(item.id || '', 'track')}
                    key={item.id}
                    idAlbum={item.album.id}
                    idArtist={item.artists[0].id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutIntern>
  );
};

export default TrackPage;
