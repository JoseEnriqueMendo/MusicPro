import axios from "axios";
import { ArtistObject } from "../interface/artists";

const tokenSpotify = localStorage.getItem("token") || "";

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
      console.error("Error fetching album:", error);
      return null;
    }
  },
};

export default artistsService;
