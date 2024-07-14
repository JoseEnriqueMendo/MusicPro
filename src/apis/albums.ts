import axios from "axios";
import { AlbumObject } from "../interface/album"; // Ajusta la ruta según tu estructura de archivos

const tokenSpotify =
  "BQB9eqcMKbMBXgdg7zzZzuuNAmX_vtwSWicBfIuzZemm8t9sz_FC4EgHJLlJs6j4eM1uKoeE2ZZ-Z9KRAqzAXdvy977ImHIhIdtTdyQTlWjTL5IVpS8";
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const albumService = {
  getAlbum: async (albumId: string): Promise<AlbumObject | null> => {
    try {
      const response = await axios.get(`${urlBase}albums/${albumId}`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as AlbumObject; // Asegúrate de tipar correctamente la respuesta
    } catch (error) {
      console.error("Error fetching album:", error);
      return null; // Devuelve null en caso de error
    }
  },
};

export default albumService;
