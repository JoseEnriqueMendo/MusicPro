import axios from 'axios';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const musicServices = {
  get: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'tracks/' + id, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getSeveral: async (ids: string[]) => {
    let urlRequest = urlBase + 'tracks?ids=';

    ids.forEach((item, index) => {
      urlRequest = urlRequest + (index !== 0 ? ',' + item : item);
    });

    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlRequest, {
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

export default musicServices;
