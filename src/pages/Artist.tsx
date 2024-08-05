import { useEffect, useState } from 'react';
import artistsService from '../apis/artist';
import { ArtistObject } from '../interface/artists';
import Return from '../components/Return';
import { TopTracks, albumItem } from '../interface/artists';
import ArtistBanner, { TrackListTop, AlbumsArtist } from '../components/ArtistBanner';
import tokenServices from '../apis/token';
import { useParams } from 'react-router-dom';
import LayoutIntern from '../layout/LayoutIntern';
import { useTrack } from '../hooks/trackHook';
const Artist: React.FC = () => {
  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const [topTracks, setTopTracks] = useState<TopTracks | null>(null);
  const [albums, setAlbums] = useState<albumItem[]>([]);
  const { id } = useParams();
  const artistID = id || '7AGSJihqYPhYy5QzMcwcQT';
  const { playTrack } = useTrack();
  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        // Fetch artist and top tracks in parallel
        const [artistResponse, topTracksResponse] = await Promise.all([
          artistsService.getArtist(artistID),
          artistsService.getTopTracks(artistID),
        ]);

        setArtist(artistResponse);
        setTopTracks(topTracksResponse);
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    const fetchAllAlbums = async (artistID: string) => {
      let allAlbums: albumItem[] = [];
      const limit = 50;
      let offset = 0;
      let hasMoreAlbums = true;

      while (hasMoreAlbums) {
        try {
          const albumResponse = await artistsService.getAlbumsArtists(artistID, limit, offset);
          if (albumResponse && albumResponse.items.length > 0) {
            allAlbums = [...allAlbums, ...albumResponse.items];
            offset += limit;
          } else {
            hasMoreAlbums = false;
          }
        } catch (error) {
          console.error('Error fetching albums:', error);
          hasMoreAlbums = false;
        }
      }
      setAlbums(allAlbums);
    };
    fetchAllAlbums(artistID);
    fetchArtistData();
    // console.log(albums);
    tokenServices.getToken();
  }, [artistID]);

  return (
    <LayoutIntern idBarside={-1}>
      <div className="flex flex-col gap-1">
        <Return route="home" />
        <ArtistBanner
          dataCard={topTracks}
          artist={artist}
          onhandleClick={() => playTrack(topTracks?.tracks[0].id || '', 'track')}
        />
        <TrackListTop tracks={topTracks} />
        <AlbumsArtist album={albums} />
      </div>
    </LayoutIntern>
  );
};

export default Artist;
