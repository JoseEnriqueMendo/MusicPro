interface SpotifyCategoryIcon {
  url: string;
  height: number;
  width: number;
}

interface SpotifyCategory {
  href: string;
  icons: SpotifyCategoryIcon[];
  id: string;
  name: string;
}

export interface SpotifyCategoriesResponse {
  categories: CategoriesResponse;
}

interface CategoriesResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
  items: SpotifyCategory[];
}
