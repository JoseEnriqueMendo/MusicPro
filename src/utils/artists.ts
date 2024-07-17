// utils/artistFormatter.ts
import { SimplifiedArtistObject } from "../interface/miscellaneous";
import { Artists } from "../interface/track";

export const getArtistsNames = (
  artists: SimplifiedArtistObject[] | Artists
): string => {
  console.log("Artists array received:", artists); // Verifica el contenido del array

  if (!artists || artists.length === 0) {
    return "Unknown Artist"; // Valor por defecto si no hay artistas
  }
  return artists.map((artist) => artist.name).join(", ");
};
