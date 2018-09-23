export interface AnimeDetail {
  id: number;
  title: string;
  official_site_url: string;
  title_kana: string;
  season_name: string;
  season_name_text: string;
  watchers_count: string;
  wikipedia_url: string;
  images: {
    recommended_url: string;
  };
}

export interface AnimeList {
  works: AnimeDetail[];
  next_page: number;
}
