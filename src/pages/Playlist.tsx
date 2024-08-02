import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import components
import { BarSide } from '../components/BarSide';
import { RowTable } from '../components/Rows';
import Return from '../components/Return';
import { HeadBoardDefault } from '../components/HeadBoard';
//import interface
import { Playlist } from '../interface/playlist';
import playlistServices from '../apis/playlist';
import { useTrack } from '../hooks/trackHook';

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<Playlist>();
  const { playTrack } = useTrack();

  const handleClick = (id: string, type: string) => {
    playTrack(id, type);
  };
  useEffect(() => {
    const callPlaylist = async (id: string) => {
      const res = await playlistServices.get(id);
      setPlaylist(res);
    };
    callPlaylist(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full   flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-[67vw] mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <Return route="home" />
        <HeadBoardDefault
          img={playlist?.images[0].url || ''}
          description={playlist?.description || ''}
          name={playlist?.name || ''}
          owner_name={playlist?.owner.display_name || ''}
          type="Playlist"
          onhandleClick={() => playTrack(playlist?.tracks.items[0].track.id || '', 'track')}
        />

        <div className="w-full">
          <table className=" w-full">
            <thead>
              <tr className="border-b border-[#3566C7]">
                <th className=" py-1">#</th>
                <th className="text-left py-1">Canción</th>
                <th className="text-left py-1">Artista</th>
                <th className="text-left py-1">Album</th>
              </tr>
            </thead>
            <tbody>
              {playlist?.tracks.items.map((item, index) => (
                <RowTable
                  idItem={item.track.id}
                  typeItem={item.track.track ? 'track' : item.track.episode ? 'episode' : ''}
                  albumName={item.track.album.name}
                  artistName={item.track.artists[0].name}
                  name={item.track.name}
                  indexItem={index}
                  img={item.track.album.images[0].url}
                  handleClick={handleClick}
                  key={item.track.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default PlaylistPage;
