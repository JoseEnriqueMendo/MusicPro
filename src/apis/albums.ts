import axios from "axios";
import { AlbumObject } from "../interface/album";
const tokenSpotify = localStorage.getItem("token") || "";

const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const albumService = {
  getAlbum: async (albumId: string): Promise<AlbumObject | null> => {
    try {
      const response = await axios.get(`${urlBase}albums/${albumId}`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as AlbumObject;
    } catch (error) {
      console.error("Error fetching album:", error);
      return null;
    }
  },
};

export default albumService;
