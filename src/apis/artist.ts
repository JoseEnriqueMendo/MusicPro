import axios from 'axios';
import { ArtistObject, TopTracks } from '../interface/artists';

const tokenSpotify = localStorage.getItem('token') || '';

const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const artistsService = {
  getArtist: async (artistID: string): Promise<ArtistObject | null> => {
    try {
      const response = await axios.get(`${urlBase}artists/${artistID}`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as ArtistObject;
    } catch (error) {
      console.error('Error fetching album:', error);
      return null;
    }
  },
  getTopTracks: async (artistID: string): Promise<TopTracks | null> => {
    try {
      const response = await axios.get(`${urlBase}artists/${artistID}/top-tracks`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as TopTracks;
    } catch (error) {
      console.error('Error fetching tracks:', error);
      return null;
    }
  },
};

export default artistsService;
