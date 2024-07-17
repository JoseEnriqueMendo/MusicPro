//
// BORRAR SI ES NECESARIO

import axios from 'axios';
const tokenSpotify = localStorage.getItem('token') || '';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const episodeServices = {
  get: async (id: string) => {
    try {
      const data = await axios.get(urlBase + 'episodes/' + id, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getSeveral: async (ids: string[]) => {
    let urlRequest = urlBase + 'episodes?ids=';

    ids.forEach((item, index) => {
      urlRequest = urlRequest + (index !== 0 ? ',' + item : item);
    });

    try {
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

export default episodeServices;