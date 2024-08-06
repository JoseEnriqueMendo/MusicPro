import axios from 'axios';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;

const searchServices = {
  get: async (text: string, limit: number) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(
        `${urlBase}search?q=${text}&type=track%2Cplaylist%2Cartist%2Cshow%2Calbum%2Cepisode&market=ES&limit=${limit}&offset=3`,
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

  getRecommendedTracks: async (limit: number) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(
        `${urlBase}recommendations?limit=${limit}&market=ES&seed_genres=new-release%2Ctechno%2Csamba%2Cpop%2Creggaeton`,
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

  getArtistShow: async (limit: number) => {
    try {
      const tokenSpotify = localStorage.getItem('token') || '';
      const data = await axios.get(
        `${urlBase}search?q=cumbia+salsa+rock+k-pop+electro+anime+pop+&type=artist&market=ES&limit=${limit}&offset=3`,
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

export default searchServices;
