import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft } from 'lucide-react'
import { posts } from '../posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div role="document" aria-label="Blog post">
      {/* Hero */}
      <header className="relative min-h-[30vh] sm:min-h-[35vh] flex items-end overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-transparent" aria-hidden="true" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white font-medium mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Blog
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-4xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.date}>{post.dateFormatted}</time>
            </span>
          </div>
        </div>
      </header>

      {/* Article */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-8">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="prose prose-gray prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {post.excerpt}
            </p>
            <p className="text-gray-500 italic mt-6">
              Full article coming soon.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-tech-blue focus:ring-offset-2 rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
