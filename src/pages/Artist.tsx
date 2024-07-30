import { BarSide } from '../components/BarSide';
import { useEffect, useState } from 'react';
import artistsService from '../apis/artist';
import { ArtistObject } from '../interface/artists';
import Return from '../components/Return';
import { TopTracks } from '../interface/artists';
import ArtistBanner, { TrackListTop } from '../components/ArtistBanner';
import tokenServices from '../apis/token';

const Artist = () => {
  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const [topTracks, setTopTracks] = useState<TopTracks | null>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      const artistResponse = await artistsService.getArtist('0TnOYISbd1XYRBk9myaseg');
      console.log(artistResponse);
      setArtist(artistResponse);
    };

    const fetchTopTrack = async () => {
      const topResponse = await artistsService.getTopTracks('0TnOYISbd1XYRBk9myaseg');
      console.log(topResponse);
      setTopTracks(topResponse);
    };
    fetchTopTrack();
    fetchArtist();
    tokenServices.getToken();
  }, []);

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full flex flex-row overflow-hidden">
      <BarSide element={3} />
      <div className="w-[67vw] flex flex-col mt-10 px-12 overflow-y-auto overflow-x-hidden custom-scrollbar text-white gap-5">
        <div className="">
          <Return route="home" />
          <ArtistBanner dataCard={topTracks} artist={artist} />
          <TrackListTop tracks={topTracks} />
        </div>
      </div>
    </main>
  );
};

export default Artist;
