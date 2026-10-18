import { articles } from '@/data/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';

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

        {/* 2. 主图 */}
        {article.imageUrl && (
          <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        )}

        {/* 3. 正文内容前半部分/主体 */}
        <div
          className="text-slate-300 text-base leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-100 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-200 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* 4. 正文中间的柔和产品引导 (Mid-Article CTA Box) */}
        <div className="my-10 overflow-hidden rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-950/40 via-slate-900 to-indigo-950/30 p-6 md:p-7 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-2">
            <Sparkles size={15} /> Companion Practice Tool
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100 tracking-tight">
            Need structured, easy-to-use digital tools for your home routines?
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Discover SpeakFlow AI and our complete browser-based 21-App Suite, built to bring gentle support, consistency, and structure to your everyday practice.
          </p>
          <div className="mt-4">
            <a
              href="https://strokerecoveryguide.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300 shadow-md shadow-sky-400/10"
            >
              Explore the 21-App Suite <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* 5. 底部强转化横幅 (Bottom CTA Banner) */}
        <div className="mt-14 rounded-3xl bg-sky-400 p-6 sm:p-8 text-slate-950 md:flex md:items-center md:justify-between shadow-xl">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-800/85">
              A helpful next step
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl text-slate-950">
              Take Your Daily Recovery Further
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-800/90 leading-relaxed max-w-xl">
              Access non-clinical, browser-based recovery tools created specifically to bring clarity, consistency, and structure to your home practice.
            </p>
          </div>
          <a
            href="https://strokerecoveryguide.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-100 transition hover:bg-slate-800 md:mt-0 shadow-md"
          >
            Explore Main Website <ArrowRight size={16} />
          </a>
        </div>

        {/* 6. 安全免责声明 (Disclaimer) */}
        <div className="mt-10 pt-6 border-t border-slate-800/80">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/90 leading-relaxed">
            <p className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
              <span>⚠️</span> Safety & Personal Experience Disclaimer
            </p>
            This article reflects personal stroke recovery experiences, gentle routine observations, and community-shared ideas. It is non-clinical and for informational purposes only. It should not replace professional medical advice, diagnosis, or personalized physical therapy programs. Always consult your doctor, neurologist, or physical therapist before attempting new routines or movement practices at home.
          </div>
        </div>

        {/* 7. 底部返回列表 */}
        <div className="pt-4 flex justify-between items-center border-t border-slate-900">
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
