import { Show } from './show';

interface Image {
  url: string;
  height: number;
  width: number;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

interface ExternalUrls {
  spotify: string;
}

interface Restrictions {
  reason: string;
}

export interface Episode {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
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
  show?: Show;
  restrictions?: Restrictions;
}
