import { articles } from '@/data/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const article = articles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto space-y-8">
        {/* 1. 顶部返回主页导航 */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors mb-6 font-medium"
          >
            &larr; Back to Home
          </Link>
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-3">
            <span className="bg-sky-950 text-sky-300 border border-sky-800/50 px-2.5 py-0.5 rounded-full font-medium">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>

        {/* 2. 主图（Hero Image） */}
        {article.imageUrl && (
          <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        )}

        {/* 3. 正文内容（带显式段落行距与标题边距） */}
        <div
          className="text-slate-300 text-base leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-100 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-200 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* 4. 统一安全与非临床免责声明（Disclaimer） */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-xs text-amber-200/90 leading-relaxed">
            <p className="font-semibold text-amber-400 mb-1 text-sm flex items-center gap-1.5">
              <span>⚠️</span> Safety & Personal Experience Disclaimer
            </p>
            This article reflects personal stroke recovery experiences, gentle routine observations, and community-shared ideas. It is non-clinical and for informational purposes only. It should not replace professional medical advice, diagnosis, or personalized physical therapy programs. Always consult your doctor, neurologist, or physical therapist before attempting new routines or movement practices at home.
          </div>
        </div>

        {/* 5. 底部返回入口 */}
        <div className="pt-6 flex justify-between items-center border-t border-slate-900">
          <Link
            href="/"
            className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
