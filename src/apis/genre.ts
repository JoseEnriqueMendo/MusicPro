//0JQ5DAqbMKFCbimwdOYlsl
import axios from 'axios';
const tokenSpotify = localStorage.getItem('token') || '';
const urlBase = import.meta.env.VITE_SPOTIFY_URL;
const genreServices = {
  getRecommendationsName: async () => {
    try {
      const data = await axios.get(urlBase + 'recommendations/available-genre-seeds', {
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

export default genreServices;
