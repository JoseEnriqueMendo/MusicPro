// llamar token  , renovar token ,  --> base ,
import axios from 'axios';
import { setItemWithExpiry } from '../utils/time';
const urlSpotify = import.meta.env.VITE_SPOTFY_URL;
const clientId = import.meta.env.VITE_CLIENT_ID;

const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const tokenServices = {
  getToken: async () => {
    const requestData = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });
    try {
      const { data } = await axios.post(urlSpotify + 'token', requestData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setItemWithExpiry('time_expired', data.access_token, 1);
      localStorage.setItem('token', data.access_token);

      return data.access_token;
    } catch (error) {
      console.log(error);
    }
  },
};

export default tokenServices;
