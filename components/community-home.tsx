'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Headphones, Menu, Play, Sparkles, X } from 'lucide-react'
import { normalizedArticles } from '@/data/articles'
import { videos } from '@/data/videos'
import { audioTracks } from '@/data/audio'

const PAGE_SIZE = 9

function Pager({ page, total, onChange }: { page: number; total: number; onChange: (page: number) => void }) {
  return (
    <div className="mt-10 flex items-center justify-between border-t border-slate-800 pt-5 text-sm">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="inline-flex items-center gap-2 text-slate-400 transition hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={16} /> Previous
      </button>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        Page {page} of {total}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        className="inline-flex items-center gap-2 text-slate-400 transition hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        Next <ChevronRight size={16} />
      </button>
    </div>
  )
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  icon: Icon,
}: {
  eyebrow: string
  title: string
  copy: string
  icon: typeof BookOpen
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
          <Icon size={15} /> {eyebrow}
        </div>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      </div>
      <p className="max-w-sm text-sm leading-6 text-slate-400">{copy}</p>
    </div>
  )
}

export default function CommunityHome() {
  const [articlePage, setArticlePage] = useState(1)
  const [videoPage, setVideoPage] = useState(1)
  const [audioPage, setAudioPage] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)

  const articleTotal = Math.ceil(normalizedArticles.length / PAGE_SIZE)
  const videoTotal = Math.ceil(videos.length / PAGE_SIZE)
  const audioTotal = Math.ceil(audioTracks.length / 4)

  const pageItems = (items: any[], page: number, size = PAGE_SIZE) => items.slice((page - 1) * size, page * size)

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-sky-400 text-slate-950">
              <Sparkles size={18} />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Stroke Recovery<br />
              <span className="font-normal text-slate-400">Community</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#articles" className="transition hover:text-sky-300">Articles</a>
            <a href="#videos" className="transition hover:text-sky-300">Videos</a>
            <a href="#audio" className="transition hover:text-sky-300">Audio</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://strokerecoveryguide.org"
              className="hidden rounded-full bg-sky-400 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-300 sm:inline-flex"
            >
              Explore 21-App Suite <ArrowRight size={14} />
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-slate-800 p-2 text-slate-300 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-slate-800 px-5 py-5 text-sm text-slate-300 md:hidden">
            <a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a>
            <a href="#videos" onClick={() => setMenuOpen(false)}>Videos</a>
            <a href="#audio" onClick={() => setMenuOpen(false)}>Audio</a>
            <a href="https://strokerecoveryguide.org" className="text-sky-300">
              Explore the 21-App Suite <ArrowRight className="ml-2 inline" size={14} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 text-xs font-medium text-sky-300">
                <span className="size-1.5 rounded-full bg-sky-300" /> A steady place to practice
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-slate-100 md:text-7xl">
                Small steps.<br />
                <span className="text-sky-300">Meaningful momentum.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                A trusted resource hub for daily home coordination, mindful movement, and the confidence to keep showing up.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#articles"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Start exploring <ArrowRight size={16} />
                </a>
                <a
                  href="https://strokerecoveryguide.org"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/50 hover:text-sky-300"
                >
                  Discover home tools <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-slate-800 bg-slate-900 p-7 shadow-2xl shadow-sky-950/20">
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">The practice note</span>
                <span className="font-mono text-xs text-sky-300">01 / 04</span>
              </div>
              <blockquote className="text-2xl leading-9 tracking-tight text-slate-200">
                “Progress can be quiet. Give your attention to the next comfortable movement.”
              </blockquote>
              <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-5 text-sm">
                <span className="text-slate-500">A note for today</span>
                <span className="text-sky-300">
                  Read the guide <ArrowRight className="ml-1 inline" size={14} />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 lg:px-8">
          <SectionIntro
            eyebrow="Field notes"
            title="Ideas for your everyday practice"
            copy="Clear, practical reading for building a routine that feels supportive and entirely your own."
            icon={BookOpen}
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pageItems(normalizedArticles, articlePage).map((article: any) => (
              <Link
                href={`/articles/${article.id}`}
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-sky-400/40"
              >
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt={article.imageAlt || article.title}
                    className="h-48 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-sky-300">
                    <span>{article.category}</span>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-slate-100">{article.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">{article.summary}</p>
                  <div className="mt-auto pt-6 text-sm font-medium text-slate-300">
                    Read field note <ArrowRight className="ml-1 inline transition group-hover:translate-x-1" size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pager page={articlePage} total={articleTotal} onChange={setArticlePage} />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-400/15 via-slate-900 to-indigo-400/10 p-8 md:p-12">
            <div className="relative max-w-2xl">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                A little more support, right in your browser
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
                Build a practice that meets you where you are.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Explore SpeakFlow AI and the full 21-App Suite for approachable prompts, daily tools, and gentle structure you can return to whenever it helps.
              </p>
              <a
                href="https://strokerecoveryguide.org"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                Explore the suite <ArrowRight size={16} />
              </a>
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-sky-300/20" />
            <div className="pointer-events-none absolute -right-4 -top-4 size-40 rounded-full border border-sky-300/10" />
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <SectionIntro
            eyebrow="Watch and practice"
            title="A visual guide for small moments"
            copy="Short, focused videos to help you make space for a calm and consistent home routine."
            icon={Play}
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pageItems(videos, videoPage).map((video: any) => (
              <article key={video.id} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className="relative">
                  <img src={video.imageUrl} alt="" className="h-48 w-full object-cover opacity-75 transition group-hover:opacity-100" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid size-12 place-items-center rounded-full bg-slate-950/80 text-sky-300 ring-1 ring-sky-300/40">
                      <Play size={18} fill="currentColor" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded bg-slate-950/80 px-2 py-1 font-mono text-[11px] text-slate-200">
                    {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-sky-300">{video.category}</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-100">{video.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
          <Pager page={videoPage} total={videoTotal} onChange={setVideoPage} />
        </section>

        <section id="audio" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 lg:px-8">
          <SectionIntro
            eyebrow="Listen in"
            title="Audio for your quiet corner"
            copy="Press play when you want a little more structure, softness, or company."
            icon={Headphones}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {pageItems(audioTracks, audioPage, 4).map((track: any) => (
              <article key={track.id} className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <button
                  aria-label={`Play ${track.title}`}
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-sky-400 text-slate-950 transition hover:bg-sky-300"
                >
                  <Play size={16} fill="currentColor" />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-medium text-slate-100">{track.title}</h3>
                    <span className="font-mono text-xs text-slate-500">{track.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{track.description}</p>
                </div>
              </article>
            ))}
          </div>
          <Pager page={audioPage} total={audioTotal} onChange={setAudioPage} />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-3xl bg-sky-400 p-8 text-slate-950 md:flex md:items-center md:justify-between md:p-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-800/70">A helpful next step</div>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                Take Your Daily Practice to the Next Level
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-800/80">
                Try browser-based apps designed to bring a little more clarity and consistency to the moments that matter.
              </p>
            </div>
            <a
              href="https://strokerecoveryguide.org"
              className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 md:mt-0"
            >
              Explore home tools <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-lg bg-sky-400 text-slate-950">
                <Sparkles size={16} />
              </span>
              <span className="font-semibold">Stroke Recovery Community</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              A resource hub for thoughtful daily practice, shared encouragement, and home coordination ideas.
            </p>
            <p className="mt-6 text-xs text-slate-600">© 2026 Stroke Recovery Community. All rights reserved.</p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-slate-400">
            <a href="#articles" className="hover:text-sky-300">Articles</a>
            <a href="#videos" className="hover:text-sky-300">Videos</a>
            <a href="#audio" className="hover:text-sky-300">Audio</a>
            <a href="https://strokerecoveryguide.org" className="font-medium text-sky-300 hover:text-sky-200">
              Commercial Suite <ArrowRight className="ml-1 inline" size={14} />
            </a>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl border-t border-slate-900 px-5 py-6 lg:px-8">
          <p className="text-xs leading-6 text-slate-600">
            <span className="font-semibold text-slate-500">Educational FDA Compliance Disclaimer:</span> This website provides general educational and wellness information only. It is not medical advice and is not intended to diagnose, treat, cure, or prevent any condition. Always use your own judgment and consult a qualified professional for personal guidance.
          </p>
        </div>
      </footer>
    </div>
  )
}
