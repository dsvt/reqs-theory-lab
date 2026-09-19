export type NewsItem = {
  slug: string;
  publishedOn: string;
  title: string;
  summary: string;
  category: 'Publication' | 'Project' | 'Talk' | 'People';
};

export const newsItems: NewsItem[] = [];
