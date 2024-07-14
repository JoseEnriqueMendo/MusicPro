import React, { useEffect, useState } from "react";
import { AlbumObject } from "../interface/album";
import albumService from "../apis/albums";
import tokenServices from "../apis/token";
import { BarSide } from "../components/BarSide";

const Album = () => {
  const [album, setAlbum] = useState<AlbumObject | null>(null);
  const albumId = "4aawyAB9vmqN3uQ7FjRGTy"; // ID de ejemplo, ajusta según el álbum que quieras obtener

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const fetchedAlbum = await albumService.getAlbum(albumId);
        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{album.name}</h1>
      <p>Artists: {album.artists.map((artist) => artist.name).join(", ")}</p>
      <p>Release Date: {album.release_date}</p>
      <img src={album.images[0]?.url} alt={album.name} />
      {/* Aquí puedes mostrar más detalles del álbum según tus necesidades */}
    </div>
  );
};

export default Album;
