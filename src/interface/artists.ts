import { ExternalUrls, ImageObject, Followers } from "./miscellaneous";
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
