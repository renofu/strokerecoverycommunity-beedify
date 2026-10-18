import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  content: string;
}

export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'content/articles');
  if (!fs.existsSync(articlesDirectory)) return [];
  const filenames = fs.readdirSync(articlesDirectory);
  return filenames
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({
      id: file.replace(/\.json$/, ''),
    }));
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link href="/" className="text-blue-400 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const article: Article = JSON.parse(fileContent);

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
          <p className="text-slate-400 text-sm mt-2">By {article.author}</p>
        </div>

        {article.heroImage && (
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt || article.title}
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
