import React, { useEffect, useState } from "react";
import { AlbumObject } from "../interface/album";
import albumService from "../apis/albums";
import { BarSide } from "../components/BarSide";
import Return from "../components/Return";
import artistsService from "../apis/artist";
import { ArtistObject } from "../interface/artists";

const Album = () => {
  const [album, setAlbum] = useState<AlbumObject | null>(null);
  const [artist, setArtist] = useState<ArtistObject | null>(null);
  const albumId = "4aawyAB9vmqN3uQ7FjRGTy"; // ID de ejemplo, ajusta según el álbum que quieras obtener
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const fetchedAlbum = await albumService.getAlbum(albumId);
        if (fetchedAlbum && fetchedAlbum.artists && fetchedAlbum.artists[0]) {
          const fetchArtist = await artistsService.getArtist(
            fetchedAlbum.artists[0].id
          );
          setArtist(fetchArtist);
        }
        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, []);

  useEffect(() => {
    if (album) {
      const formattedDuration = sumAndFormatDuration(album);
      setTime(formattedDuration);
    }
  }, [album]);

  const sumAndFormatDuration = (album: AlbumObject): string => {
    const tracks = album?.tracks?.items || [];
    const totalDurationMs = tracks.reduce(
      (total, track) => total + track.duration_ms,
      0
    );
    const totalSeconds = Math.floor(totalDurationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-[90vh] max-h-[90vh] w-full bg-gradient-to-r from-[#064BB5] to-[#040c18cd]  flex flex-row  overflow-hidden">
      <BarSide element={-1} />
      <div className="w-3/5 mt-12 flex flex-col px-10 overflow-y-auto  overflow-x-hidden custom-scrollbar text-white gap-5">
        <Return route="home" />
        <div className="w-full flex items-center gap-5">
          {/* Imagen del álbum */}
          <img
            src={album?.images[0].url}
            className="w-[200px] h-[200px] rounded-sm object-cover"
            alt={album?.name}
          />

          {/* Detalles del álbum y artista */}
          <div className="flex flex-col gap-2">
            {/* Tipo de álbum */}
            <p className="font-clashDisplay text-base">
              {album?.album_type &&
                album.album_type.charAt(0).toUpperCase() +
                  album.album_type.slice(1)}
            </p>

            {/* Nombre del álbum */}
            <p className="font-clashDisplay text-5xl font-bold">
              {album?.name}
            </p>

            {/* Detalles del artista y fecha de lanzamiento */}
            <div className="flex items-center gap-3">
              {/* Imagen del artista */}
              <img
                src={artist?.images[0].url}
                className="w-[35px] h-[35px] rounded-full object-cover"
                alt={artist?.name}
              />
              <p className="font-clashDisplay text-base">{artist?.name}</p>
              <p>{album?.release_date.substring(0, 4)}</p>
              <p>{album?.tracks.total} canciones</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Album;
