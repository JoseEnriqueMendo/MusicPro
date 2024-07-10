import { Track } from './music';

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean | null;
  snapshot_id: string;
  tracks: TrackPlayList;
  type: string;
  uri: string;
  primary_color?: string | null;
}

export interface PlaylistFeatureOrCategory {
  message: string;
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: itemsPlaylistFeature[];
  };
}

interface itemsPlaylistFeature {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
  primary_color?: string;
}

interface TrackPlayList {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: TrackItem[];
}

interface TrackItem {
  added_at: string;
  added_by: Added_by;
  is_local: boolean;
  track: Track;
  primary_color: string | null;
  video_thumbnail: Video_thumbnail;
}
interface Video_thumbnail {
  url: string | null;
}

interface Added_by {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: string | null;
  total: number;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}
