import React from "react";
import { TopTracks, ArtistObject } from "../interface/artists";
import { MdOutlineVerified, MdOutlineWatchLater } from "react-icons/md";
import { PiHeart, PiShareNetworkLight } from "react-icons/pi";

import { AlbumTable } from "./Rows";
import { formatDuration } from "../utils/time";
import { getArtistsNames } from "../utils/artists";

import { useTrack } from "../hooks/trackHook";

const ArtistBanner: React.FC<{
  dataCard: TopTracks | null;
  artist: ArtistObject | null;
}> = ({ dataCard, artist }) => {
  return (
    <div
      className="w-full flex items-center gap-5 bg-cover h-[300px] bg-center relative mt-5  overflow-hidden"
      style={{
        backgroundImage: dataCard?.tracks[0].album.images[0].url
          ? `url(${dataCard?.tracks[0].album.images[0].url})`
          : "none",
      }}
    >
      <div className="relative z-10 flex flex-col text-white p-5 gap-y-2">
        <div className="flex flex-row items-center gap-x-1">
          <MdOutlineVerified color="#42A5F5" size={22} />
          <p className="font-clashDisplay text-[16px]">
            {"  "}
            Artista verificado
          </p>
        </div>
        <p className="font-sans text-7xl font-bold">{artist?.name}</p>
        <p className="font-clashDisplay text-[16px]">
          {artist?.followers.total.toLocaleString()} seguidores
        </p>
        <div className="flex items-center gap-3">
          <button className="rounded-md text-darkBlack bg-greenLime px-4 py-3 font-clashDisplay text-[14px] font-semibold ">
            Reproducir
          </button>
          <PiHeart
            size={"40px"}
            className="border-white rounded-full border p-1.5 cursor-pointer"
          />

          <PiShareNetworkLight
            size={"40px"}
            className="border-white rounded-full border p-1.5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export const TrackListTop: React.FC<{
  tracks: TopTracks | null;
}> = ({ tracks }) => {
  const { playTrack } = useTrack();

  const handleClick = (id: string) => {
    playTrack(id, "track");
  };

  return (
    <div className="w-full mt-8">
      <p className=" font-clashDisplay text-[22px] text-white font-bold">
        Popular
      </p>
      <table className="w-full mt-8">
        <tbody>
          {tracks?.tracks.slice(0, 5).map((item, index) => (
            <AlbumTable
              key={item.id}
              idItem={item.id}
              indexItem={index}
              img={item.album.images[0].url}
              name={item.name}
              duration={formatDuration(item.duration_ms)}
              artistName={item.artists[0].name}
              handleClick={() => handleClick(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistBanner;
