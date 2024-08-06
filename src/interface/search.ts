interface SpotifySeed {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: string;
}

interface SpotifyExternalUrl {
  spotify: string;
}

interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyArtist {
  external_urls: SpotifyExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface SpotifyAlbum {
  album_type: string;
  total_tracks: number;
  external_urls: SpotifyExternalUrl;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: SpotifyArtist[];
  is_playable: boolean;
}

interface SpotifyExternalId {
  isrc: string;
}

interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalId;
  external_urls: SpotifyExternalUrl;
  href: string;
  id: string;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface SearchTracksResponse {
  seeds: SpotifySeed[];
  tracks: SpotifyTrack[];
}

interface SpotifyExternalUrl {
  spotify: string;
}

interface SpotifyFollowers {
  href: string | null;
  total: number;
}

interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

interface SpotifyArtist {
  external_urls: SpotifyExternalUrl;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SearchArtistResponse {
  artists: ArtistResponse;
}

export interface ArtistResponse {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface SearchResponse {
  albums: AlbumResponse;
  artists: ArtistResponse;
  tracks: TrackResponse;
  playlists: PlaylistResponse;
  shows: ShowResponse;
  episodes: EpisodeResponse;
}

interface AlbumResponse {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrl {
  spotify: string;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface TrackResponse {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalId;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

interface ExternalId {
  isrc: string;
}

interface PlaylistResponse {
  href: string;
  items: Playlist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface ShowResponse {
  href: string;
  items: Show[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

interface Show {
  available_markets: string[];
  copyrights: string[];
  description: string;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  html_description: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: string;
  uri: string;
}

interface EpisodeResponse {
  href: string;
  items: Episode[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

interface Episode {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  html_description: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: ResumePoint;
  type: string;
  uri: string;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}
