import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarSide } from '../components/BarSide';
import { Playlist } from '../interface/playlist';

import playlistServices from '../apis/playlist';
const PlaylistPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    const callPlaylist = async (id: string) => {
      const res = await playlistServices.get(id);
      setPlaylist(res);
    };
    callPlaylist(id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-3/5 mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar">
        <p>{playlist?.name} </p>
        <img src={playlist?.images[0].url} className="w-40 h-40" />
        <p></p>
      </div>
    </main>
  );
};

export default PlaylistPage;
