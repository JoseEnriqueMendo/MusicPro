// interfaces.ts
import {
  SimplifiedTrackObject,
  SimplifiedArtistObject,
  ExternalUrls,
  ImageObject,
} from "./miscellaneous";

export interface AlbumObject {
  album_type: "album" | "single" | "compilation";
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: {
    reason: string;
  };
  tracks: {
    href: string;
    items: SimplifiedTrackObject[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  uri: string;
  copyright: {
    text: string;
    type: string;
  }[];
  external_ids: {
    isrc?: string;
    ean?: string;
    upc?: string;
  };
  genres: string[];
  label: string;
  popularity: number;
}

interface AlbumSimplified {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: OneSimplified[];
}

interface OneSimplified {
  album_type: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  href: string;
  id: string;
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  external_urls: ExternalUrls;
  images: ImageObject[];
}
export interface NewReleases {
  albums: AlbumSimplified;
}
