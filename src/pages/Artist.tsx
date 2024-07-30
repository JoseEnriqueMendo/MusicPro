import { BarSide } from "../components/BarSide";
import { useEffect, useState } from "react";
import artistsService from "../apis/artist";
import { ArtistObject } from "../interface/artists";
import Return from "../components/Return";
import { TopTracks, ArtistsAlbums, albumItem } from "../interface/artists";
import ArtistBanner, {
  TrackListTop,
  AlbumsArtist,
} from "../components/ArtistBanner";
import tokenServices from "../apis/token";

const Artist: React.FC = () => {
  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const [topTracks, setTopTracks] = useState<TopTracks | null>(null);
  const [albums, setAlbums] = useState<albumItem[]>([]);
  const artistID = "7AGSJihqYPhYy5QzMcwcQT";

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
        console.error("Error fetching artist data:", error);
      }
    };

    const fetchAllAlbums = async (artistID: string) => {
      let allAlbums: albumItem[] = [];
      const limit = 50;
      let offset = 0;
      let hasMoreAlbums = true;

      while (hasMoreAlbums) {
        try {
          const albumResponse = await artistsService.getAlbumsArtists(
            artistID,
            limit,
            offset
          );
          if (albumResponse && albumResponse.items.length > 0) {
            allAlbums = [...allAlbums, ...albumResponse.items];
            offset += limit;
          } else {
            hasMoreAlbums = false;
          }
        } catch (error) {
          console.error("Error fetching albums:", error);
          hasMoreAlbums = false;
        }
      }
      setAlbums(allAlbums);
    };
    fetchAllAlbums(artistID);
    fetchArtistData();
    console.log(albums);
    tokenServices.getToken();
  }, [artistID]);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full flex flex-row overflow-hidden">
      <BarSide element={3} />
      <div className="w-[65vw] flex flex-col mt-10 px-12 overflow-y-auto overflow-x-hidden custom-scrollbar text-white gap-5">
        <div>
          <Return route="home" />
          <ArtistBanner dataCard={topTracks} artist={artist} />
          <TrackListTop tracks={topTracks} />
          <AlbumsArtist album={albums} />
        </div>
      </div>
    </main>
  );
};

export default Artist;
