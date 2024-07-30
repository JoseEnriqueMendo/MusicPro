import {
  ExternalUrls,
  ImageObject,
  Followers,
  SimplifiedArtistObject,
} from "./miscellaneous";
import { TopTrack } from "./track";

export interface ArtistObject {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

export interface TopTracks {
  tracks: TopTrack[];
}

export interface ArtistsAlbums {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: number | null;
  total: number;
  items: albumItem[];
}

export interface albumItem {
  album_group: string;
  album_type: string;
  href: string;
  id: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  artists: SimplifiedArtistObject;
  available_markets?: string[];
  images: ImageObject[];
}
