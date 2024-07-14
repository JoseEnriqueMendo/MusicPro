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

export interface Followers {
  href: string | null;
  total: number;
}
