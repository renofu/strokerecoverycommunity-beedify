import { articles } from '@/data/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = articles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-blue-400 hover:underline mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-2">
            <span className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>

        {article.imageUrl && (
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        )}

        <div
          className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-h2:text-slate-100 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-slate-200 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
