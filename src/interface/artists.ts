import { ExternalUrls, ImageObject, Followers } from "./miscellaneous";

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
