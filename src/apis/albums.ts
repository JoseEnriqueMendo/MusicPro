import axios from 'axios';
import { AlbumObject, NewReleases } from '../interface/album';

const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const albumService = {
  getAlbum: async (albumId: string): Promise<AlbumObject | null> => {
    try {
      const tokenSpotify = localStorage.getItem('token') || ' ';
      const response = await axios.get(`${urlBase}albums/${albumId}`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as AlbumObject;
    } catch (error) {
      console.error('Error fetching album:', error);
      return null;
    }
  },

  getNewReleases: async (): Promise<NewReleases | null> => {
    try {
      const tokenSpotify = localStorage.getItem('token') || ' ';
      const response = await axios.get(`${urlBase}browse/new-releases?`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as NewReleases;
    } catch (error) {
      console.error('Error fetching album:', error);
      return null;
    }
  },
};

export default albumService;
