import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarSide } from '../components/BarSide';
import { Playlist } from '../interface/playlist';
import { IoArrowBack } from 'react-icons/io5';
import { PiShareNetworkLight } from 'react-icons/pi';
import { PiHeart } from 'react-icons/pi';
import { RowTable } from '../components/Rows';
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
    <main className="min-h-[90vh] max-h-[90vh] w-full bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-3/5 mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <div className="w-full text-base text-greenLime font-openSans flex  items-center gap-1 cursor-pointer hover:text-green-500">
          <IoArrowBack size={'22px'} className="cursor-pointer hover:text-lime-400" />
          Retroceder
        </div>
        <div className="flex gap-6 w-full ">
          <img
            src={playlist?.images[0].url}
            className={
              'min-w-[150px] min-h-[100px] w-[200px] h-[200px]  rounded-lg object-cover '
            }
          />
          <div className="flex flex-col  justify-end  gap-2 overflow-hidden h-full">
            <p className="font-clashDisplay text-base ">Playlist</p>
            <p className="font-clashDisplay text-5xl font-bold">{playlist?.name} </p>
            <p className=" opacity-50   text-[13px] font-openSans  line-clamp-5 text-ellipsis">
              {playlist?.description}
            </p>
            <p className="font-clashDisplay text-base mb-1">{`Creado por: ${playlist?.owner.display_name}`}</p>
          </div>
          <div className="flex items-center justify-end w-1/3 gap-3">
            <button className="rounded-md text-darkBlack bg-greenLime px-4 py-3 font-clashDisplay text-[14px] font-semibold ">
              Reproducir
            </button>
            <PiHeart
              size={'40px'}
              className="border-white rounded-full border p-1.5 cursor-pointer"
            />

            <PiShareNetworkLight
              size={'40px'}
              className="border-white rounded-full border p-1.5 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full">
          <table>
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
