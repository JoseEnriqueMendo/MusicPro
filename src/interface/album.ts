// interfaces.ts

export interface ExternalUrls {
  spotify?: string;
  href: string;
}

export interface ImageObject {
  url: string;
  height?: number;
  width?: number;
}

export interface SimplifiedArtistObject {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

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
