import { useEffect, useState } from 'react';
import { AlbumObject } from '../interface/album';
import albumService from '../apis/albums';
import Return from '../components/Return';
import artistsService from '../apis/artist';
import { ArtistObject } from '../interface/artists';
import { PiHeart, PiShareNetworkLight } from 'react-icons/pi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AlbumTable } from '../components/Rows';
import { formatDuration, sumAndFormatDuration } from '../utils/time';
import { getArtistsNames } from '../utils/artists';
import { useTrack } from '../hooks/trackHook';
import { useParams } from 'react-router-dom';
import tokenServices from '../apis/token';
import LayoutIntern from '../layout/LayoutIntern';

const Album = () => {
  const [album, setAlbum] = useState<AlbumObject | null>(null);
  const { id } = useParams();

  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const [time, setTime] = useState<string>('');
  const { playTrack } = useTrack();

  const handleClick = (id: string) => {
    playTrack(id, 'track');
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        if (id) {
          const fetchedAlbum = await albumService.getAlbum(id);
          if (fetchedAlbum && fetchedAlbum.artists && fetchedAlbum.artists[0]) {
            const fetchArtist = await artistsService.getArtist(fetchedAlbum.artists[0].id);
            setArtist(fetchArtist);
          }
          setAlbum(fetchedAlbum);
        }
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };
    tokenServices.getToken();
    fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (album) {
      const formattedDuration = sumAndFormatDuration(album);
      setTime(formattedDuration);
    }
  }, [album]);

  if (!album) {
    return (
      <div className="min-h-[90vh] max-h-[90vh] w-full  flex flex-row  overflow-hidden">
        Loading...
      </div>
    );
  }

  return (
    <LayoutIntern idBarside={-1}>
      <div className="flex flex-col gap-5">
        <Return route="home" />
        <div className="w-full flex items-center gap-5">
          <img
            src={album?.images[0].url}
            className="w-[200px] h-[200px] rounded-sm object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
            alt={album?.name}
          />
          <div className="flex flex-col gap-2">
            <p className="font-clashDisplay text-base">
              {album?.album_type &&
                album.album_type.charAt(0).toUpperCase() + album.album_type.slice(1)}
            </p>
            <p className=" text-5xl font-bold">{album?.name}</p>
            <div className="flex items-center gap-3">
              <img
                src={artist?.images[0].url}
                className="w-[35px] h-[35px] rounded-full object-cover"
                alt={artist?.name}
              />
              <p className="font-clashDisplay text-base">{artist?.name}</p>
              <p>{album?.release_date.substring(0, 4)}</p>
              <p>{album?.tracks.total} canciones</p>
              <p>{time} min</p>
            </div>
          </div>

          <div className="flex items-center justify-end w-1/3 gap-3">
            <button
              className="rounded-md text-darkBlack bg-greenLime px-4 py-3 font-clashDisplay text-[14px] font-semibold "
              onClick={() => playTrack(album?.tracks.items[0].id || '', 'track')}
            >
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
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#3566C7]">
                <th className="py-1 ">#</th>
                <th className="text-left py-1">Título</th>
                <th className="text-left py-1">Artista</th>
                <th className="text-left py-1">
                  <MdOutlineWatchLater size={16} />
                </th>
              </tr>
            </thead>
            <tbody>
              {album?.tracks.items.map((track, index) => (
                <AlbumTable
                  key={track.id}
                  idItem={track.id}
                  idArtist={track.artists[0].id}
                  indexItem={index}
                  img={album.images[0].url}
                  name={track.name}
                  duration={formatDuration(track.duration_ms)}
                  artistName={getArtistsNames(track.artists)}
                  handleClick={() => handleClick(track.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutIntern>
  );
};

export default Album;
