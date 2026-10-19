import handMicroMovementsGuide from '@/content/articles/hand-micro-movements-guide.json';
import eveningBalanceTransitionRoutine from '@/content/articles/evening-balance-transition-routine.json';
import morningStiffnessMicroRoutine from '@/content/articles/morning-stiffness-micro-routine.json';
import visualTrackingBrainFitness from '@/content/articles/visual-tracking-brain-fitness.json';
import vagusNerveBinauralCalm from '@/content/articles/vagus-nerve-binaural-calm.json';
import seatedBaDuanJinRoutine from '@/content/articles/seated-ba-duan-jin-routine.json';
import mentalImageryNeuroplasticity from '@/content/articles/mental-imagery-neuroplasticity.json';
import vocalHesitationMicroPhonation from '@/content/articles/vocal-hesitation-micro-phonation.json';
import restoringGroundConnection from '@/content/articles/restoring-ground-connection.json';

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
  visualTrackingBrainFitness,
  vagusNerveBinauralCalm,
  seatedBaDuanJinRoutine,
  mentalImageryNeuroplasticity,
  vocalHesitationMicroPhonation,
  restoringGroundConnection,
];

export const normalizedArticles = articles;
