// utils/artistFormatter.ts
import { SimplifiedArtistObject } from '../interface/miscellaneous';

export const getArtistsNames = (artists: SimplifiedArtistObject[]): string => {
  if (!artists || artists.length === 0) {
    return 'Unknown Artist'; // Valor por defecto si no hay artistas
  }
  return artists.map((artist) => artist.name).join(', ');
};
