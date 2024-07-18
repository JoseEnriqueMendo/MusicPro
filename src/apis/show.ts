import axios from 'axios';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;
const showServices = {
  get: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'shows/' + id, {
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
    let urlRequest = urlBase + 'shows?ids=';

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

  getEpisodes: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'shows/' + id + '/episodes', {
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

export default showServices;
