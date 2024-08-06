import axios from 'axios';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const categoriesServices = {
  get: async (id: string) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(urlBase + 'categories/' + id, {
        headers: {
          Authorization: `Bearer ${tokenSpotify}`,
        },
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  getSeveral: async (limit: number, offset: number) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(
        `${urlBase}browse/categories?locale=sv_SE&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${tokenSpotify}`,
          },
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default categoriesServices;
