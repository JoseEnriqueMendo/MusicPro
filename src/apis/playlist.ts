import axios from 'axios';
const tokenSpotify = localStorage.getItem('token') || '';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const playlistServices = {
  get: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'playlists/' + id, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getByFeatures: async () => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'browse/featured-playlists', {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  getByCategory: async (category: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'browse/categories/' + category + '/playlists', {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCover: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'playlists/' + id + '/images', {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default playlistServices;
