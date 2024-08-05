import axios from 'axios';
import { ArtistObject, TopTracks, ArtistsAlbums } from '../interface/artists';

const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const artistsService = {
  getArtist: async (artistID: string): Promise<ArtistObject | null> => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const response = await axios.get(`${urlBase}artists/${artistID}`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return response.data as ArtistObject;
    } catch (error) {
      console.error('Error fetching Artist:', error);
      return null;
    }
  },
  getTopTracks: async (artistID: string): Promise<TopTracks | null> => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
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
  getAlbumsArtists: async (
    artistID: string,
    limit: number,
    offset: number
  ): Promise<ArtistsAlbums | null> => {
    const include_groups: string = 'album,single,compilation';

    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const responseAlbum = await axios.get(`${urlBase}artists/${artistID}/albums`, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
        params: {
          limit,
          offset,
          include_groups,
        },
      });
      return responseAlbum.data as ArtistsAlbums;
    } catch (error) {
      console.error('Error fetching tracks:', error);
      return null;
    }
  },
};

export default artistsService;
