// utils/artistFormatter.ts
import { SimplifiedArtistObject } from "../interface/miscellaneous";

export const getArtistsNames = (artists: SimplifiedArtistObject[]): string => {
  return artists.map((artist) => artist.name).join(", ");
};
