import handMicroMovementsGuide from '@/content/articles/hand-micro-movements-guide.json';
import eveningBalanceTransitionRoutine from '@/content/articles/evening-balance-transition-routine.json';
import morningStiffnessMicroRoutine from '@/content/articles/morning-stiffness-micro-routine.json';

export interface Article {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  handMicroMovementsGuide,
  eveningBalanceTransitionRoutine,
  morningStiffnessMicroRoutine,
];

export const normalizedArticles = articles;
